<template>
  <form class="form" @submit.prevent="registration">
    <div class="form-group">
      <label class="form-label">Email</label>
      <div class="input-group">
        <input v-model="email" type="email" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Имя</label>
      <div class="input-group">
        <input v-model="name" type="text" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Пароль</label>
      <div class="input-group">
        <input v-model="password" type="password" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Повтор пароля</label>
      <div class="input-group">
        <input v-model="passwordRepeat" type="password" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="checkbox"><input v-model="license" type="checkbox" /> Я согласен с условиями <span></span></label>
    </div>
    <div class="form__buttons">
      <button type="submit" class="button button_primary">Зарегистрироваться</button>
    </div>
    <div class="form__append">
      Уже есть аккаунт?
      <router-link to="/login" class="link">Войти</router-link>
    </div>
  </form>
</template>

<script>
import { register } from '../data';

export default {
  name: 'RegisterPage',
  data() {
    return {
      email: '',
      name: '',
      password: '',
      license: false,
      passwordRepeat: '',
      validation: {
        email: false,
        name: false,
        rightRepeat: false,
        license: false,
      },
    };
  },

  methods: {
    registration() {
      if (this.passwordRepeat !== this.password) {
        alert('Пароли не совпадают');
        this.validation.rightRepeat = false;
      } else this.validation.rightRepeat = true;
      if (this.email == '') {
        alert('Требуется ввести Email');
        return
      } else this.validation.email = true;
      if (this.name == '') {
        alert('Требуется ввести полное имя');
        return
      } else this.validation.name = true;
      if (this.password == '') {
        alert('Требуется ввести пароль');
        return
      } else this.validation.password = true;
      if (this.license == false) {
        alert('Требуется согласиться с условиями');
        return
      } else this.validation.license = true;

      if (this.validation.email && this.validation.name && this.validation.rightRepeat && this.validation.license) {
        register(this.email, this.name, this.password).then((res) => {
          if (res.message !== undefined) {
            alert(res.message);
          } else {
            alert(res.id);
            this.$router.push('/login');
          }
        });
      }
    },
  },
};
</script>

<style></style>
