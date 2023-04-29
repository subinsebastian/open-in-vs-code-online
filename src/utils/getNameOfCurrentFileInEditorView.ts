import * as vscode from 'vscode';
import { Deferred } from './Deferred';

export function getNameOfCurrentFileInEditorView() {
	const deferred = new Deferred<string | null>();

	deferred.resolve(vscode.window.activeTextEditor?.document?.fileName || null);
	return deferred.promise;
}
