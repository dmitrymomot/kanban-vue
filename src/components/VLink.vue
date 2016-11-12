<template>
  <a
    v-bind:href="href"
    v-bind:class="{ active: isActive }"
    v-on:click="go"
  >
    <slot></slot>
  </a>
</template>

<script>
  import routes from '../routes'
  export default {
    props: {
      href:     String,
      required: true,
    },
    computed: {
      isActive () {
        return this.href === this.$root.currentRoute
      },
    },
    methods: {
      // TODO: These lines need to be covered by unit tests
      go (event) {
        event.preventDefault()
        this.$root.currentRoute = this.href
        window.history.pushState(
          null,
          routes[this.href],
          this.href,
        )
      },
    },
  }
</script>

<style scoped>
  .active {
    color: cornflowerblue;
  }
</style>
