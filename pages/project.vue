<template>
  <div>
    <h1>Select a Project</h1>
    <input v-model="project">
    <button @click="selectRepo(project)">Select</button>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  data() {
    return {
      project: null,
    }
  },
  methods: {
    selectRepo(project) {
      this.$store.commit('setProject', project)
      this.$nuxt.$router.replace({ path: '/' })
    }
  }
}
</script>
