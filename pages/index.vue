<template>
  <div v-if="content" v-html="content"></div>
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
  async mounted() {
    await this.loadContent(this.filePath)
  },
  methods: {
    async loadContent(filePath) {
      this.content = "loading..."
      if(!filePath.endsWith('.md')) {
        filePath = `${filePath}/index.md`
      }
      console.log(`changing to ${filePath}`)
      const client = Gitlab(this.$auth.getToken('gitlab'))
      try {
        const markdown = await client.file(
          this.$store.state.project,
          filePath,
        )
        this.content = md.render(markdown)
      } catch (e) {
        console.log(e)
        this.content = e
      }
    },
  },
  async fetch({store, params, app}) {
    const client = Gitlab(app.$auth.getToken('gitlab'))
    try {
      const tree = await client.project_repo_tree(store.state.project)
      store.commit('loadTree', tree)
    } catch (e) {
      console.log(e)
    }
  },
  watch: {
    async filePath(newPath, oldPath) {
      await this.loadContent(newPath)
    }
  }
}
</script>

<style>
</style>
