 import { getAgendaItemIcons, getAgendaItemDefaultTitles } from './data.js';

export default {
  name: 'MeetupAgendaItem',

  props: {
    agendaItem: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      defaultTitles: getAgendaItemDefaultTitles(),
      agendaIcons: getAgendaItemIcons(),
    }
  },

  computed: {
    itemCover() {
      return `/assets/icons/icon-${this.agendaIcons[this.agendaItem.type]}.svg`

    },
  },

  template: `<div class="meetup-agenda__item" v-if="agendaItem">
      <div class="meetup-agenda__item-col">
        <img class="icon" alt="icon" :src="itemCover" />
      </div>
      <div class="meetup-agenda__item-col">{{agendaItem.startsAt}} - {{agendaItem.endsAt}}</div>
      <div class="meetup-agenda__item-col">
        <h5 class="meetup-agenda__title">{{ agendaItem.title ? agendaItem.title : defaultTitles[agendaItem.type] }}</h5>
        <p v-if="agendaItem.speaker">
          <span>{{agendaItem.speaker}}</span>
          <span class="meetup-agenda__dot"></span>
          <span class="meetup-agenda__lang">{{agendaItem.language}}</span>
        </p>
        <p v-if="agendaItem.description">{{agendaItem.description}}</p>
      </div>
    </div>`,
};
