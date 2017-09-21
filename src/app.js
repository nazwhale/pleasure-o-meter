'use strict';

document.addEventListener("DOMContentLoaded", function() {

  new PusherRequester;

  document.addEventListener("click", function(event) {
    clearSelected()
    var targetElement = event.target;
    updateTargetElement(targetElement);
    selectLargeEmoji(targetElement);
  });

  function updateTargetElement(element) {
    if (element.classList.contains("area")) {
      element.classList.add("selected");
    };
  }

  function selectLargeEmoji(element) {
    var selectedEmoji = document.getElementById("selected-emoji");
    selectedEmoji.innerHTML = element.children[0].innerHTML
  }

  function clearSelected() {
    var selected = document.getElementsByClassName("selected");
    Array.prototype.forEach.call(selected, function(element) {
      element.classList.remove("selected");
    });
  };
})
