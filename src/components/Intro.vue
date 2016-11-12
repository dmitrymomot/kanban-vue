<template>
  <div class="cool-effect">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'A modern kanban created in Vue with RESTful api',
    }
  },
  methods: {
    ready() {
      console.log('woop')
    },
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
