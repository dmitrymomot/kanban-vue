<template>
  <main-layout>
    <div class="intro">
      <img src="../assets/logo.png">
      <h1>{{ msg }}</h1>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'

export default {
  components: {
    MainLayout,
  },
  name: 'home',
  data() {
    return {
      msg: 'A modern kanban created in Vue with RESTful api',
    }
  },
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding:         0;
  }

  li {
    display: inline-block;
    margin:  0 10px;
  }

  a {
    color: #42b983;
  }
</style>
