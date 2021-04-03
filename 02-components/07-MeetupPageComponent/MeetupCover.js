export default {
  name: 'MeetupCover',

  props: {
    link: {
      type: String,
    },
    title: String
  },

  computed: {
    meetUpCover() {
      return this.link ? `--bg-url: url(${this.link})` : null;
    }
  },

  template: `
    <div class="meetup-cover" :style="meetUpCover">
        <h1 class="meetup-cover__title">{{title}}</h1>
    </div>`,
};
