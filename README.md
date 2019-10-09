# Vue Progressive Image

Lazy load images while showing a preview

## usage

*v-lazy-img* adds the directives `v-lazy-load` and `v-lazy-load-bg`. The latter changes the background image (css `background-image`) instead of the `src`-attribute.

## Usage example

```html
<template>
  <img class="lazy-loaded" v-lazy-load='fullimage' src='./assets/previewimage.jpg' />
  <div class="lazy-loaded" v-lazy-load-bg='fullbackground' src='./assets/previewbackground.jpg' />
</template>

<script>
import fullimage from './assets/fullimage.png'
import fullbackground from './assets/fullbackground.png'

export default {
  data () {
    return { fullimage, fullbackground }
  }
}
</script>

<style>
.lazy-loaded {
  /* setting a fixed width is recommended */
  width: 100%;
  /* nice effect as an example */
  transition: opacity .5s ease-in;
  opacity: .5;
}

/* applied as soon as loading starts */
.lazy-loaded.lazy-load-progress {
  filter: blur(5px);
}

/* applied as soon as loading succeeds */
.lazy-loaded.lazy-load-success {
  opacity: 1;
}

/* applied if loading fails */
.lazy-loaded.lazy-load-error {
  filter: blur(3px) sepia(1);
  outline: 4px solid red;
}

</style>
```

## current state

*v-lazy-img* started as a proof of concept but is simple enough to be usable already. If you are using it in your project, I'm looking forward to hear about your experiences!

## todo

Additional features could include

 - srcset support
 - a loading indicator
 - Vue3 support

## similar projects (as listed at [awesome-vue](https://github.com/vuejs/awesome-vue))

 - [vue-lazyload](https://github.com/hilongjw/vue-lazyload) - A Vue.js plugin for lazyload your Image or Component in your application.
 - [vue-lazy-background-images](https://github.com/darrynten/vue-lazy-background-images) - Lazy load background images for Vue 2.
 - [vue-progressive-image](https://github.com/MatteoGabriele/vue-progressive-image) - Vue progressive image loading plugin.
 - [vue-l-lazyload](https://github.com/lsycxyj/vue-l-lazyload) - A lazyload plugin for Vue.js v2.x+.
 - [vue-lazyload-img](https://github.com/JALBAA/vue-lazyload-img) - Especially optimized for mobile browser. support V2 & v1.
 - [vue-lazy-images](https://github.com/yyh1102/vue-lazyload-images) - A plugin of lazyload images for Vue 2.x.
 And quiet some more: https://github.com/vuejs/awesome-vue#lazy-load

### So why another one?

I didn't try all of the above but as mentioned under _current state_ I mainly wanted to try it by myself. The result is also incredibly small: **Under 600 bytes minimized and gzipped!**
