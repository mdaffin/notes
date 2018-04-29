<template>
  <div v-html="content"></div>
</template>

<script>
import Gitlab from '~/lib/gitlab'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

export default {
  data() {
    return {
      content: null,
    }
  },
  computed: {
    filePath() {
      return this.$route.hash.replace(/^#/, '')
    }
  },
  async fetch({store, params, app}) {
    const client = Gitlab(app.$auth.getToken('gitlab'))
    const tree = await client.project_repo_tree(store.state.project)
    store.commit('loadTree', tree)
  },
  watch: {
    async filePath(newPath, oldPath) {
      if(!newPath.endsWith('.md')) {
        newPath = `${newPath}/index.md`
      }
      console.log(`changing to ${newPath}`)
      const client = Gitlab(this.$auth.getToken('gitlab'))
      const markdown = await client.file(
        this.$store.state.project,
        newPath,
      )
      this.content = md.render(markdown)
      console.log(this.content)
    }
  }
}
</script>

<style>
</style>
