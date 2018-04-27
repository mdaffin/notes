<template>
  <div>
    <h1>Hello</h1>
    <pre>
    Token: {{ $auth.getToken('gitlab') }}
    State: {{ $auth.$state }}
    Repo: {{ $store.state.repo }}
    </pre>
  </div>
</template>

<script>
</script>

<style>
</style>
