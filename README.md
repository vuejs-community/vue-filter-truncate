# vue-filter-truncate
Simple truncate filter for Vue.js

[![NPM Version](https://img.shields.io/npm/v/vue-filter-truncate.svg)](https://www.npmjs.com/package/vue-filter-truncate)
[![License](https://img.shields.io/npm/l/vue-filter-truncate.svg)](/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/vue-filter-truncate.svg)](https://npmcharts.com/compare/vue-filter-truncate?minimal=true)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=vuejs-community/vue-filter-truncate)](https://dependabot.com)
[![Wallaby.js](https://img.shields.io/badge/wallaby.js-configured-green.svg)](https://wallabyjs.com)

## Installation

install from npm
```bash
$ npm install vue-filter-truncate
```
and register in you Vue app
```js
import Vue from 'vue';
import VueFilterTruncate from 'vue-filter-truncate';

Vue.use(VueFilterTruncate);
```

## Usage

basic usage
```html
<template>
  <div>{{ 'This is sample text' | truncate(10) }}</div>
</template>
```

## License

MIT © [Vue.js Community](https://github.com/vuejs-community)
