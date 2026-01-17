import * as vscode from 'vscode';
import { Highlighter } from './highlighter';

/**
 * 插件激活入口
 * @param context 扩展上下文
 */
export function activate(context: vscode.ExtensionContext) {
    console.log('Focus Highlight 插件已激活');

    const highlighter = new Highlighter();

    // 1. 初始激活时应用高亮
    if (vscode.window.activeTextEditor) {
        highlighter.applyHighlight(vscode.window.activeTextEditor);
    }

    /**
     * 注册事件监听器
     */

    // 监听光标位置变化 (光标移动、多光标编辑)
    let selectionTimeout: NodeJS.Timeout | undefined;
    const selectionChangeDisposable = vscode.window.onDidChangeTextEditorSelection((event: vscode.TextEditorSelectionChangeEvent) => {
        if (selectionTimeout) {
            clearTimeout(selectionTimeout);
        }
        selectionTimeout = setTimeout(() => {
            highlighter.applyHighlight(event.textEditor);
        }, 10); // 10ms debounce for performance
    });

    // 监听活跃编辑器变化 (切换文件、切换编辑器窗口)
    const activeEditorChangeDisposable = vscode.window.onDidChangeActiveTextEditor((editor: vscode.TextEditor | undefined) => {
        if (editor) {
            highlighter.applyHighlight(editor);
        }
    });

    // 监听配置项变化 (用户修改 Settings.json)
    const configChangeDisposable = vscode.workspace.onDidChangeConfiguration((event: vscode.ConfigurationChangeEvent) => {
        // 仅在属于本插件的配置项变化时更新
        if (event.affectsConfiguration('focusHighlight')) {
            highlighter.updateDecorationType();
            highlighter.applyHighlight(vscode.window.activeTextEditor);
        }
    });

    // 监听主题颜色变化 (深色/浅色主题切换时自动推荐适配方案)
    const themeChangeDisposable = vscode.window.onDidChangeActiveColorTheme(() => {
        highlighter.updateDecorationType();
        highlighter.applyHighlight(vscode.window.activeTextEditor);
    });

    // 注册命令
    const toggleCommand = vscode.commands.registerCommand('focusHighlight.toggle', () => {
        const config = vscode.workspace.getConfiguration('focusHighlight');
        const currentState = config.get<boolean>('enabled', true);
        const newState = !currentState;
        config.update('enabled', newState, true);
        vscode.window.showInformationMessage(`Focus Highlight is now ${newState ? 'enabled' : 'disabled'}.`);
    });

    const selectThemeCommand = vscode.commands.registerCommand('focusHighlight.selectTheme', async () => {
        const themes = [
            { label: 'Soft Blue', value: 'softBlue' },
            { label: 'Eye-care Green', value: 'eyeCareGreen' },
            { label: 'Striking Amber', value: 'strikingAmber' },
            { label: 'Low-key Gray', value: 'lowKeyGray' },
            { label: 'Deep Ocean', value: 'deepOcean' },
            { label: 'Forest Green', value: 'forestGreen' },
            { label: 'Warm Sunset', value: 'warmSunset' },
            { label: 'Lavender Purple', value: 'lavenderPurple' },
            { label: 'Minimalist', value: 'minimalist' },
            { label: 'High Contrast', value: 'highContrast' },
            { label: 'Custom', value: 'custom' }
        ];

        const selected = await vscode.window.showQuickPick(themes, {
            placeHolder: 'Select a highlight theme'
        });

        if (selected) {
            const config = vscode.workspace.getConfiguration('focusHighlight');
            await config.update('theme', selected.value, true);
        }
    });

    // 将所有监听器加入上下文，插件卸载时自动销毁
    context.subscriptions.push(
        highlighter,
        selectionChangeDisposable,
        activeEditorChangeDisposable,
        configChangeDisposable,
        themeChangeDisposable,
        toggleCommand,
        selectThemeCommand
    );
}

/**
 * 插件停用清理
 */
export function deactivate() {}
