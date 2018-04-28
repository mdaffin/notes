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
  height: 100vh;
  grid-gap: 8px;
  grid-template-columns: 272px 1fr;
  grid-template-rows: 80px 1fr 38px 32px;
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
  overflow: auto;
}

footer {
  grid-area: footer;
  align-self: center;
}

.controls {
  grid-area: controls;
  align-self: center;
}

.controls > a {
  margin-right: 8px;
}

main {
  grid-area: content;
  overflow: auto;
}
</style>
