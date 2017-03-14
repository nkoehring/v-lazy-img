# Vue Progressive Image

Lazy load images while showing a preview

## Usage example

```html
<template>
  <img v-lazy-load='fullimage' :src='previewimage' title='beautiful landscape' />
</template>

<script>
import fullimage from './assets/fullimage.png'
import previewimage from './assets/previewimage.jpg'

export default {
  data () {
    return { fullimage, previewimage }
  }
}
</script>

<style>
#app > img {
  /* setting a fixed width is recommended */
  width: 100%;
  /* nice effect as an example */
  transition: opacity .5s ease-in;
  opacity: .5;
}

/* applied as soon as loading starts */
#app > img.lazy-load-progress {
  filter: blur(2px);
}

/* applied as soon as loading succeeds */
#app > img.lazy-load-success {
  opacity: 1;
}

/* applied if loading fails */
#app > img.lazy-load-error {
  filter: blur(3px) sepia(1);
  outline: 4px solid red;
}

</style>
```

## current state

*vue-lazy-img* is actually just a proof of concept but I might develop it further. Feature ideas would include support for background images, srcsets and maybe a loading indicator.
