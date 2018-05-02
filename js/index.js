Vue.component ('item', {
  props: ['titleitem'],
  template: '<a class="folio-item"><p>{{ titleitem.name }}</p></a>'
  }
);

var app = new Vue({
  el: '.portfolio-list',
  data: {
    titles: [
      {
        name: 'First Post'
        background-color: '#0BBACC';
      },
      {
        name: 'Second Post'
        background-color: '#FFC176';
      },
      {
        name: 'Third Post'
        background-color: '#4A4A4A';
      },
      {
        name: 'Fourth Post'
        background-color: '#965CDA';
      }
    ]
  }
});
