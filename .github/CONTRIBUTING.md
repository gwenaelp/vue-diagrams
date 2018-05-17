# Contributing

## Usage

```bash
# Install dependencies
npm install

# Build 
npm run build

# Run development server with storybook
npm run storybook

# Run all tests with lint/jest
npm run test

# Run test in watch mode
npm run test:watch

# Update test snapshot
npm run test:update

# Run linter
npm run lint

# Run linter with auto fix
npm run lint:fix

# Commit files with commitizen (use this instead of git commit)
npm run cz
```
## Workflow

- Create a component in the src/components folder
- Add tests in the src/components/\_\_tests\_\_ folder
- Register this component in src/index.js
- Write stories which use your component as a template in src/stories/index.stories.js
- Run `npm run storybook` to author your components by having a development environment
- Run lint and tests before commiting anything
- Commit using [Commit Convention](.github/COMMIT_CONVENTION.md) and push to github
- If deployment is setup correctly(see next section), your components will be available on npm and release on github :)

## CI, Deployment & Releases

This repository is intended to be used with travisCI for deployment. [Semantic-release](https://github.com/semantic-release/semantic-release) is used and setup to auto-generate changelog, auto-publish to npm and auto-release to github based on commit messages structure. For it to work properly you have to follow this [Commit Convention](.github/COMMIT_CONVENTION.md).

You may need to install [Semantic-release-cli](https://github.com/semantic-release/cli) to enable and pre-configure travisCI with npm and github tokens.

So to enjoy an automated continuous deployment, it is required to have a NPM account, to have this project hosted on github, and to have previously login to travisCI.

Warning: After setting up semantic-release, your library will be publish automatically to npm and release to github. If you are not ready to publish to npm or to release you can do this later.

```bash
# Activate travisCI for your repository and launch semantic-release-cli
cd yourProjectFolder
npm install -g semantic-release-cli && semantic-release-cli setup

# Fill your github and npm credentials, select travisCI and select to replace .travis.yml
# TravisCI will be automatically enabled for your github repository
# And tokens will be injected in your travisCI repository config as environment variables
```

If everything is setup properly, every commit on master will automatically generate a release if needed. For the win.
