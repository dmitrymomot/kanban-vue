/*eslint no-new: 0*/

import Vue from 'vue'
import routes from './routes'

new Vue({
  data: {
    currentRoute: window.location.pathname,
  },
  el:       '#app',
  template: '<App/>',
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]

      return matchingView ? require('./routes/' + matchingView + '.vue') : require('./routes/Error404.vue')
    },
  },
  render (h) {
    return h(this.ViewComponent)
  },
})
