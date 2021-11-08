# parcel-optimizer-css-url

![Version](https://img.shields.io/npm/v/parcel-optimizer-css-url)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> 🌀 Parcel 2 plugin that allows you to use a custom `url` CSS function to prevent Parcel to process *relative-path* images in CSS/Stylus files.

## Installation

```sh
# Installs the plugin and saves it as a development dependency
npm i parcel-optimizer-css-url -D
```

## Configuration

Create a `.parcelrc` configuration file and add the plugin to optimizers like this:

```js
{
	"extends": "@parcel/config-default",
	"optimizers": {
		"*.css": ["parcel-optimizer-css-url"]
	}
}
```

## Usage

Sometimes, some of our images are not available at build time or we simply don't
want Parcel to process them, specifically using the CSS `url` function in styles files.

```css
.my-background {
	background: url('../public/images/my-asset.jpg') no-repeat;
}
```

To prevent Parcel resolving this image just replace `url` directive to `_url`.

### CSS
```css
.my-background {
	background: _url('../public/images/my-asset.jpg') no-repeat;
}
```

### Stylus
```stylus
.my-background
	background _url('../public/images/my-asset.jpg') no-repeat
```
