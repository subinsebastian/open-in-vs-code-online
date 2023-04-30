import { Command } from '../types';
import { listGitBranchesCommand } from './listGitBranches';
import { openInVSCodeOnlineCommand } from './openInVSCodeOnline';
import { showGitOriginUrlCommand } from './showGitOriginUrl';

export function getAllCommands(): Array<Command> {
	return [openInVSCodeOnlineCommand(), listGitBranchesCommand(), showGitOriginUrlCommand()];
}
