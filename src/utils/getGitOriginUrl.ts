import { getPromptOutputInCurrentWorkspace } from './getPromptOutputInCurrentWorkspace';

export async function getGitOriginUrl() {
	const output = await getPromptOutputInCurrentWorkspace('git', ['config', '--get', 'remote.origin.url']);

	return (output || [''])[0]?.replace('.git', '')?.trim();
}
