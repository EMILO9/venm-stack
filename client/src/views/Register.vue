<template>
  <div class="Register">
    <p>Register</p>
    <input type="email" placeholder="email" name="email" v-model="email">
    <br>
    <input type="password" placeholder="password" name="password" v-model="password">
    <br>
    <div class="error" v-html="error"></div>
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<style scoped>
.error {
  color: red;
}
</style>
