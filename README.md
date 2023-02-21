# Hello World React App From Sratch

Note: watch out for typos in dependencies. Typosquatting is a security concern!

Install NPM

npm install -g npm
npm --version

cd projectfolder
npm install
npm run dev
npm run start

## React Ecosystem

### Why Use React Ecosystem?

- Vanilla React: create modular UIs.
- From MVC : focuses on View
- load/store data? no opinion, you must customize it
- bad practice: stuff it into components
- alternative: tooling

### React Application Ecosystem

- React Redux: - manage state of React Application: Flux
- Redux Thunk: Thunk middleware for Redux: separate side effects: network requests, 
npm install redux-thunk 
- Reselect: simple selector: abstract away the state's structure
- Styled Components: visual primitives: ES6+CSS: manages the appearance of components

### Separation of Concerns

- make codebase more maintainable
- idea of React ecosystem tools

## Build React App From Sratch 

Boilerplate generators are fine, this is for a bit more understanding.

- index.html
- support for ES6
- webpack
- root component 
- react hotloader

npm init -y
git init
mkdir public src 

- create html stub with root div and bundle.js

### Enable ES6 support 

npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react

- create .babelrc with react presets

### Create App component

### Install react:

npm install react react-dom

### Setup webpack:

npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader

- configure webpack

- create/edit webpack.config.js

npx webpack-dev-server --mode development

npm install --save-dev react-refresh @pmmmwh/react-refresh-webpack-plugin

- configure react-refresh
