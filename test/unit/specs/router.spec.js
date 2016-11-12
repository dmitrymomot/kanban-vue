import Vue from 'vue'
import Home from 'src/routes/Home'

describe('Vue Router', () => {
  it('should route', done => {
    const vm = new Vue({
      el:     document.createElement('div'),
      render: (h) => h(Home),
    })

    // TODO: router unit test
    // https://vuejs.org/v2/guide/unit-testing.html

    expect(vm.$el.querySelector('.intro h1').textContent)
      .to.equal('A modern kanban created in Vue with RESTful api')

    done()
  })
})
