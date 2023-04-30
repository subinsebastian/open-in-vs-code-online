import { getTerminalOutputForCommandPrompt } from './getTerminalOutputForCommandPrompt';

export function getGitOriginUrl() {
	return getTerminalOutputForCommandPrompt('git config --get remote.origin.url').then((url) =>
		url?.replace('.git', '')?.trim()
	);
}
