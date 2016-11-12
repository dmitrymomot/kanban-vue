import Vue from 'vue'
import Intro from 'src/components/Intro'

describe('Intro.vue', () => {
  it('should wait', done => {
    setTimeout(() => {
      done()
    }, 1500)
  })
  it('should render correct contents', () => {
    const vm = new Vue({
      el:     document.createElement('div'),
      render: (h) => h(Intro),
    })

    expect(vm.$el.querySelector('.intro h1').textContent)
      .to.equal('A modern kanban created in Vue with RESTful api')
  })
})
