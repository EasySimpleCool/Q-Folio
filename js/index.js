Vue.component ('item', {
  template: '<a class="name"><p>Item</p></a>'
  }
);

var app = new Vue({
  el: '.portfolio-list',
  data: {
    title: [
      {
        name: 'First Post'
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
