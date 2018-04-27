<template>
  <div class="app">
    <Header/>
    <SideBar/>
    <Controls/>
    <main>
      <nuxt/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import SideBar from '~/components/SideBar.vue'
import Controls from '~/components/Controls.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    SideBar,
    Controls,
    Footer,
  },
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
  --accent-color: #3eaf7c;
  --text-color: #2c3e50;
  --border-color: #eaecef;
  --code-bg-color: #282c34;
  --arrow-bg-color: #ccc;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: var(--text-color);
}

.app {
  display: grid;
  min-height: 100vh;
  grid-gap: 8px;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 128px 1fr 48px 48px;
  grid-template-areas:
    "header   content"
    "sidebar  content"
    "controls content"
    "footer   content";
}

header {
  grid-area: header;
}
  
aside {
  grid-area: sidebar;
}

footer {
  grid-area: footer;
}

.controls {
  grid-area: controls;
}

main {
  grid-area: content;
}
</style>
