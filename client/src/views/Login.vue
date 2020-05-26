<template>
  <div class="Login">
    <p>Login</p>
    <input type="email" placeholder="email" name="email" v-model="email" />
    <br />
    <input
      type="password"
      placeholder="password"
      name="password"
      v-model="password"
    />
    <br />
    <div class="error" v-html="error"></div>
    <br />
    <button @click="login">Login</button>
  </div>
</template>

<script>
// @ is an alias to /src
import AuthenticationService from "../services/AuthenticationService";
export default {
  name: "Register",
  components: {},
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
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
};
</script>
<style scoped>
.error {
  color: red;
}
</style>
