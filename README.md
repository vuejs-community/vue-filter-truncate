# @vuejs-community/vue-filter-truncate
Simple truncate filter for Vue.js

[![NPM Version](https://img.shields.io/npm/v/vuejs-community/vue-filter-truncate.svg)](https://www.npmjs.com/package/vuejs-community/vue-filter-truncate)
[![License](https://img.shields.io/npm/l/vuejs-community/vue-filter-truncate.svg)](/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/vuejs-community/vue-filter-truncate.svg)](https://npmcharts.com/compare/vuejs-community/vue-filter-truncate?minimal=true)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=vuejs-community/vue-filter-truncate)](https://dependabot.com)
[![Wallaby.js](https://img.shields.io/badge/wallaby.js-configured-green.svg)](https://wallabyjs.com)

## Installation

install from npm
```bash
$ npm install @vuejs-community/vue-filter-truncate
```
and register in you Vue app
```js
import Vue from 'vue';
import VueFilterTruncate from '@vuejs-community/vue-filter-truncate';

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
