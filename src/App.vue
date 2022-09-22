<template>
  
  <v-app>
    <HelloWorld :msg=test />
    <DemoComponent/>
  </v-app>

</template>

<script>

import DemoComponent from "./components/demo/DemoComponent";
import HelloWorld from "@/components/HelloWorld";

export default {
  name: 'App',
  components: {
    DemoComponent,
    HelloWorld
  },
  data() {
    return {
      test: "test-demo1"
    }
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
