import * as vscode from 'vscode';

export function openLinkInBrowser(link: string) {
	return vscode.env.openExternal(vscode.Uri.parse(link));
}
