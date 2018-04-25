<template>
    <div>
      User: {{ $auth.user }}
      User: {{ $store.state.auth.user }}
      Token: {{ $auth.token || '-' }}
    </div>
</template>

<script>
export default {
  middleware: ['auth'],
  computed: {
    state() {
      return JSON.stringify(this.$auth.$state, undefined, 2)
    }
  }
}
</script>
