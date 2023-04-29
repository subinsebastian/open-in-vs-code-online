import * as vscode from 'vscode';

export function showBottomInfoMessage(message: string) {
	return vscode.window.showInformationMessage(message);
}
