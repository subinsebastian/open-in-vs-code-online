import { exec } from 'child_process';
import { Deferred } from './Deferred';

export function getCurrentBranchName() {
	const deferred = new Deferred<string>();
	exec('git rev-parse --abbrev-ref HEAD', (err, stdout) => {
		if (err) {
			// handle your error
			deferred.reject(err);
		}

		if (typeof stdout === 'string') {
			deferred.resolve(stdout?.trim());
		}
	});

	return deferred.promise;
}
