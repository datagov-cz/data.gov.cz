<template>
  <div id="app">
    <h1>Vizualizace hlasování</h1>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Wrapper />
  </div>
</template>

<script>
import Wrapper from './components/Wrapper.vue'

export default {
    name: 'app',
    components: {
        Wrapper
    }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  /* color: #2c3e50; */
  margin-top: 60px;
}
</style>
