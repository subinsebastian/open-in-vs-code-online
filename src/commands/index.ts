import { Command } from '../types';
import { openInVSCodeOnlineCommand } from './openInVSCodeOnline';

export function getAllCommands(): Array<Command> {
	return [openInVSCodeOnlineCommand()];
}
