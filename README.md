# vuepress-plugin-one-click-copy

> A vuepress plugin for clipboard-copy

[![npm](https://img.shields.io/npm/v/vuepress-plugin-one-click-copy.svg)](https://www.npmjs.com/package/vuepress-plugin-one-click-copy)
[![GitHub stars](https://img.shields.io/github/stars/vxhly/vuepress-plugin-one-click-copy)](https://github.com/vxhly/vuepress-plugin-one-click-copy/stargazers)
[![GitHub license](https://img.shields.io/github/license/vxhly/vuepress-plugin-one-click-copy)](https://github.com/vxhly/vuepress-plugin-one-click-copy/blob/master/LICENSE)

## Install

``` bash
# install dependencies
npm i vuepress-plugin-one-click-copy -D

# or use yarn
yarn add vuepress-plugin-one-click-copy -D
```

## Usage

Write vuepress config

``` javascript
module.exports = {
  plugins: ['one-click-copy']
}
```

## Options

This plugin supports the following configurations.

``` javascript
module.exports = {
  plugins: ['one-click-copy', {
    copy_selector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
    copy_message: 'Copy successfully and then paste it for use.', // default is 'Copy successfully and then paste it for use.'
    duration: 300 // prompt message display time
  }]
}
```

## License

[MIT](https://github.com/vxhly/vuepress-plugin-one-click-copy/blob/master/LICENSE).