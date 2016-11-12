import Vue from 'vue'
import error404 from 'src/routes/Error404'

describe('404 page', () => {
  it('should display a 404 page', done => {
    const vm = new Vue({
      el:     document.createElement('div'),
      render: (h) => h(error404),
    })

    expect(vm.$el.querySelector('.error h1').textContent)
      .to.equal('Woops 404!')

    done()
  })
})
