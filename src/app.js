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
  console.log('People: ' + data.people);    
  console.log('Coffee: ' + data.coffee);    
  console.log('Food: ' + data.food);    
  console.log('Darts: ' + data.darts);    
});
