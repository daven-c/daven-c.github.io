var sections = document.getElementsByClassName("section");
var current = 0;

function showSection(id) {
  var prev = document.getElementsByClassName("active")[0];
  prev.classList.remove("active");
  var target = document.getElementById(id);
  target.classList.add("active");
  for (var i = 0; i < sections.length; i++) {
    if (sections[i] == target) {
      current = i;
      break;
    }
  }

  var prev_button = document.getElementById(prev.id + "-button");
  prev_button.classList.remove("selected");
  var new_button = document.getElementById(id + "-button");
  new_button.classList.add("selected");
}

document.addEventListener("keydown", function (event) {
  if (event.key == "ArrowLeft") {
    current = (current - 1 + sections.length) % sections.length;
    showSection(sections[current].id);
  } else if (event.key == "ArrowRight") {
    current = (current + 1) % sections.length;
    showSection(sections[current].id);
  }
});
