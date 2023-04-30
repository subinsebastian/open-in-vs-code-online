import { Command } from '../types';
import { getGitOriginUrl, openLinkInBrowser } from '../utils';

export function openInVSCodeOnlineCommand(): Command {
	const vscodeOnlineEnv: 'https://github.dev' | 'https://vscode.dev' = 'https://github.dev';

	return {
		name: 'open-in-vscode-online.openInVSCodeOnline',

		handler: async () => {
			const originUrl = await getGitOriginUrl();
			const gotoUrl = originUrl?.replace('https://github.com', vscodeOnlineEnv)?.trim();

			openLinkInBrowser(gotoUrl);
		},
	};
}
