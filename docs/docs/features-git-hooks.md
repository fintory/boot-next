---
id: git-hooks
title: Husky Configuration
---

## Hooks

### `commit-msg`

#### What is going to be checked?

On `commit-msg` we are checking for the conformity of the commit-message to the conventional-changelog message styleguide using the `commitlint` CLI.

#### Scripts running

When a commit message is composed, `commitlint` is being run.

### `pre-commit`

#### What is going to be checked?

When commiting we are linting the code for typescript issues, and for eslint issues that are being reported. A negative signal of the CLI is prompting the user to fix the problems and commit again.

#### Scripts running

When a commit is prepared, `yarn lint` is being run. You can find the definition of the npm scripts in the [scripts](scripts) section of this documentation.

### `pre-push`

Soon to come. We are going to implement a test-driven system here, since tests are to complex to check in a `pre-commit` system.

## Caveats

You are not able to use Tower to commit or even use the git-hooks since Tower doesn't come with a proper shell environment. [Read more.](gittower)