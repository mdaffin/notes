<template>
  <div class="app">
    <Header/>
    <SideBar/>
    <main>
      <div data-netlify-identity-menu></div>
      <div data-netlify-identity-button>Sign up / Log in</div>
      <nuxt/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import NetlifyIdentity from 'netlify-identity-widget'
import Header from '~/components/Header.vue'
import SideBar from '~/components/SideBar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    SideBar,
    Footer,
  },
  mounted() {
    console.log("Mounted")

    NetlifyIdentity.init({})

    let user = NetlifyIdentity.currentUser();
    console.log("User:")
    console.log(user)

    NetlifyIdentity.open()

    user = NetlifyIdentity.currentUser();
    console.log("User:")
    console.log(user)

    NetlifyIdentity.on("init", user => console.log(user));
    NetlifyIdentity.on("login", login => console.log(user));
    NetlifyIdentity.on("logout", () => console.log("Logged out"));
    NetlifyIdentity.on("error", err => console.error("Logged out"));
    NetlifyIdentity.on("open", () => console.log("Widget opened"));
    NetlifyIdentity.on("close", () => console.log("Widget closed"));

    //https://gitlab.com/oauth/authorize?client_id=""&redirect_uri=REDIRECT_URI&response_type=code&state=YOUR_UNIQUE_STATE_HASH

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
