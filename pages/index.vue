<template>
  <div>
    <h1>Hello</h1>
    <pre>
    Token: {{ $auth.getToken('gitlab') }}
    State: {{ $auth.$state }}
    Project: {{ $store.state.project }}
    </pre>
  </div>
</template>

<script>
</script>

<style>
</style>
