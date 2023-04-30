import { CONFIGS } from '../constants/configs.constant';
import { Command } from '../types';
import { getGitOriginUrl, getWorkspaceConfigurations, openLinkInBrowser } from '../utils';

export function openInVSCodeOnlineCommand(): Command {
	return {
		name: 'open-in-vscode-online.openInVSCodeOnline',

		handler: async () => {
			const defaultVSCodeOnlineEnvironment = getWorkspaceConfigurations()['defaultVSCodeOnlineEnvironment'];
			const env = CONFIGS['defaultVSCodeOnlineEnvironment'][defaultVSCodeOnlineEnvironment];

			const originUrl = await getGitOriginUrl();
			const gotoUrl = originUrl?.replace('https://github.com', env)?.trim();

			openLinkInBrowser(gotoUrl);
		},
	};
}
