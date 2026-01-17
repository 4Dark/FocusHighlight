/**
 * 样式方案接口定义
 */
export interface HighlightTheme {
    backgroundColor: string;
    borderColor?: string;
    borderWidth?: string;
    borderStyle?: string;
    gutterIconColor?: string; // Gutter 区域左侧竖线颜色
    bottomBorderColor?: string; // 行下边框颜色
}

/**
 * 主题适配器：包含深色和浅色两种模式的配置
 */
export interface ThemeAdapter {
    dark: HighlightTheme;
    light: HighlightTheme;
}

/**
 * 内置的 10 套预设高亮方案
 */
export const PRESET_THEMES: Record<string, ThemeAdapter> = {
    // 1. 柔和蓝 (Soft Blue) - 默认推荐，清新舒适
    softBlue: {
        dark: {
            backgroundColor: "rgba(0, 122, 204, 0.15)",
            borderColor: "rgba(0, 122, 204, 0.3)",
            borderStyle: "solid",
            borderWidth: "0 0 0 2px",
            gutterIconColor: "rgba(0, 122, 204, 0.45)",
            bottomBorderColor: "rgba(0, 122, 204, 0.3)"
        },
        light: {
            backgroundColor: "rgba(0, 122, 204, 0.1)",
            borderColor: "rgba(0, 122, 204, 0.2)",
            borderStyle: "solid",
            borderWidth: "0 0 0 2px",
            gutterIconColor: "rgba(0, 122, 204, 0.4)",
            bottomBorderColor: "rgba(0, 122, 204, 0.2)"
        }
    },
    // 2. 护眼绿 (Eye-Care Green) - 减少视觉疲劳
    eyeCareGreen: {
        dark: {
            backgroundColor: "rgba(72, 128, 72, 0.2)",
            borderColor: "rgba(72, 128, 72, 0.4)",
            borderStyle: "solid",
            borderWidth: "0 0 0 2px",
            gutterIconColor: "rgba(72, 128, 72, 0.5)",
            bottomBorderColor: "rgba(72, 128, 72, 0.3)"
        },
        light: {
            backgroundColor: "rgba(199, 237, 204, 0.4)",
            borderColor: "rgba(72, 128, 72, 0.2)",
            borderStyle: "solid",
            borderWidth: "0 0 0 2px",
            gutterIconColor: "rgba(72, 128, 72, 0.4)",
            bottomBorderColor: "rgba(72, 128, 72, 0.2)"
        }
    },
    // 3. 醒目琥珀 (Striking Amber) - 对比度高，定位迅速
    strikingAmber: {
        dark: {
            backgroundColor: "rgba(255, 191, 0, 0.15)",
            borderColor: "rgba(255, 191, 0, 0.4)",
            borderStyle: "solid",
            borderWidth: "0 0 0 2px",
            gutterIconColor: "rgba(255, 191, 0, 0.5)",
            bottomBorderColor: "rgba(255, 191, 0, 0.3)"
        },
        light: {
            backgroundColor: "rgba(255, 191, 0, 0.12)",
            borderColor: "rgba(255, 191, 0, 0.3)",
            borderStyle: "solid",
            borderWidth: "0 0 0 2px",
            gutterIconColor: "rgba(255, 191, 0, 0.4)",
            bottomBorderColor: "rgba(255, 191, 0, 0.2)"
        }
    },
    // 4. 低调灰 (Low-key Gray) - 沉稳内敛，不干扰视线
    lowKeyGray: {
        dark: {
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderColor: "rgba(255, 255, 255, 0.1)",
            borderStyle: "solid",
            borderWidth: "0 0 0 2px",
            gutterIconColor: "rgba(255, 255, 255, 0.2)",
            bottomBorderColor: "rgba(255, 255, 255, 0.1)"
        },
        light: {
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            borderColor: "rgba(0, 0, 0, 0.1)",
            borderStyle: "solid",
            borderWidth: "0 0 0 2px",
            gutterIconColor: "rgba(0, 0, 0, 0.2)",
            bottomBorderColor: "rgba(0, 0, 0, 0.1)"
        }
    },
    // 5. 深海蓝 (Deep Ocean) - 宁静专业
    deepOcean: {
        dark: {
            backgroundColor: "rgba(30, 144, 255, 0.12)",
            gutterIconColor: "rgba(30, 144, 255, 0.4)",
            bottomBorderColor: "rgba(30, 144, 255, 0.3)"
        },
        light: {
            backgroundColor: "rgba(30, 144, 255, 0.08)",
            gutterIconColor: "rgba(30, 144, 255, 0.3)",
            bottomBorderColor: "rgba(30, 144, 255, 0.2)"
        }
    },
    // 6. 森林绿 (Forest Green) - 自然舒适
    forestGreen: {
        dark: {
            backgroundColor: "rgba(34, 139, 34, 0.15)",
            gutterIconColor: "rgba(34, 139, 34, 0.4)",
            bottomBorderColor: "rgba(34, 139, 34, 0.3)"
        },
        light: {
            backgroundColor: "rgba(34, 139, 34, 0.08)",
            gutterIconColor: "rgba(34, 139, 34, 0.3)",
            bottomBorderColor: "rgba(34, 139, 34, 0.2)"
        }
    },
    // 7. 温暖日落 (Warm Sunset) - 温馨醒目
    warmSunset: {
        dark: {
            backgroundColor: "rgba(255, 69, 0, 0.12)",
            gutterIconColor: "rgba(255, 69, 0, 0.4)",
            bottomBorderColor: "rgba(255, 69, 0, 0.3)"
        },
        light: {
            backgroundColor: "rgba(255, 69, 0, 0.06)",
            gutterIconColor: "rgba(255, 69, 0, 0.3)",
            bottomBorderColor: "rgba(255, 69, 0, 0.2)"
        }
    },
    // 8. 薰衣草紫 (Lavender Purple) - 优雅独特
    lavenderPurple: {
        dark: {
            backgroundColor: "rgba(138, 43, 226, 0.15)",
            gutterIconColor: "rgba(138, 43, 226, 0.4)",
            bottomBorderColor: "rgba(138, 43, 226, 0.3)"
        },
        light: {
            backgroundColor: "rgba(138, 43, 226, 0.08)",
            gutterIconColor: "rgba(138, 43, 226, 0.3)",
            bottomBorderColor: "rgba(138, 43, 226, 0.2)"
        }
    },
    // 9. 极简主义 (Minimalist) - 极细边框，极致纯净
    minimalist: {
        dark: {
            backgroundColor: "transparent",
            borderColor: "rgba(255, 255, 255, 0.2)",
            borderStyle: "solid",
            borderWidth: "1px 0 1px 0",
            gutterIconColor: "rgba(255, 255, 255, 0.2)",
            bottomBorderColor: "rgba(255, 255, 255, 0.2)"
        },
        light: {
            backgroundColor: "transparent",
            borderColor: "rgba(0, 0, 0, 0.1)",
            borderStyle: "solid",
            borderWidth: "1px 0 1px 0",
            gutterIconColor: "rgba(0, 0, 0, 0.15)",
            bottomBorderColor: "rgba(0, 0, 0, 0.1)"
        }
    },
    // 10. 高对比度 (High Contrast) - 辅助视障或强光环境
    highContrast: {
        dark: {
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            borderColor: "#ffffff",
            borderStyle: "solid",
            borderWidth: "1px",
            gutterIconColor: "rgba(255, 255, 255, 0.6)",
            bottomBorderColor: "#ffffff"
        },
        light: {
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            borderColor: "#000000",
            borderStyle: "solid",
            borderWidth: "1px",
            gutterIconColor: "rgba(0, 0, 0, 0.4)",
            bottomBorderColor: "#000000"
        }
    }
};
