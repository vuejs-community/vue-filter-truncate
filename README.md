# @vuejs-community/vue-filter-truncate
Simple truncate filter for Vue.js

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
