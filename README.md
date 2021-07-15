# Verse
### The Social Learning Platform

- Current Version: Alpha
- Venture Round: Pre-Seed
- Timeline: July-August 2021

## Tech Stack

- [React Native](https://reactnative.dev/docs/components-and-apis/) CLI
- [Typescript](https://www.typescriptlang.org/) support
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React Navigation](https://reactnavigation.org/) with [Authentication flow](https://reactnavigation.org/docs/auth-flow) baked in & theming support
- [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler)
- [React Native Paper](https://callstack.github.io/react-native-paper/) UI Library with theming support
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [Redux](http://redux.js.org/) with [hooks](https://react-redux.js.org/api/hooks) support
- [Redux Saga](https://redux-saga.js.org/)
- [Redux Persist](https://github.com/rt2zz/redux-persist/)
- [React Native Reanimated](https://github.com/software-mansion/react-native-reanimated)
- [React Native Bootsplash](https://github.com/zoontek/react-native-bootsplash)
- [Jest](https://facebook.github.io/jest/)
- [Eslint](http://eslint.org/) ([Airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb))
- [React Native Bottom Sheet](https://github.com/gorhom/react-native-bottom-sheet)
5. [React Native Animated Tabbar](https://github.com/gorhom/react-native-animated-tabbar)
5.

## Pre-requisites

- [Node](https://nodejs.org) v10 (it is recommended to install it via [NVM](https://github.com/creationix/nvm))
- [Yarn](https://yarnpkg.com/)
- A development machine set up for React Native by following [these instructions](https://facebook.github.io/react-native/docs/getting-started.html)

## Installation

Install the dependencies and dev Dependencies and start the server.

```shell
cd Frontend
yarn install
yarn start
yarn android
```

## Structure

```typescript
src
├── screens
│   ├── Welcome
│   │	├── index.tsx
│   │	└── styles.tsx
│   ├── Phone
│   ├── Home
│   └── Community...
├── assets
│   ├── fonts
│   ├── images
│   ├── GoogleService-Info.plist
│   └── web_hi_res_512.png
├── components
│   ├── Home
│   │	├── Row
│   │	│	├── index.tsx
│   │	│	└── styles.tsx
│   │	└── Header...
│   ├── Navigation
│   ├── Community
│   ├── Buttons
│   └── Themed.tsx
├── navigation
│   ├── AuthNavigator.tsx
│   ├── HomeNavigator.tsx
│   └── ProfileNavigator.tsx ...
├── constants
│   ├── themes.ts
│   ├── api.ts
│   └── layouts.ts
├── config
│   ├── Permissions.ts
│   └── Reactotron.ts
└── store
    ├── actions
    ├── constants
    ├── reducers
    └── index.js


```

| In Progress


## Author

- [Devansh Agarwal](https://github.com/Daviz00)
- [Manan Mehta](https://github.com/MehtaManan07)
