<template>
  <form class="form" @submit.prevent="login">
    <div class="form-group">
      <label class="form-label">Email</label>
      <div class="input-group">
        <input v-model="email" type="email" placeholder="demo@email" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Пароль</label>
      <div class="input-group">
        <input v-model="password" type="password" placeholder="password" class="form-control" />
      </div>
    </div>
    <div class="form__buttons">
      <button type="submit" class="button button_primary button_block">Войти</button>
    </div>
    <div class="form__append">
      Нет аккаунта?
      <router-link to="/register" class="link">Зарегистрируйтесь</router-link>
    </div>
  </form>
</template>

<script>
import { login } from '../data';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      validation: {
        email: false,
        password: false,
      },
    };
  },

  methods: {
    login() {
      if (this.email == '') {
        alert('Требуется ввести Email');
        this.validation.email = false;
      } else this.validation.email = true;
      if (this.password == '') {
        alert('Требуется ввести пароль');
        this.validation.password = false;
      } else this.validation.password = true;
      if (this.validation.email && this.validation.password) {
        login(this.email, this.password).then((res) => {
          if (res.message !== undefined) {
            alert(res.message);
          } else {
            alert(res.fullname);
            if (this.$route.query.from !== undefined) {
              this.$router.push(this.$route.query.from);
            } else {
              this.$router.push('/');
            }
          }
        });
      }
    },
  },
};
</script>

<style></style>
