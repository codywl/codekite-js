![Codekite Logo](https://github.com/CWelshE/codekite-js/blob/master/src/styles/images/codekite-logo.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Codekite JS Boilerplate
## What is this?
Unsatisfied by the "magic" under the hood of `create-react-app`, I set
out to understand and utilize most of the technologies that are hidden
by default. From my point of view, this has the following benefits (and
more, but I think these ones are important):

- Increased intuition when fixing configuration-related issues;
- Greater flexibility and modularity in choosing not to be a "one size
    fits all" solution;
- More confidence in one's own knowledge of their tech stack (by
    directly interacting with each individual part of said stack);
- Fuel for more future endeavors where a given engineer decides to delve
    more deeply into the tools and technologies they use.

This is an attempt to create a simpler, more readable project that
hopefully both myself and others can enjoy.

## Features

- Webpack, Webpack Dev Server and HMR (Hot Module Reloading);
- Inline source maps, separate development and production Webpack
configuration files;
- A barebones React-only application to build from;
- Attention paid to current recommended practices;
- Simple `npm` scripts to run an `ngrok` server, start production
    builds, and more (check `package.json` for full details);
- [Jest](https://jestjs.io/) and [Enzyme](https://github.com/airbnb/enzyme/) for testing;
- [styled-components](https://github.com/styled-components/styled-components) for styling;
- Optional Docker container focused development environment;
- Simple, stateless functional components used where possible;
- Automatic linting (`ESLint`), code style adherence (`prettier`), editor
    configuration (`.editorconfig`), and code completion (`TernJS`).

## Usage

### Dependencies

This project requires the following for full utilization:

- [docker](https://www.docker.com/)
- that's it

This is, of course, assuming you wish to use the docker container for
development. It is possible to both share your local system volume and
see realtime changes in your application - for the best of both worlds -
and that is the default behavior in this project.

In other words, you don't even need to have `npm`, `node` or any of the
node modules installed locally, but you can still edit source files and
reap the full benefits of watch modes.

To avoid also using `docker-compose` for this, the following flag can
be used to bind your host volume directory of choice to the built
container:

`docker run -v "$(pwd)"/src:/app/src`

The `"$(pwd)"` bit just replaces itself with the absolute path of the
current working directory, as that is a requirement for specifying the
bind mount. [More information](https://docs.docker.com/storage/bind-mounts/)

Use `docker build -t codekite-app -f=Dockerfile.dev` from the project
root to build the container, and `docker run (hash goes here)` to start
it. You can figure out what the hash is, if you've lost it, by running
`docker-container ls --all` and looking for it.

If you decide to start the container with `bash` or something else,
`runit` will not start; this is due to the fact that it must be process
1 to function, and by invoking another command, that is not possible.

### Developing

In your environment of choice - whether it be the Docker container or
your own system - running `npm start` will perform a number of
operations to get you going:

- `npm audit` to check for security issues in packages;
- `webpack-dev-server` for viewing your project locally;
- `esw` to lint your source files according to `.eslintrc.json`;
- `json-server` to serve the mock API on port 3001.

After starting, you can visit `localhost:9000` to verify the project is
being hosted properly.

If all is well, try editing some React components in `src/components` to
see realtime changes in your app. Magic! If you find that this isn't
happening, however, spend some time reading the [React Hot
Loader](https://github.com/gaearon/react-hot-loader) docs. If you're
still stuck, create an issue in this repository, and I will try my best
to help you become unstuck.
