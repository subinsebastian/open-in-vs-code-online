import * as vscode from 'vscode';
import { Configurations } from '../types/Configurations';
import { CONFIGS } from '../constants/configs.constant';

export function getWorkspaceConfigurations(): Configurations {
	const configs = vscode.workspace.getConfiguration('openInVSCodeOnline');
	const ck = Object.keys(CONFIGS);

	return Object.fromEntries(ck.map((config) => [config, configs.get(config)])) as Configurations;
}
