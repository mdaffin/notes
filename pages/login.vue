<template>
  <div>
    <h1>Login</h1>
    <button>GitHub</button>
    <button @click="$auth.loginWith('gitlab')">Gitlab</button>
    <button>BitBucket</button>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
}
</script>
