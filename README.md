<p>
  <a aria-label="Hosting with Vercel" href="https://shoes-out.vercel.app/">
    <img src=".github/thumbnail.png" />
  </a>
</p>

<p align="center">
  Application built with ReactJs, Redux, Redux Saga, Styled Components and Restful API with JSON Server.
</p>

## Tech

- [ReactJs](https://reactjs.org) - A JavaScript library for building user interfaces.
  - [React Icons](https://styled-components.com/) - Utilizes ES6 imports that allows you to include only the icons that your project is using.
  - [React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) - DOM bindings.
  - [React Redux](https://redux.js.org/basics/usage-with-react) - State container for JavaScript applications.
  - [React Redux Saga](https://redux-saga.js.org/) - Library that aims to make application side effects.
  - [React Toastify](https://github.com/fkhadra/react-toastify) - React notification.
  - [React Reactotron](https://github.com/infinitered/reactotron) - A development tool to explore, inspect, and diagnosis your React DOM/JS apps.
- [Styled Components](https://eslint.org) - ES6 and CSS to styled components.
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and NodeJs.
- [Immer](https://github.com/immerjs/immer) - Immutability the easy way.
- [JSON Server](https://github.com/typicode/json-server) - Fake REST API
- [Prettier](https://prettier.io/docs/en/cli.html) - An opinionated code formatter.
- [ESlint](https://eslint.org) - ESLint statically analyzes your code to quickly find problems.

## Development setup

### Prerequisites

To run this project in the development mode, you'll need to have a basic environment with NodeJs and Yarn installed.

#### Cloning the Repository

```
git clone https://github.com/fariasmateuss/shoes-out.git
```

### Installing

Run to install the dependencies;

```
yarn
```

To start the project;

```
yarn start
```

#### JSON Server

In the file `src/services/api.js` change the address to `http://localhost:3333`.

To start the API REST

```
yarn dev:server
```

_or_

```
yarn json-server server.json  -p 3333 -w
```

## Commit Message Format

In this project I used the emoji guide for commit messages.

[Commit Message Format](https://gist.github.com/fariasmateuss/c8b3a2e1b8ae7c3cda520d0ac6e9e237) inspired by [Gitmoji](https://gitmoji.carloscuesta.me/).

## Feedback

Feel free to send me feedback on [LinkedIn](https://www.linkedin.com/in/fariasmateuss/) or [file an issue](https://github.com/fariasmateuss/shoes-out/issues/new).
Feature requests are always welcome.

# License

[MIT License](/LICENSE)
