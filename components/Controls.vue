<template>
  <div class="controls">
    <button @click="logout">logout</button>
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
