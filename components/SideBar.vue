<template>
  <aside>
    <NoteItem
      v-if="project"
      v-for="note in $store.state.tree"
      :key="note.id"
      :path="note.path"
      :name="note.name"
      :sub="note.sub"
      depth="0"
    />
  </aside> 
</template>

<script>
import NoteItem from '~/components/NoteItem.vue'

export default {
  components: {
    NoteItem
  },
  computed: {
    project() {
      return this.$store.state.project
    }
  },
}
</script>

<style scoped>
</style>
