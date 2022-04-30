<h1 align="center">Vue-Relay</h1>

> A vue3 component across router with animations
## Install and basic usage
```bash
$ npm i -s vue-relay
```
> only works for Vue 3

global registration:

```js
import { createApp } from 'vue';
import VueRelayRunner from 'vue-relay';

const app = createApp(App);
app.use(VueRelayRunner);
```

Use the component:

```vue
// a.page
<template>
  <div id="aPage">
    <vue-relay-runner :id="1">
      // your component
    </vue-relay-runner>
  </div>
</template>

// b.page
<template>
  <div id="bPage">
    <vue-relay-runner :id="1">
      // your component
    </vue-relay-runner>
  </div>
</template>

<script>
  import VueRelayRunner from 'vue-relay';
  export default {
      name: 'app',
      components: {
          VueRelayRunner
      }
  }
</script>
```

### Props
#### id
Type: `number | string`<br>
Required: `true`<br>
a unique id for component to get their context<br>
```html
<vue-relay-runner id="1" />
```
#### styleAttr
Type: `Object`<br>
Required: `false`<br>
you can set some Style for the component
```html
<vue-relay-runner :styleValue={
  borderRadius: 50%
}/>
```

## License

[MIT license](LICENSE)
