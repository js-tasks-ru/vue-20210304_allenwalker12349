import Vue from './vendor/vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api';

/** ID митапа для примера; используйте его при получении митапа */
const MEETUP_ID = 6;

/**
 * Возвращает ссылку на изображение по идентификатору, например, изображение митапа
 * @param imageId {number} - идентификатор изображения
 * @return {string} - ссылка на изображение
 */
function getImageUrlByImageId(imageId) {
  return `${API_URL}/images/${imageId}`;
}

/**
 * Функция, возвращающая словарь заголовков по умолчанию для всех типов пунктов программы
 */
const getAgendaItemDefaultTitles = () => ({
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
});

/**
 * Функция, возвращая словарь иконок для для всех типов пунктов программы.
 * Соответствует имени иконок в директории /assets/icons
 */
const getAgendaItemIcons = () => ({
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
});

new Vue({
  el: '#app',
  data() {
    return {
      meetUp: null,
      defaultTitles: getAgendaItemDefaultTitles(),
      agendaIcons: getAgendaItemIcons(),
    };
  },

  computed: {
    meetUpCover() {
      return this.meetUp ? 'https://course-vue.javascript.ru/api/images/' + this.meetUp.imageId : '';
    },

    localDate() {
      return new Date(this.meetUp.date).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },

    dateTime() {
      return new Date(this.meetUp.date).toISOString().substr(0, 10)
    },
  },

  created: function () {
    fetch(API_URL + '/meetups/' + MEETUP_ID)
      .then((response) => response.json())
      .then((data) => {
        this.meetUp = data;
      });
  },
});
