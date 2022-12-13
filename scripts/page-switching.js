function get_focused_button() {
  return document.getElementsByClassName("focused-button")[0];
}

function get_focused_banner() {
  return document.getElementsByClassName("focused-banner")[0];
}

function page_swap(target_button) {
  change_button(target_button);
  change_banner(target_button.id);
}

function change_button(new_button) {
  var current_button = get_focused_button();
  current_button.classList.remove("focused-button");
  new_button.classList.add("focused-button");
}

function change_banner(button_id) {
  var current_banner = get_focused_banner();
  var new_banner = document.getElementById(button_id.split("-")[0] + "-page");
  current_banner.classList.remove("focused-banner");
  new_banner.classList.add("focused-banner");
}
