import Vue from './vendor/vue.esm.browser.js';

new Vue({
  el: '#app',
  data() {
    return {
      selectedId: null,
      title: 'Initial',
    };
  },

  watch: {
    selectedId() {
      let url = 'https://course-vue.javascript.ru/api/meetups/' + this.selectedId;
      fetch(url)
        .then((response) =>
          response.json())
        .then((meetup) => {
          this.title = meetup.title;
        });
    },
  },
});
