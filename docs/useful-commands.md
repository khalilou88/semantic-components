# SemanticComponents

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/tVQRd46U5c)

## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve showcase
```

To create a production bundle:

```sh
npx nx build showcase
```

To see all available targets to run for a project, run:

```sh
npx nx show project showcase
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/angular:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/angular:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:

- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

https://egghead.io/lessons/tailwind-configure-tailwind-in-a-nx-monorepo-with-potentially-multiple-apps-and-libs

# Lib

nx g @nx/angular:library libs/heroicons --publishable --import-path=@semantic-components/heroicons

nx generate @nx/plugin:generator libs/nx-generators/src/generators/heroicons

nx generate @nx/plugin:generator libs/nx-generators/src/generators/heroicons-library

nx g @nx/angular:library libs/heroicons-directives --publishable --import-path=@semantic-components/heroicons-directives
nx generate @nx/plugin:generator libs/nx-generators/src/generators/heroicons-directives

nx generate @nx/plugin:generator libs/nx-generators/src/generators/tabler-icons
nx g @nx/angular:library libs/tabler-icons --publishable --import-path=@semantic-components/tabler-icons
nx g @nx/angular:library-secondary-entry-point --library=tabler-icons --name=filled
nx g @nx/angular:library-secondary-entry-point --library=tabler-icons --name=outline

#Local dev

npx nx local-registry

npx nx release 0.0.2-1

$env:NX_DAEMON='false'

npm install --save-dev @semantic-components/nx-generators

nx generate @semantic-components/nx-generators:heroicons

npm config set registry https://registry.npmjs.org/

#

nx g @nx/angular:library-secondary-entry-point --library=heroicons --name=solid/16
nx g @nx/angular:library-secondary-entry-point --library=heroicons --name=solid/20
nx g @nx/angular:library-secondary-entry-point --library=heroicons --name=solid/24
nx g @nx/angular:library-secondary-entry-point --library=heroicons --name=outline/24

#

nx release version patch --projects=nx-generators

nx release version patch --projects=heroicons
nx release version 0.0.17-next.1 --projects=heroicons --dry-run
nx build heroicons
nx release publish --projects=heroicons --tag next --verbose --dry-run

##

npx create-nx-workspace@latest semantic-icons