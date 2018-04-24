<template>
  <div class="app">
    <Header/>
    <SideBar/>
    <main>
      <nuxt/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import SideBar from '~/components/SideBar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    SideBar,
    Footer,
  }
}
</script>

<style>
.app {
  display: grid;
  min-height: 100vh;
  grid-gap: 8px;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 128px 1fr 64px;
  grid-template-areas:
    "header  content"
    "sidebar content"
    "footer  content";
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

main {
  grid-area: content;
}


</style>
