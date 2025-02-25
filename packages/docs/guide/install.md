---
title: Install
---

### Install Dependencies

```sh
# use yarn
yarn add @casual-ui/vue

# use npm
npm install @casual-ui/vue

# use pnpm
pnpm install @casual-ui/vue
```

### Global Usage

- Import Styles & Use as a Plugin

```js
import { createApp } from 'vue'
import CasualUIVue from '@casual-ui/vue' // import global plugin
import App from './App.vue'
import '@casual-ui/vue/dist/style.css' // import styles

const app = createApp(App)

app.use(CasualUIVue, { /** plugin options */ }) // use plugin
```

- Directly use in vue files

```vue
<template>
  <c-button label="A Button" />
</template>
```

### Usage on Demand

- Import styles in client entry file

```js
import '@casual-ui/vue/dist/style.css'
```

- Use in vue files

```vue
<script setup>
import { CButton } from '@casual-ui/vue'
</script>

<template>
  <CButton label="A Button" />
</template>
```

### Plugin Options

* locale - The i18n locale.