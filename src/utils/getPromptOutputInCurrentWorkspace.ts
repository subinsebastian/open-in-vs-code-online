import * as vscode from 'vscode';
import * as childProcess from 'child_process';
import { Deferred } from './Deferred';

export function getPromptOutputInCurrentWorkspace(command: string, args: string[]) {
	const deferred = new Deferred<string[]>();
	// Get the current workspace folder
	const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
	if (!workspaceFolder) {
		deferred.reject('No workspace folder found.');
		return;
	}

	// Run the 'git config --get remote.origin.url' command
	const gitConfigProcess = childProcess.spawn(command, args, {
		cwd: workspaceFolder.uri.fsPath,
	});

	// Collect the output
	let output = '';
	gitConfigProcess.stdout.on('data', (data) => {
		console.log({ str: data.toString() });
		output += data.toString();
	});

	gitConfigProcess.on('close', () => {
		deferred.resolve(
			output
				.split('\n')
				.map((line) => line.trim())
				.filter((line) => line !== '')
		);
	});

	return deferred.promise;
}
