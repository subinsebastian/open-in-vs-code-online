import { Command } from '../types';
import { getPromptOutputInCurrentWorkspace, showBottomInfoMessage } from '../utils';

export function listGitBranchesCommand(): Command {
	return {
		name: 'open-in-vscode-online.listGitBranches',

		handler: async () => {
			const branches = await getPromptOutputInCurrentWorkspace('git', ['branch']);

			showBottomInfoMessage((branches as string[])?.join(', '));
		},
	};
}
