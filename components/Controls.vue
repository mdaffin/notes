<template>
  <div class="controls">
    <nuxt-link to="/" @click="logout">logout</nuxt-link>
    <nuxt-link to="/login">Login</nuxt-link>
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
