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
  updateView(data);
});

function updateView(data) {
  var office = document.getElementById('office');
  office.innerHTML = emojify(data.office);

  var people = document.getElementById('people');
  people.innerHTML = emojify(data.people);

  var coffee = document.getElementById('coffee');
  coffee.innerHTML = emojify(data.coffee);

  var food = document.getElementById('food');
  food.innerHTML = emojify(data.food);

  var darts = document.getElementById('darts');
  darts.innerHTML = emojify(data.darts);

  var selectedEmoji = document.getElementById("selected-emoji");
  var selectedArea = document.getElementsByClassName("selected")[0]
  var selectedType = selectedArea.children[0].id

  selectedEmoji.innerHTML = emojify(data[selectedType]);
};

function emojify(score) {
  if (score >= 8) {
    return '😄 ';
  } else if (score >= 6) {
    return '🙂 ';
  } else if (score >= 4) {
    return '😐 ';
  } else if (score >= 2) {
    return '😞 ';
  } else if (score >= 0) {
    return '😠 ';
  };
}

document.addEventListener("click", function(event) {
  clearSelected()
  var targetElement = event.target;
  updateTargetElement(targetElement);
  updateSelectedEmoji(targetElement);
});

function updateTargetElement(element) {
  if (element.classList.contains("area")) {
    element.classList.add("selected");
  };
}

function updateSelectedEmoji(element) {
  var selectedEmoji = document.getElementById("selected-emoji");
  selectedEmoji.innerHTML = element.children[0].innerHTML
}

function clearSelected() {
  var selected = document.getElementsByClassName("selected");
  Array.prototype.forEach.call(selected, function(element) {
    element.classList.remove("selected");
  });
};
