# Focus Highlight

[![English](https://img.shields.io/badge/Language-English-blue)](README.md)

一个为 VS Code 打造的高效光标行高亮插件，提供清晰且护眼的背景高亮。支持深色/浅色主题自动适配。

## ✨ 功能特性

### 🎯 核心功能

- **整行高亮**：实时高亮光标所在的整行，无缝跟随光标移动。
- **多光标支持**：多光标编辑时，所有活动行同时显示高亮。
- **自动主题适配**：根据编辑器主题（深色/浅色）自动切换对应的配色方案。
- **10 套预设方案**：精心设计的配色方案，满足不同环境和审美需求。

### 🎨 视觉增强

- **美观且不遮挡**：高亮设计经过优化，确保代码清晰易读。
- **侧边栏标识 (Gutter)**：在行号区域左侧显示彩色竖线，增强定位。
- **下边框样式**：可选的底部边框高亮，提供额外的视觉重点。
- **完全自定义**：支持覆盖任何预设颜色，或打造完全个性化的样式。

## 🚀 快速开始

### 安装

1. 打开 VS Code **扩展市场**。
2. 搜索 **"Focus Highlight"**。
3. 点击 **安装 (Install)**。

### 基本用法

插件安装后会自动激活。你可以通过命令面板（`Ctrl+Shift+P` / `Cmd+Shift+P`）执行以下命令：

- `Focus Highlight: 开启/关闭高亮`
- `Focus Highlight: 选择主题配色`

## ⚙️ 配置说明

你可以在 VS Code 的设置面板中修改以下配置，或者直接编辑 `settings.json`。

### 常规设置

| 配置项 | 类型 | 默认值 | 说明 |
|:---|:---|:---|:---|
| `enabled` | boolean | `true` | 是否启用光标行高亮功能。 |
| `theme` | string | `"softBlue"` | 选择内置的主题，或设置为 `"custom"` 以进行全手动控制。 |

### 视觉增强设置

| 配置项 | 类型 | 默认值 | 说明 |
|:---|:---|:---|:---|
| `showGutterIcon` | boolean | `true` | 是否在行号区域左侧显示彩色竖线。 |
| `showBottomBorder` | boolean | `true` | 是否显示高亮行的下边框。 |
| `bottomBorderWidth` | string | `"1px"` | 下边框的宽度（例如：`1px`, `2px`）。 |
| `bottomBorderStyle` | string | `"solid"` | 下边框的线条样式（`solid`, `dashed`, `dotted`, `double`）。 |

### 自定义样式覆盖

| 配置项 | 类型 | 说明 |
|:---|:---|:---|
| `customBackgroundColor` | string | 覆盖背景颜色（支持 HEX, RGB, RGBA）。 |
| `customBorderColor` | string | 覆盖主边框颜色。 |
| `customBottomBorderColor`| string | 覆盖下边框颜色。 |

## 🎨 配色方案详解

Focus Highlight 预置了 10 套方案，每套方案都针对深色和浅色主题进行了优化。

| 主题 | 说明 | 深色模式颜色 | 浅色模式颜色 |
|:---|:---|:---|:---|
| **柔和蓝 (Soft Blue)** | 默认推荐，清新舒适 | `rgba(0, 122, 204, 0.15)` | `rgba(0, 122, 204, 0.1)` |
| **护眼绿 (Eye-Care Green)** | 减少视觉疲劳 | `rgba(72, 128, 72, 0.2)` | `rgba(199, 237, 204, 0.4)` |
| **醒目琥珀 (Striking Amber)** | 对比度高，定位迅速 | `rgba(255, 191, 0, 0.15)` | `rgba(255, 191, 0, 0.12)` |
| **低调灰 (Low-key Gray)** | 沉稳内敛，不干扰视线 | `rgba(255, 255, 255, 0.05)` | `rgba(0, 0, 0, 0.05)` |
| **深海蓝 (Deep Ocean)** | 宁静专业 | `rgba(30, 144, 255, 0.12)` | `rgba(30, 144, 255, 0.08)` |
| **森林绿 (Forest Green)** | 自然舒适 | `rgba(34, 139, 34, 0.15)` | `rgba(34, 139, 34, 0.08)` |
| **温暖日落 (Warm Sunset)** | 温馨醒目 | `rgba(255, 69, 0, 0.12)` | `rgba(255, 69, 0, 0.06)` |
| **薰衣草紫 (Lavender Purple)** | 优雅独特 | `rgba(138, 43, 226, 0.15)` | `rgba(138, 43, 226, 0.08)` |
| **极简主义 (Minimalist)** | 极简至上 | `transparent` | `transparent` |
| **高对比度 (High Contrast)** | 辅助定位或强光环境 | `rgba(255, 255, 255, 0.15)` | `rgba(0, 0, 0, 0.05)` |

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！如果你发现了 Bug 或有新功能建议，请联系我们。

## 📄 许可证

[MIT 许可证](LICENSE)
