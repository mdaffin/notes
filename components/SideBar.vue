<template>
  <aside>
    <NoteItem
      v-for="note in notes"
      :key="note.id"
      :name="note.name"
      :sub="note.sub"
      depth="0"
    />
  </aside> 
</template>

<script>
import NoteItem from '~/components/NoteItem.vue'
import Gitlab from '~/lib/gitlab'

export default {
  components: {
    NoteItem
  },
  data() {
    return {
      notes: {},
    }
  },
  async created() {
    const client = Gitlab(this.$auth.getToken('gitlab'))
    const tree = await client.project_repo_tree(this.$store.state.project)
    //console.log(JSON.stringify(tree))
    this.$store.commit('loadTree', tree)
    this.notes = tree
  },
}
</script>

<style scoped>
</style>
