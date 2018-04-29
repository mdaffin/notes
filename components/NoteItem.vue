<template>
  <div class="item">
    <nuxt-link :to="to">{{ name }}</nuxt-link>
    <NoteItem
      v-for="note in sub"
      :key="note.id"
      :path="note.path"
      :name="note.name"
      :sub="note.sub"
      :depth="parseInt(depth) + 1"
    />
  </div>
</template>

<script>
export default {
  props: [
    'project',
    'name',
    'path',
    'sub',
    'depth',
  ],
  name: 'NoteItem',
  computed: {
    to() {
      return `/notes/${this.path}`
    }
  },
}
</script>

<style scoped>
.item {
  padding-left: 8px;
  margin: 8px;
}
</style>
