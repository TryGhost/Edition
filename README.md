# Edition

**This is a fork of the Edition theme for the site bostonaquariumsociety.org.**

The newsletter theme for [Ghost](https://github.com/TryGhost/Ghost).

## Development

### Docker

Run `docker-compose up` to start a local Ghost instance at http://localhost:3102/ghost.

To test theme changes locally and in real time:

* Go to http://localhost:3102/ghost/#/settings/design/change-theme/
* Click "Advanced" dropdown
* Click "Activate" next to `edition`

Note that CSS changes will not be reflected unless they are compiled first. (See below)

Edition styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
# Install
yarn

# Run build & watch for changes
yarn dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` Gulp task packages the theme files into `dist/edition.zip`, which you can then upload to your site.

```bash
yarn zip
```

## Copyright & License

Copyright (c) 2013-2023 Ghost Foundation - Released under the [MIT license](LICENSE).
