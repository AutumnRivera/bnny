# Change Log

A log detailing the various changes made for this web app. In case you want something more digestible than Git!

## 1.2.0
Introduces structure to handle new content with some improvements

- Adds a lightweight Dungeons and Dragons application to help run a fifth edition DnD campaign

- Overhauls the [`README.md`](README.md) and includes setup for deploying with the the DnD application 

- Adds an "About Me" section

- Minor code cleanup

## 1.1.0
Adds linting to the application via eslint

- Linting can be configured with your IDE or explicitly ran with `npm run lint`

- Linting configuration is specified in [`eslint.config.mjs`](eslint.config.mjs)

- Compiler configuration can be found in [`tsconfig.json`](tsconfig.json)

## 1.0.0
Adds initial setup for this web app

- A basic react app that was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

- The app was then iterated on and styled to be a little bit different

- Simple routing was added via `react-router-dom` to setup for what I want to do with the app

- Repo artifacts and configurations were checked in: `.gitignore`, [`README.md`](README.md), [`LICENSE`](LICENSE), etc.)

- Run the app in development mode with `npm start`

- Build the app for production with `npm run build`

- Launch the test runner in the interactive watch mode with `npm test`