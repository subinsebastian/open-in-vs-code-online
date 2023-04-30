import { getTerminalOutputForCommandPrompt } from './getTerminalOutputForCommandPrompt';

export function getCurrentBranchName() {
	return getTerminalOutputForCommandPrompt('git rev-parse --abbrev-ref HEAD');
}
