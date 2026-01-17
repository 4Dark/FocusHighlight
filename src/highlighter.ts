import * as vscode from 'vscode';
import { ConfigManager } from './config';

/**
 * 高亮核心逻辑处理类
 */
export class Highlighter {
    private decorationType: vscode.TextEditorDecorationType | undefined;

    constructor() {
        // 初始化时根据配置创建装饰器类型
        this.updateDecorationType();
    }

    /**
     * 生成 Gutter 左侧竖线图标的 SVG Data URI
     * @param color 竖线颜色
     */
    private generateGutterIconSvg(color: string): string {
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="3" height="20" viewBox="0 0 3 20">
            <rect width="3" height="20" fill="${color}"/>
        </svg>`;
        return 'data:image/svg+xml;base64,' + Buffer.from(svg).toString('base64');
    }

    /**
     * 更新装饰器样式类型
     * 当用户修改设置或切换主题时调用
     */
    public updateDecorationType(): void {
        // 如果已存在装饰器，先销毁，防止样式叠加
        if (this.decorationType) {
            this.decorationType.dispose();
        }

        const style = ConfigManager.getHighlightStyle();

        // 创建新的装饰器类型，包含 Gutter 图标
        this.decorationType = vscode.window.createTextEditorDecorationType({
            isWholeLine: true, // 关键：整行色块高亮
            backgroundColor: style.backgroundColor,
            borderColor: style.bottomBorderColor || style.borderColor, // 优先使用下边框颜色
            borderStyle: style.borderStyle,
            borderWidth: style.borderWidth,
            // Gutter 左侧彩色竖线
            gutterIconPath: style.gutterIconColor ? vscode.Uri.parse(this.generateGutterIconSvg(style.gutterIconColor)) : undefined,
            gutterIconSize: 'contain'
        });
    }

    /**
     * 为编辑器应用高亮
     * @param editor 目标文本编辑器
     */
    public applyHighlight(editor: vscode.TextEditor | undefined): void {
        if (!editor || !this.decorationType) {
            return;
        }

        // 检查插件是否在设置中被禁用
        if (!ConfigManager.isEnabled()) {
            editor.setDecorations(this.decorationType, []);
            return;
        }

        // 多光标支持：获取编辑器中所有的 Selection
        const selections = editor.selections;
        
        // 将每个光标所在的行转换为 Range
        const ranges = selections.map((selection: vscode.Selection) => {
            const line = selection.active.line;
            return new vscode.Range(line, 0, line, 0);
        });

        // 应用装饰器到所有 Range
        editor.setDecorations(this.decorationType, ranges);
    }

    /**
     * 清除编辑器上的高亮装饰
     * @param editor 目标文本编辑器
     */
    public clearHighlight(editor: vscode.TextEditor | undefined): void {
        if (editor && this.decorationType) {
            editor.setDecorations(this.decorationType, []);
        }
    }

    /**
     * 销毁资源
     */
    public dispose(): void {
        if (this.decorationType) {
            this.decorationType.dispose();
        }
    }
}
