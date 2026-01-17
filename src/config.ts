import * as vscode from 'vscode';
import { PRESET_THEMES, HighlightTheme } from './constants';

/**
 * 配置管理器类
 * 负责从 VS Code 缓存中读取插件设置，并结合内置预设生成最终样式
 */
export class ConfigManager {
    /**
     * 获取当前插件是否启用
     */
    public static isEnabled(): boolean {
        return vscode.workspace.getConfiguration('focusHighlight').get<boolean>('enabled', true);
    }

    /**
     * 获取合并后的高亮样式配置
     * 逻辑：如果选择 custom 则使用自定义配置，否则完全使用预设方案
     */
    public static getHighlightStyle(): HighlightTheme {
        const config = vscode.workspace.getConfiguration('focusHighlight');
        const themeName = config.get<string>('theme', 'softBlue');
        const showBottomBorder = config.get<boolean>('showBottomBorder', true);
        const showGutterIcon = config.get<boolean>('showGutterIcon', true);
        
        // 统一处理下边框宽度安全限制
        const bWidth = config.get<string>('bottomBorderWidth', '1px');
        const widthVal = parseFloat(bWidth) || 0;
        const safeBottomWidth = widthVal > 5 ? '5px' : (widthVal <= 0 ? '0' : bWidth);

        // --- 分支 A：显式自定义模式 ---
        if (themeName === 'custom') {
            const customBg = config.get<string>('customBackgroundColor', '');
            return {
                backgroundColor: customBg,
                borderColor: config.get<string>('customBorderColor', ''),
                borderWidth: showBottomBorder ? `0 0 ${safeBottomWidth} 0` : '0',
                borderStyle: config.get<string>('bottomBorderStyle', 'solid'),
                // 自定义模式下，Gutter 颜色默认跟随背景色
                gutterIconColor: showGutterIcon ? customBg : undefined, 
                bottomBorderColor: config.get<string>('customBottomBorderColor', ''),
            };
        }

        // --- 分支 B：预设主题模式 ---
        // 自动识别 VS Code 当前主题深浅
        const isDark = vscode.window.activeColorTheme.kind === vscode.ColorThemeKind.Dark || 
                       vscode.window.activeColorTheme.kind === vscode.ColorThemeKind.HighContrast;
        
        // 获取预设方案
        const preset = PRESET_THEMES[themeName] || PRESET_THEMES['softBlue'];
        const presetStyle = isDark ? preset.dark : preset.light;

        // 合并边框：处理 4 位格式 (0 0 0 2px) 或 单值格式 (1px)
        let finalBorderWidth = presetStyle.borderWidth || "0";
        if (showBottomBorder && safeBottomWidth !== '0') {
            const parts = finalBorderWidth.split(' ');
            if (parts.length === 4) {
                parts[2] = safeBottomWidth; // 修改 bottom 位
                finalBorderWidth = parts.join(' ');
            } else if (finalBorderWidth === "0" || finalBorderWidth === "transparent") {
                finalBorderWidth = `0 0 ${safeBottomWidth} 0`;
            }
            // 如果是 1px 等全边框格式，保持原样，通过 borderStyle 体现
        }

        // 合并配置：如果用户定义了自定义颜色，则覆盖预设
        return {
            backgroundColor: presetStyle.backgroundColor,
            borderColor: presetStyle.borderColor,
            borderWidth: finalBorderWidth,
            borderStyle: showBottomBorder ? config.get<string>('bottomBorderStyle', 'solid') : (presetStyle.borderStyle || "solid"),
            gutterIconColor: showGutterIcon ? presetStyle.gutterIconColor : undefined,
            // 预设模式下，仅允许用户通过 customBottomBorderColor 覆盖底部边框色（增加灵活性）
            bottomBorderColor: showBottomBorder ? (config.get<string>('customBottomBorderColor', '') || presetStyle.bottomBorderColor) : undefined,
        };
    }
}
