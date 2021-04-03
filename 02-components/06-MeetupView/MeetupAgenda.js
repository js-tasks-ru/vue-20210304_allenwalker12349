import MeetupAgendaItem from './MeetupAgendaItem.js'

export default {
  name: 'MeetupAgenda',

  components: {
    MeetupAgendaItem,
  },

  props: {
    agenda: {
      type: Array,
      required: true
    }
  },


  template: `
    <div class="meetup-agenda">
      <MeetupAgendaItem v-for="(item, i) in agenda" :key="i" :agendaItem="item" />
    </div>`,
};
