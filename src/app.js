'use strict';

document.addEventListener("DOMContentLoaded", function() {

  new PusherRequester;

  document.addEventListener("click", function(event) {
    var targetElement = event.target;
    updateAreaElements(targetElement);
  });

  function updateAreaElements(element) {
    if (element.classList.contains("area")) {
      clearSelected()
      selectLargeEmoji(element);
      element.classList.add("selected");
    };
  }

  function selectLargeEmoji(element) {
    var selectedEmoji = document.getElementById("selected-emoji");
    selectedEmoji.innerHTML = element.children[0].innerHTML
  }

  function clearSelected() {
    var selected = document.getElementsByClassName("selected")[0];
    console.log(selected);
    if (selected != undefined) {
      selected.classList.remove("selected");
    };
  };
})
