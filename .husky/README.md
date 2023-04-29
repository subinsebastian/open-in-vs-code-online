### `pre-push` hook

For starters, you can use the `pre-push` bash file given below.
**Note: Read the rationale for not using this file**

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx nx clear-cache
npm run test
JOB_ENVIRONMENT=production npm run lint
```

### Rationale

On running test and lint job, on `pre-push hook`
Expected: it runs only on the committed part of the code base
Reality: it would essentially run on the entire repo (ie. including the working directory), because it is in the local and not in the remote.
Since devs will be working on some feature, which may have bunch of error and testcases failures and they've not planned on pushing this part of the working code to remote anyways. Hence resulting in them being unable to push the committed working correct code to remote.
Note that the `Github Actions` are already setup to not allow test and lint failed commits to be merged into master. Hence this use-case is already properly covered via `Github Actions`.

### `pre-commit` hook

Note: we're not using below for `lint-staged` scripts

```sh
eslint --fix
git add
npm run format:fix-staged
```

rather only using

```sh
npm run format:fix-staged
```

because, devs might have kept lint error code for a purpose and might not be intending to have it fix without them explicitly doing it.
Even though this step, we're referring on to the staged files, we want it to be known to the devs what are the excat code that is being committed, the lint fixes might go unseen for the devs.

incase devs want to do the linting fixes, it recommended that they explicity run `eslint --fix`
