Webix-React demo with a Jet-based Complex Widget
================

This repo contains examples of importing Webix [Complex Widgets](https://webix.com/widget/complex-widgets/) into a React App.

By default, the demo shows how to initialize the [**File Manager**](https://webix.com/filemanager/), but it can be replaced with any of Webix Complex Widgets. 

The example is based on the [default demo from Webix Github](https://github.com/webix-hub/react-demo). 

The general idea of integration is described in the related [README section](https://github.com/webix-hub/react-demo#creating-custom-webix-react-component) of this package.

Webpack configuration and basic dependencies in package.json is the default outcome of the `yarn eject` command. The initial project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

By default, Webix and File Manager will be fetched from npm, so make sure you have signed in to our [private @xbs scope](https://docs.webix.com/desktop__install.html#installingwithnpm). 
**Note**: NPM always provides access to the latest versions of packages, so credentials are valid only while the license is active.

How to Start
----------------

Run `npm install` and `npm start`. 
Open `http://localhost:3000` to view the demo in the browser.

The page will be reloading while you are editing form fields.

**Production build**

To build the production version, run `npm run build`.

It will build the application for production to the *build* folder. After that your app is ready to be deployed.

How to import and use a Complex Widget
-------
### Option 1: Global import (see the [main](https://github.com/HelgaListopad/webix-react-complex-widgets/tree/main) branch)

The minimum requirements to init the File Manager in a React app are
- have a global Webix object  (it should be available before the component's sources are imported),
- import the FM module as `import * as fileManager from "@xbs/filemanager"`.

A basic solution is to manually assign webix to a global variable, then use webix.ui() to init File Manager: 

```js
componentDidMount() {
   window.webix = webix;
   webix.ready(() => {
      require("@xbs/filemanager")
      webix.ui({ view:"filemanager" });
   })
}
```

### Option 2: ProvidePlugin (see the [demo-provideplugin](https://github.com/HelgaListopad/webix-react-complex-widgets/tree/demo-provideplugin) branch)

Another option is to use [ProvidePlugin](https://webpack.js.org/plugins/provide-plugin/) for Webix and initialize File Manager [as an application](https://docs.webix.com/filemanager__creating_filemanager.html) (this is required for correct init).

```js
componentDidMount(){
   webix.ready(() => {
      const fManager = require("@xbs/filemanager");

      this.app = new fManager.App({ webix, url: "https://docs.webix.com/filemanager-backend/" })
      this.app.render( document.body );
   })
}
```
In Webpack configuration, add 
```js
new webpack.ProvidePlugin({
   webix: "@xbs/webix-pro",
}),
```
So that the webix will be available in all modules.

If you use ESLint with the [`no-undef`](https://eslint.org/docs/rules/no-undef) rule, you'll also need to extend these settings with the [following statement](https://eslint.org/docs/user-guide/configuring#specifying-globals), as `ProvidePlugin` allows to refer to a global value without importing/defining Webix in a module.
```
"globals": {
   "webix": "readonly"
}
```

License
--------

MIT
