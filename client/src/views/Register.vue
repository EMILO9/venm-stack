<template>
  <div class="register">
    <input type="email" placeholder="email" name="email" v-model="email">
    <br>
    <input type="password" placeholder="password" name="password" v-model="password">
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
// @ is an alias to /src
import AuthenticationService from '../services/AuthenticationService'
export default {
  name: "Register",
  components: {},
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
    }
  }
};
</script>
