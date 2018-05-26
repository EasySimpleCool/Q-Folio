Vue.component ('item', {
  props: ['titleitem'],
  template: '<a class="folio-item" href="{{ titleitem.url }}">><p>{{ titleitem.name }}</p></a>'
  }
);

var app = new Vue({
  el: '.portfolio-list',
  data: {
    titles: [
      {
        name: 'First Post',
        url: '/folio01'
      },
      {
        name: 'Second Post'
      },
      {
        name: 'Third Post'
      },
      {
        name: 'Fourth Post'
      }
    ]
  }
});
