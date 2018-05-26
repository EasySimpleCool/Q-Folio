Vue.component ('item', {
  props: ['titleitem'],
  template: '<a class="folio-item" :href="titleitem.link"><p>{{ titleitem.name }}</p></a>'
  }
);

var app = new Vue({
  el: '.portfolio-list',
  data: {
    titles: [
      {
        name: 'First Post',
        link: '/folio01.html'
      },
      {
        name: 'Second Post',
        link: '/folio02.html'
      },
      {
        name: 'Third Post'
      },
      {
        name: 'Fourth Post'
      },
      {
        name: 'Fifth Post'
      },
      {
        name: 'Sixth Post'
      },
      {
        name: 'Seventh Post'
      },
      {
        name: 'Eighth Post'
      },
    ]
  }
});
