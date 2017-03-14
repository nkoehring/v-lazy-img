function bindEvent(el, type, fn) {
  if (el.attachEvent)
    el.attachEvent(`on${type}`, fn)
  else
    el.addEventListener(type, fn, { capture: false, passive: true })
}

function success(el, path) {
  el.classList.remove('lazy-load-error')
  el.classList.remove('lazy-load-progress')
  el.classList.add('lazy-load-success')
  el.src = path
}

function loading(el) {
  el.classList.remove('lazy-load-error')
  el.classList.remove('lazy-load-success')
  el.classList.add('lazy-load-progress')
}

function failure(el) {
  el.classList.remove('lazy-load-success')
  el.classList.remove('lazy-load-progress')
  el.classList.add('lazy-load-error')
}

const LazyImg = {
  load_image (path, success, failure) {
    const img = new Image()
    bindEvent(img, 'load', success)
    bindEvent(img, 'error', failure)
    img.src = path
  },
  install (Vue) {
    Vue.directive('lazy-load', (el, binding, vnode) => {
      const path = binding.value

      loading(el)
      LazyImg.load_image(
        path,
        () => success(el, path),
        () => failure(el)
      )
    })
  }
}

export default LazyImg
