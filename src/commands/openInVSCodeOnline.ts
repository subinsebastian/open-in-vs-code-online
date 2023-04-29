import { Command } from '../types';
import { openLinkInBrowser } from '../utils';

export function openInVSCodeOnlineCommand(): Command {
	return {
		name: 'open-in-vscode-online.openInVSCodeOnline',
		handler: async () => {
			openLinkInBrowser('https://github.com/subinsebastian/open-in-vs-code-online');
		},
	};
}
