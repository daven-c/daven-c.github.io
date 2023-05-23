const sections = document.querySelectorAll(".section");
const headerLinks = document.querySelectorAll("header a");

const progressDot = document.getElementById("progressDot");
const progressContainer = document.getElementById("progressContainer");

const menuButton = document.getElementsByClassName("menu-button-container")[0];
const menuOverlay = document.getElementsByClassName("menu-container")[0];

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

const options = {
  root: document,
  threshold: 0.5,
};

// check if width > height
function isDesktop() {
  return screen.width > screen.height;
}

// update state of hamburger menu
function menuanimate() {
  menuButton.classList.toggle("btn-active");
  menuOverlay.classList.toggle("menu-active");
  menuOverlay.classList.toggle("menu-inactive");
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

// scrolling tracker
function updatemenu() {
  if (!isDesktop() && menuOverlay.classList.contains("menu-active"))
    menuanimate();
}

// clear entries on form
function clearForm(id) {
  const form = document.getElementById(id);
  form.childNodes.forEach((input) => (input.value = ""));
}

// remove elements unrelated to orientation
let eles = document.getElementsByClassName(isDesktop() ? "por-exc" : "ld-exc");
while (eles.length != 0) {
  eles[0].remove();
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

// typing effect
function typeWriter(ele, txt, speed, callback = null) {
  i = 0;
  function type() {
    if (i < txt.length) {
      ele.innerHTML += txt.charAt(i++);
    } else {
      clearInterval(interval);
      if (callback != null) callback();
    }
  }
  const interval = setInterval(type, speed);
}

setTimeout(() => {
  typeWriter(title, "Daven Chang", 100, () => {
    typeWriter(subtitle, "Software | Automation | Machine Learning", 50);
  });
}, 1000);
