import Vue from './vendor/vue.esm.browser.js';

new Vue({
  el: '#app',
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    increase() {
      this.counter++;
    },
  },
});
