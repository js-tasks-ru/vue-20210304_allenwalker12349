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

  mounted() {
    console.log(this.agenda)
  },

  template: `
    <div class="meetup-agenda">
      <MeetupAgendaItem v-for="(item, i) in agenda" :key="i" :agendaItem="item" />
    </div>`,
};
