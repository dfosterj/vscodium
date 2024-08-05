# vscodium vscode Keybindings Configuration

# vscode for vim users

This repository contains a custom keybindings configuration for Visual Studio Code. The keybindings are designed to enhance productivity by providing shortcuts for commonly used commands and actions using vim like key commands.  Ideally to be mouseless friendly.


## Installation

To use these keybindings, place the `keybindings.json` file in the following directory:

- **Linux/macOS**: `~/.config/Code/User/keybindings.json`
- **Windows**: `%APPDATA%\Code\User\keybindings.json`

In order to use this full setup you must install Lazygit an Github cli for your workstation.
[LazyGit](https://github.com/jesseduffield/lazygit)
[GitHub CLI](https://cli.github.com/)


## Keybindings

### Terminal and Panel Management
- **Ctrl + T**: Focus on the terminal.
- **Ctrl + Shift + T**: Close the panel (when terminal or editor is focused).
- **Ctrl + X**: Toggle maximized panel (when terminal is focused).

### Explorer and Sidebar
- **i**: Open file to the side (when explorer is focused and visible).
- **Ctrl + B**: Focus on Explorer or toggle sidebar visibility, depending on whether the explorer is open.

### Editor Navigation
- **Ctrl + H**: Switch to the previous editor.
- **Ctrl + L**: Switch to the next editor.

### Quick Open and Activity Bar
- **Ctrl + P**: Open quick open.
- **Ctrl + J**: Select next in quick open.
- **Ctrl + K**: Select previous in quick open.
- **Ctrl + Shift + A**: Toggle activity bar visibility.

### Miscellaneous
- **Alt + Q**: Close the folder.
- **Alt + Shift + G**: Run task "Open LazyGit".
- **Alt + Shift + M**: Run task "Open GH Dash".
- **Alt + Shift + P**: Run task "Create PR GH".
- **Ctrl + Shift + B**: Git checkout.
- **Alt + C**: Comment or uncomment a line (when editor is focused and not read-only).
- **Ctrl + Alt + I**: Open snippets (when editor is focused).

## Notes

- The keybindings are optimized for a workflow that involves frequent use of the terminal, explorer, and Git integration.
- The configuration aims to provide quick access to essential features without disrupting the flow of coding.

Feel free to modify these bindings as per your preferences. Contributions and suggestions for improvements are welcome!

## License

This configuration is open-sourced under the MIT License.



![alt text](https://github.com/dfosterj/vscodium/blob/main/preview/vscode-preview1.png?raw=true)
![alt text](https://github.com/dfosterj/vscodium/blob/main/preview/vscode-preview2.png?raw=true)
