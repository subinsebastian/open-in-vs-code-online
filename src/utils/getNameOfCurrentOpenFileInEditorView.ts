import * as vscode from 'vscode';
import { Deferred } from './Deferred';

export function getNameOfCurrentOpenFileInEditorView() {
	const deferred = new Deferred<string | undefined>();

	deferred.resolve(vscode.window.activeTextEditor?.document?.fileName || undefined);
	return deferred.promise;
}
