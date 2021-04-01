# Site.js + Vite + Svelte

This template will help get you started developing with [Vite](https://vitejs.dev) and [Svelte](https://svelte.dev) in [Site.js](https://sitejs.org).

It’s based on the [Vite + Svelte template](https://github.com/vitejs/vite/tree/main/packages/create-app/template-svelte).

## Why?

By using [Site.js](https://sitejs.org) you can extend your static Vite + Svelte clients using dynamic [DotJS](https://sitejs.org/#dynamic-sites) routes, [WebSockets](https://sitejs.org/#websockets), [a JavaScript database](https://sitejs.org/#database), etc., and easily deploy to your own server using the [built-in sync feature](https://github.com/small-tech/site.js#sync).

## Install

1. Download the template.

    ```shell
    npm init using small-tech/site-vite-svelte my-project
    ```

    This will download this template using [create-using](https://github.com/aral/create-using/tree/create-using#readme) into a directory called `my-project`.

    (Or just clone this repository the old-fashioned way using `git`.)

2. Install dependencies.

    ```shell
    cd my-project
    npm i
    ```

## Use

### Dev (Site.js + Vite)

```shell
npm run dev
```

This will run the `dev.sh` script that:

1. Will build the latest Vite source using `vite build`
2. Start the Vite dev server in the background
3. Start Site.js.

Once the servers are running, you will have:

  - __Vite:__ Running at `https://localhost:444` with HMR.
  - __Site.js:__ Running at `https://localhost` with all features (including serving dynamic [DotJS](https://sitejs.org/#dynamic-sites) routes and [WebSockets](https://sitejs.org/#websockets), etc.)

Note that the Vite build is _not_ automatically updated when hitting the Site.js endpoint. To update it, run the build command (see below).

Also note that the `dev.sh` script will only run on Linux-esque systems. If you’re on Windows, please run the commands listed above manually. Pull requests are welcome for a `dev-windows` task that runs a PowerShell script to do the same thing.

### Vite only

```shell
npm run vite
```

This will run the Vite dev server _only_ (not Site.js) at `https://localhost:444`.

### Build

```shell
npm run build
```

This will build the Vite source into the `.generated` folder that is served by Site.js.

### Serve

```shell
npm run serve
```

This will:

1. Build the latest Vite source using `vite build`
2. Serve the site using Site.js.

Hit `https://localhost` to view and test your site.

_Note that the Vite dev server will not be run. If that’s what you want, please run the dev task._

## Inherited characteristics from the Vite + Svelte template

### Recommended IDE Setup

[VSCodium](https://vscodium.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

### Technical considerations

**Why `global.d.ts` instead of `compilerOptions.types` inside `jsconfig.json` or `tsconfig.json`?**

Setting `compilerOptions.types` shuts out all other types not explicitly listed in the configuration. Using triple-slash references keeps the default TypeScript setting of accepting type information from the entire workspace, while also adding `svelte` and `vite/client` type information.

**Why include `.vscode/extensions.json`?**

Other templates indirectly recommend extensions via the README, but this file allows VS Code to prompt the user to install the recommended extension upon opening the project.

**Why enable `checkJs` in the JS template?**

It is likely that most cases of changing variable types in runtime are likely to be accidental, rather than deliberate. This provides advanced typechecking out of the box. Should you like to take advantage of the dynamically-typed nature of JavaScript, it is trivial to change the configuration.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behaviour. You can read the details [here](https://github.com/rixo/svelte-hmr#svelte-hmr).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```js
// store.js
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
```

## Like this? Fund us!

[Small Technology Foundation](https://small-tech.org) is a tiny, independent not-for-profit.

We exist in part thanks to patronage by people like you. If you share [our vision](https://small-tech.org/about/#small-technology) and want to support our work, please [become a patron or donate to us](https://small-tech.org/fund-us) today and help us continue to exist.

## Copyright

Copyright &copy; 2021-present [Aral Balkan](https://ar.al), [Small Technology Foundation](https://small-tech.org).

## License

[AGPL v3.0](./LICENSE).
