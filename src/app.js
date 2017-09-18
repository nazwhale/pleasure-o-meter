'use strict';

const pusher = new Pusher('878d874539a144210a3c', {
  cluster: 'eu',
  encrypted: true
});

var channel = pusher.subscribe('office');

channel.bind('pusher:subscription_succeeded', function() {
  console.log('Pusher subscription succeeded');
});

channel.bind('state', function(data) {
  console.log('Office: ' + data.office);    

  var office = document.getElementById('office');
  office.innerHTML = data.office;

  var people = document.getElementById('people');
  people.innerHTML = data.people;

  var coffee = document.getElementById('coffee');
  coffee.innerHTML = data.coffee;

  var food = document.getElementById('food');
  food.innerHTML = data.food;

  var darts = document.getElementById('darts');
  darts.innerHTML = data.darts;
});

