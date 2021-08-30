<template>
  <div id="app">
    <Nav />
    <Main msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  components: {
    Main,
    Nav,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
