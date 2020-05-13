(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global['v-lazy-img'] = factory());
}(this, (function () { 'use strict';

  function bindEvent(el, type, fn) {
    if (el.attachEvent) el.attachEvent("on" + type, fn);else el.addEventListener(type, fn, {
      capture: false,
      passive: true
    });
  }

  function success(el, path, css) {
    el.classList.remove('lazy-load-error');
    el.classList.remove('lazy-load-progress');
    el.classList.add('lazy-load-success');
    if (css) el.style.backgroundImage = "url('" + path + "')";else el.src = path;
  }

  function loading(el) {
    el.classList.remove('lazy-load-error');
    el.classList.remove('lazy-load-success');
    el.classList.add('lazy-load-progress');
  }

  function failure(el) {
    el.classList.remove('lazy-load-success');
    el.classList.remove('lazy-load-progress');
    el.classList.add('lazy-load-error');
  }

  var LazyImg = {
    load_image: function load_image(path, success, failure) {
      var img = new Image();
      bindEvent(img, 'load', success);
      bindEvent(img, 'error', failure);
      img.src = path;
    },
    install: function install(Vue) {
      Vue.directive('lazy-load', function (el, binding, vnode) {
        var path = binding.value;
        loading(el);
        LazyImg.load_image(path, function () {
          return success(el, path);
        }, function () {
          return failure(el);
        });
      }), Vue.directive('lazy-load-bg', function (el, binding, vnode) {
        var path = binding.value;
        loading(el);
        LazyImg.load_image(path, function () {
          return success(el, path, true);
        }, function () {
          return failure(el);
        });
      });
    }
  };

  return LazyImg;

})));
