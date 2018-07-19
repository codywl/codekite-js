# Codekite JS Boilerplate
## What is this?
This is sort of like `create-react-app`, but with much simpler
decisions that I feel can help you learn about underlying technologies.

I was bothered by using boilerplate/starter kits that I didn't
understand - due to things like obscuring underlying code by default -
so this is an attempt to create a simpler, more readable project that
hopefully both myself and others can enjoy.

## Features

- Webkit, Webkit Dev Server and HMR (Hot Module Reloading);
- Inline source maps, separate development and production Webkit
configuration files;
- PostCSS with `autoprefixer`, `css-modules`, and `cssnano`;
- A barebones React+Redux application to build from;
- Attention paid to current recommended practices;
- Simple `npm` scripts to run an `ngrok` server, start production
    builds, and more (check `package.json` for full details).

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

## TODO
- [x] Create production Webpack configuration
- [x] Add optional Docker functionality
- [x] Weigh and modify PostCSS steps
- [ ] Provide examples
- [x] Add tests
- [x] Review best practices and modify as necessary
- [ ] Add basic API

(Redux was in this list before, but I now believe it should be evaluated
per-project for its usage.)
