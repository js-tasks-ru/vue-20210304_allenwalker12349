import MeetupCover from './MeetupCover.js';
import MeetupDescription from './MeetupDescription.js';
import MeetupAgenda from './MeetupAgenda.js';
import MeetupInfo from './MeetupInfo.js';
import { getImageUrlByImageId } from './data.js';

export default {
  name: 'MeetupView',
  components: {
    MeetupCover,
    MeetupDescription,
    MeetupAgenda,
    MeetupInfo,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  computed: {
    date() {
      return new Date(this.meetup.date);
    },
    imgUrl() {
      return this.meetup.imageId ? getImageUrlByImageId(this.meetup.imageId) : null;
    },
  },

  template: `
    <div v-if="meetup">
      <MeetupCover :title="meetup.title" :link="imgUrl" />
      <div class="container">
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <MeetupDescription :description="meetup.description" />

            <h3>Программа</h3>
            <MeetupAgenda :agenda="meetup.agenda" />
          </div>
          <div class="meetup__aside">
            <MeetupInfo :organizer="meetup.organizer"
                        :place="meetup.place"
                        :date="date" />
          </div>
        </div>
      </div>
    </div>`,
};
