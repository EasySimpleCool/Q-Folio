Vue.component ('post', {
  template: '<a class="folio-item"><p>Item</p></a>'
  }
)

var app = new Vue({
  el: '.portfolio-list',
  data: {
    title: [
      {
        name: 'First Post'
        background: ''
      },
      {
        name: 'Second Post'
        background: ''
      },
      {
        name: 'Third Post'
        background: ''
      },
      {
        name: 'Fourth Post'
        background: ''
      },
    ]
  }
});
