<template>
  <div>
    <h1>Select a repo</h1>
    <input v-model="repo">
    <button @click="selectRepo(repo)">Select</button>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  data() {
    return {
      repo: null,
    }
  },
  methods: {
    selectRepo(repo) {
      this.$store.commit('setRepo', repo)
      this.$nuxt.$router.replace({ path: '/' })
    }
  }
}
</script>
