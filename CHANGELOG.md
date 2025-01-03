# Change Log

## v1.4.0

- Adds a navigation bar for the application

- Touches up the content in various areas and introduces the "bnny" page

- Removes the lightweight DnD application to take a different direction with content

- Substantial styling updates

- Miscellaneous code cleanup and refactoring

## v1.3.0
Introduces a footer that showcases some badges for the website

- Adds a new banner with a few badges for SSL, domain security, and IPv6 compliance

- Fixes broken code linting for ESLint

## v1.2.1
Removes known vulnerabilities from package dependencies

- Upgrades various package dependencies that are known vulnerabilities

- This package now passes an `npm audit` with 0 vulnerabilities at the time of this release

## v1.2.0
Introduces structure to handle new content with some improvements

- Adds a lightweight Dungeons and Dragons application to help run a fifth edition DnD campaign

- Overhauls the [`README.md`](README.md) and includes setup for deploying with the the DnD application 

- Adds an "About Me" section

- Minor code cleanup

## v1.1.0
Adds linting to the application via eslint

- Linting can be configured with your IDE or explicitly ran with `npm run lint`

- Linting configuration is specified in [`eslint.config.mjs`](eslint.config.mjs)

- Compiler configuration can be found in [`tsconfig.json`](tsconfig.json)

## v1.0.0
Adds initial setup for this web app

- A basic react app that was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

- The app was then iterated on and styled to be a little bit different

- Simple routing was added via `react-router-dom` to setup for what I want to do with the app

- Repo artifacts and configurations were checked in: `.gitignore`, [`README.md`](README.md), [`LICENSE`](LICENSE), etc.)

- Run the app in development mode with `npm start`

- Build the app for production with `npm run build`

- Launch the test runner in the interactive watch mode with `npm test`