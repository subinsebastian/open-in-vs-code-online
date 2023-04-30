import { Command } from '../types';

import * as vscode from 'vscode';
import * as childProcess from 'child_process';

export function showGitOriginUrlCommand(): Command {
	return {
		name: 'open-in-vscode-online.showGitOriginUrl',

		handler: () => {
			// Get the current workspace folder
			const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
			if (!workspaceFolder) {
				vscode.window.showErrorMessage('No workspace folder found.');
				return;
			}

			// Run the 'git config --get remote.origin.url' command
			const gitConfigProcess = childProcess.spawn('git', ['config', '--get', 'remote.origin.url'], {
				cwd: workspaceFolder.uri.fsPath,
			});

			// Collect the output
			let output = '';
			gitConfigProcess.stdout.on('data', (data) => {
				output += data.toString();
			});

			// Show the output when the process completes
			gitConfigProcess.on('close', () => {
				if (output.trim() === '') {
					vscode.window.showWarningMessage('Git origin URL not found.');
				} else {
					vscode.window.showInformationMessage(`Git origin URL: ${output.trim()}`);
				}
			});
		},
	};
}
