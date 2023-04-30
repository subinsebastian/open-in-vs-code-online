import { exec } from 'child_process';
import { Deferred } from './Deferred';

export function getTerminalOutputForCommandPrompt(command: string) {
	const deferred = new Deferred<string>();
	exec(command, (err, stdout) => {
		if (err) {
			deferred.reject(err);
		}

		if (typeof stdout === 'string') {
			deferred.resolve(stdout?.trim());
		}
	});

	return deferred.promise;
}
