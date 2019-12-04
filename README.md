# OpusCapita applicatinon top header/navigation (in React)

[![CircleCI Status](https://circleci.com/gh/OpusCapita/react-navigation/tree/master.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/OpusCapita/react-navigation)
[![npm version](https://img.shields.io/npm/v/@opuscapita/react-navigation.svg)](https://npmjs.org/package/@opuscapita/react-navigation)
[![NPM Downloads](https://img.shields.io/npm/dm/@opuscapita/react-navigation.svg)](https://npmjs.org/package/@opuscapita/react-navigation)
![badge-license](https://img.shields.io/github/license/OpusCapita/react-navigation.svg)

## Synopsis

> Work in progress

Actual demo [here](https://opuscapita.github.io/react-navigation/branches/master/index.html?currentComponentName=Menu&maxContainerWidth=100%25)

Top navigation menu for OpusCapita application.


## Installation

`npm install @opuscapita/react-navigation`

## Usage

You can import components from react-navigation module as follow

```
import {
  Menu,
  MenuIcon,
  MenuAccount,
  MenuAccountIcon,
  MenuDropdownGrid,
  MenuDropdownList,
  MenuIconsBar,
  MenuLogo,
  MenuSearch,
  MenuSelect,
  NavigationBar,
  Notification,
  Notifications
} from '@opuscapita/react-navigation';
```

By the way you can find information about for the components by the follow URL https://opuscapita.github.io/react-navigation/branches/master/index.html

## Development

You can sync styles to `https://github.com/OpusCapita/styles`, if you change styles in components.
If you want to switch from local to external styles from `@opuscapita/styles` package, you can do it on `www/index-page.js`, for example:

```
// import '@opuscapita/styles/dist/npm/index.css';
import '../src/client/components/styles.less'
```

## Package

As the result, package contains following files:

```
lib/index.js
lib/index.css
```

NOTES: You can't use `index.css` in production, instead of you can use styles from package `@opuscapita/styles`. This styles only for example!

## Contributors

[CONTRIBUTING.md](./.github/CONTRIBUTING.md)

| [<img src="https://avatars.githubusercontent.com/u/24652543?v=3" width="100px;"/>](https://github.com/kvolkovich-sc) | [**Kirill Volkovich**](https://github.com/kvolkovich-sc) |
| :---: | :---: |

## License

Licensed under the Apache License, Version 2.0. See [LICENSE](./LICENSE) for the full license text.

