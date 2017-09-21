'use strict';

function PusherRequester() {
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
    updateAreas(data);
    updateLargeEmoji(data);
  };

  function updateAreas(data) {
    var areas = [office, people, coffee, food, darts]
    areas.forEach(function(area) {
      area.innerHTML = this.emojify(data[area.id]);
    });
  }

  function updateLargeEmoji(data) {
    var selectedEmoji = document.getElementById("selected-emoji");
    var selectedArea = document.getElementsByClassName("selected")[0]
    var selectedId = selectedArea.children[0].id

    selectedEmoji.innerHTML = this.emojify(data[selectedId]);
  };
};

PusherRequester.prototype.emojify = function(score) {
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
