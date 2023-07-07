var active_section = document.getElementsByClassName("active")[0];
let contact_button = document.getElementById("to-contact");
let return_button = document.getElementById("return-btn");
console.log(return_button);

function load(target) {
  active_section.classList.toggle("active");
  target.classList.toggle("active");
  active_section = target;
  if (active_section.id == "home") {
    return_button.style.visibility = "hidden";
  }
  else {
    return_button.style.visibility = "visible";
  }
}

load(home);
