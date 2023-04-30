# Open in VS Code Online

This is a VS Code extension that allows you to quickly open your current Git repository in the browser in VS Code Web. You can choose to open it in either the `vscode.dev` or `github.dev` environment by modifying the `openInVSCodeOnline.defaultVSCodeOnlineEnvironment` setting.

## Watch Demo

<img src="./assets/demo.gif" alt="Demo GIF">

## Installation

To install the extension, follow these steps:

1. Open VS Code
2. Go to the Extensions view (`View` > `Extensions`)
3. Search for `Open in VS Code Online`
4. Click `Install`

## Usage

To use the extension, simply open a Git repository in VS Code and run the `Open in VS Code Online` command:

1. Open a Git repository in VS Code
2. Open the Command Palette (`View` > `Command Palette` or press `Ctrl+Shift+P` on Windows/Linux or `Cmd+Shift+P` on macOS)
3. Type `Open in VS Code Online` and select the command from the list
4. The repository will be opened in the browser in the selected environment (`vscode.dev` or `github.dev`)

## Settings

You can modify the default VS Code Online environment by changing the `openInVSCodeOnline.defaultVSCodeOnlineEnvironment` setting:

1. Open the Command Palette (`View` > `Command Palette` or press `Ctrl+Shift+P` on Windows/Linux or `Cmd+Shift+P` on macOS)
2. Type `Preferences: Open User Settings` and select the command from the list
3. Search for `openInVSCodeOnline.defaultVSCodeOnlineEnvironment`
4. Select either `vscode.dev` or `github.dev` from the dropdown list

## License

This extension is licensed under the [MIT License](LICENSE.md).
