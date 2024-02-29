const sections = document.querySelectorAll(".section");
const headerLinks = document.querySelectorAll("header a");

const progressDot = document.getElementById("progressDot");
const progressContainer = document.getElementById("progressContainer");

const menuButton = document.getElementsByClassName("menu-button-container")[0];
const menuOverlay = document.getElementsByClassName("menu-container")[0];

const options = {
  root: document,
  threshold: 0.3,
};

// check if width > height
function isDesktop() {
  return screen.width > screen.height;
}

// section switching function
const observer = new IntersectionObserver((events) => {
  events.forEach((entry) => {
    if (entry.isIntersecting && entry.target.id != "footer") {
      document
        .getElementsByClassName("active-section")[0]
        .classList.remove("active-section");
      document
        .getElementById(entry.target.id + "-tag")
        .classList.add("active-section");
      // console.log(entry)
    }
  });
}, options);
sections.forEach((section) => observer.observe(section));

// update state of hamburger menu
function menuanimate() {
  menuButton.classList.toggle("btn-active");
  menuOverlay.classList.toggle("menu-active");
  menuOverlay.classList.toggle("menu-inactive");
}

// menu button updater
function updatemenu() {
  if (!isDesktop() && menuOverlay.classList.contains("menu-active"))
    menuanimate();
}

// clear entries on form
function clearForm(id) {
  const form = document.getElementById(id);
  form.childNodes.forEach((input) => (input.value = ""));
}

// Adjust height for mobile
const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", documentHeight);
documentHeight();

// Light and dark mode
function swapTheme(button) {
  document.body.classList.toggle("light-mode");
  button.classList.toggle("light-mode");
}