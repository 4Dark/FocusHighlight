# Focus Highlight

[![English](https://img.shields.io/badge/语言-中文-blue)](README.zh-cn.md)

A lightweight VS Code extension that provides a clear and eye-friendly background highlight for the current active line. It features automatic dark/light theme adaptation.

## ✨ Features

### 🎯 Core Capabilities

- **Full-line Highlight**: Real-time highlighting of the entire line where the cursor is located.
- **Multi-cursor Support**: Highlights all active lines simultaneously during multi-cursor editing.
- **Automatic Theme Adaptation**: Intelligently switches between dark and light variants based on your active VS Code theme.
- **10 Elegant Presets**: Carefully crafted color schemes for various environments and preferences.

### 🎨 Visual Enhancement

- **Non-obtrusive Design**: Highlights are designed to keep code readable and clear.
- **Gutter Indicator**: Adds a subtle vertical bar in the line number area for better focus.
- **Bottom Border Style**: Optional customizable bottom border for extra emphasis.
- **Full Customization**: Ability to override any preset color or create a completely custom look.

## 🚀 Getting Started

### Installation

1. Open **VS Code Extensions Marketplace**.
2. Search for **"Focus Highlight"**.
3. Click **Install**.

### Basic Usage

Once installed, the extension activates automatically. You can use the following commands from the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`):

- `Focus Highlight: Toggle Enable/Disable`
- `Focus Highlight: Select Theme`

## ⚙️ Configuration Guide

Modify these settings in the VS Code Settings panel or directly in `settings.json`.

### General Settings

| Setting | Type | Default | Description |
|:---|:---|:---|:---|
| `enabled` | boolean | `true` | Enable or disable the line highlighting feature. |
| `theme` | string | `"softBlue"` | Select a preset theme or `"custom"` for full control. |

### Visual Enhancement Settings

| Setting | Type | Default | Description |
|:---|:---|:---|:---|
| `showGutterIcon` | boolean | `true` | Show a colored vertical bar in the gutter area. |
| `showBottomBorder` | boolean | `true` | Enable a bottom border for the highlighted line. |
| `bottomBorderWidth` | string | `"1px"` | Width of the bottom border (e.g., `1px`, `2px`). |
| `bottomBorderStyle` | string | `"solid"` | Style of the border (`solid`, `dashed`, `dotted`, `double`). |

### Custom Style Overrides

| Setting | Type | Description |
|:---|:---|:---|
| `customBackgroundColor` | string | Override the background color (supports HEX, RGB, RGBA). |
| `customBorderColor` | string | Override the main border color. |
| `customBottomBorderColor`| string | Override the bottom border color. |

## 🎨 Theme Schemes

Focus Highlight comes with 10 presets, each optimized for both Dark and Light VS Code themes.

| Theme | Description | Dark Mode | Light Mode |
|:---|:---|:---|:---|
| **Soft Blue** | Fresh and comfortable | `rgba(0, 122, 204, 0.15)` | `rgba(0, 122, 204, 0.1)` |
| **Eye-Care Green** | Reduces visual fatigue | `rgba(72, 128, 72, 0.2)` | `rgba(199, 237, 204, 0.4)` |
| **Striking Amber** | High contrast, quick positioning | `rgba(255, 191, 0, 0.15)` | `rgba(255, 191, 0, 0.12)` |
| **Low-key Gray** | Calm and unobtrusive | `rgba(255, 255, 255, 0.05)` | `rgba(0, 0, 0, 0.05)` |
| **Deep Ocean** | Serene and professional | `rgba(30, 144, 255, 0.12)` | `rgba(30, 144, 255, 0.08)` |
| **Forest Green** | Natural and relaxed | `rgba(34, 139, 34, 0.15)` | `rgba(34, 139, 34, 0.08)` |
| **Warm Sunset** | Warm and prominent | `rgba(255, 69, 0, 0.12)` | `rgba(255, 69, 0, 0.06)` |
| **Lavender Purple** | Elegant and unique | `rgba(138, 43, 226, 0.15)` | `rgba(138, 43, 226, 0.08)` |
| **Minimalist** | Pure simplicity | `transparent` | `transparent` |
| **High Contrast** | Accessibility focus | `rgba(255, 255, 255, 0.15)` | `rgba(0, 0, 0, 0.05)` |

## 🤝 Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.

## 📄 License

[MIT License](LICENSE)
