<template>
  <main-layout>
    <div class="error">
      <img src="../assets/logo.png">
      <h1>Woops 404!</h1>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'

export default {
  components: {
    MainLayout,
  },
  name: 'error404',
  data() {
    return {}
  },
}
</script>
