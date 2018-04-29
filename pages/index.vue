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
import Gitlab from '~/lib/gitlab'
export default {
  async fetch({store, params, app}) {
    console.log("Loading tree")
    const client = Gitlab(app.$auth.getToken('gitlab'))
    console.log(store.state.project)
    const tree = await client.project_repo_tree(store.state.project)
    console.log(JSON.stringify(tree, null, 2))
    store.commit('loadTree', tree)
  },
}
</script>

<style>
</style>
