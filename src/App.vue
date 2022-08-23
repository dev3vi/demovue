<template>
  <v-app>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <DemoComponent msg="Welcome to Your Vue.js App"/>
  </v-app>

</template>

<script>

import DemoComponent from "./components/demo/DemoComponent";

export default {
  name: 'App',
  components: {
    DemoComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
