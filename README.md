# Bank currencies

This is the George Front-End Team coding exercise.

## Introduction

The app consists of components as stated in [the specification section](https://github.com/keriati/george-fx-test?tab=readme-ov-file#specification).
The attached _fx.json_ [file](https://github.com/keriati/george-fx-test/blob/master/fx.json) has been used as an datasource. For countries manipulation and flags mapping the [countries-list](https://www.npmjs.com/package/countries-list) dependency has been used.

## Repository structure

The repository is organized into three main sections - `.storybook`, `public`, `src`.

[/.storybook](https://github.com/SOULPWRD/currencies/tree/main/.storybook) is the the storybook setup folder

[/public](https://github.com/SOULPWRD/currencies/tree/main/public) is where are public assets resides

[/src](https://github.com/SOULPWRD/currencies/tree/main/src) is where the application code lives - all components and their corresponding stories files, utils, hooks and data.

## Development

- In order to run the dev server, run `npm run dev`.

- In order to build the project, run `npm run build`.

- In order to run unit tests and test coverage, run `npm run test` and `npm run test -- --coverage` respectively.

## Storybook

Every component can be find in the storybook. In order to see the components behaviour, please run `npm run storybook`.

## Enjoy ;)
