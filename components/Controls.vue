<template>
  <div class="controls">
    <nuxt-link v-if="$auth.loggedIn" to="/" @click="logout">Logout</nuxt-link>
    <nuxt-link v-if="!$auth.loggedIn" to="/login">Login</nuxt-link>
    <nuxt-link to="/project">Select Project</nuxt-link>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout()
    }
  },
}
</script>

<style scoped>
a {
  display: inline;
  color: var(--accent-color);
  text-decoration: none;
  border: 1px solid black;
  padding: 8px;
}
</style>
