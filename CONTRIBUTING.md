# Contributing to kanban-vue

Please follow the following guidelines when contributing to kanban-vue:

  - Make sure your code is conform to the project's linter settings
  - All unit tests should pass
  
# Pre-commit hook
There is no way to commit code to this project without having the unit test and linter pass. This is thanks to a handy package called [pre-commit](https://github.com/observing/pre-commit). Pre-commit makes sure that `npm run test` is executed and is passed before the commit is accepted.

# Unit test
Run all unit tests with `npm run unit`

# Linting
Linting rules can be found in .eslintrc, upon executing `npm run dev` only your vue files will be linted before being transpiled.

To lint the whole project use the `npm run lint`
