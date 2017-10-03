'use strict';

document.addEventListener("DOMContentLoaded", function() {
  
  var initialValues = {"office": 5, "people": 5, "coffee": 5, "food": 5, "darts": 5}

  updateView(initialValues);

  new PusherRequester;

  var list = document.getElementById("stream-list");

  list.addEventListener("click", function(event) {
    var targetElement = event.target;
    updateAreaElements(targetElement);
    console.log(targetElement);
  });

  function updateAreaElements(element) {
    clearSelected()
    selectLargeEmoji(element);
    element.classList.add("selected");
  }

  function selectLargeEmoji(element) {
    var selectedEmoji = document.getElementById("selected-emoji");
    selectedEmoji.innerHTML = element.children[0].innerHTML
  }

  function clearSelected() {
    var selected = document.getElementsByClassName("selected")[0];
    if (selected != undefined) selected.classList.remove("selected");
  };
})
