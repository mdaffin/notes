<template>
  <div class="item">
    {{ name }}
    <NoteItem
      v-for="note in sub"
      :key="note.id"
      :name="note.name"
      :sub="note.sub"
      :depth="parseInt(depth) + 1"
    />
  </div>
</template>

<script>
export default {
  props: [
    'name',
    'sub',
    'depth',
  ],
  name: 'NoteItem',
}
</script>

<style scoped>
.item {
  padding-left: 8px;
  margin: 8px;
}
</style>
