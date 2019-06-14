<template>
  <div id="app">
    <link
      href="http://garaio.com/Frontend/Garaio/dist/css/garaio.bundle.css"
      rel="stylesheet"
    />
    <img alt="Vue logo" src="./assets/logo.png" />
    <VueWebComponent
      msg="Welcome to Your Vue.js + TypeScript App as WebComponent!"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VueWebComponent from "./components/VueWebComponent.vue";

@Component({
  components: {
    VueWebComponent
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  background-color: black;
  border: 20px solid white;
}
img {
  margin: 0 auto;
  display: block;
}
</style>
