import MeetupView from './MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

export default {
  name: 'MeetupPage',

  components: {
    MeetupView
  },

  data() {
    return {
      meetUp: null,
    }
  },

  mounted() {
    let meetUp = fetchMeetup(MEETUP_ID);
    meetUp.then((meetup) => {
      this.meetUp = meetup;
    });
  },

  template: `<div>
  <MeetupView v-if="meetUp" :meetup="meetUp" />
</div>`,
};
