import * as vscode from 'vscode';
import { Command } from './types';
import { getAllCommands } from './commands';

export function activate(context: vscode.ExtensionContext) {
	const commands: Array<Command> = getAllCommands();
	const subscriptions: vscode.Disposable[] = [];

	for (const { name, handler } of commands) {
		subscriptions.push(
			vscode.commands.registerCommand(name, (args: unknown[]) => {
				handler();
			})
		);
	}

	context.subscriptions.push(...subscriptions);
}
