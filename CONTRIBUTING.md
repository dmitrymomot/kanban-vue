# Contributing to kanban-vue

Please follow the following guidelines when contributing to kanban-vue:

  - Make sure your code is conform to the project's linter settings
  - All unit tests should pass
  - Code coverage needs to remain the same
  
# Code Coverage
Code coverage should remain the same percentage for your pull request, if you get a lower coverage score you need to write unit tests
  
# Pre-commit hook
Thanks to [pre-commit](https://github.com/observing/pre-commit) `npm run test` will be executed before every commit

# Unit test
Run all tests `npm run test`
Run all karma tests `npm run unit`

# Linting
Linting rules can be found in .eslintrc, upon executing `npm run dev` only your vue files will be linted before being transpiled.

To lint the whole project use the `npm run lint`
