<template>
  <div id="app">
    <intro></intro>
  </div>
</template>

<script>
import Intro from './components/Intro'

export default {
  components: {
    Intro,
  },
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
