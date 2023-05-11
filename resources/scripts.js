
const sections = document.querySelectorAll(".section");
const headerLinks = document.querySelectorAll("header a");

const progressDot = document.getElementById("progressDot");
const progressContainer = document.getElementById("progressContainer");

const menuButton = document.getElementById("menu-button-container");

const options = {
  root: document,
  threshold: 0.8,
};

function menuanimate() {
  menuButton.classList.toggle("btn-active");
  document.getElementById("menu-container").classList.toggle("menu-active");
  document.getElementById("menu-container").classList.toggle("menu-inactive");
}

// section switching function
const observer = new IntersectionObserver((events) => {
  events.forEach((entry) => {
    if (entry.isIntersecting && entry.target.id != 'footer') {
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

// scrolling function
function sectionSwap(event) {
  event.preventDefault();

  var targetSectionId = event.currentTarget.getAttribute("href");
  var targetSection = document.querySelector(targetSectionId);
  targetSection.scrollIntoView({ behavior: "smooth" });

  menuanimate(menuButton);

}

function clearForm(id) {
  const form = document.getElementById(id);
  form.childNodes.forEach((input) => (input.value = ""));
}

sections.forEach((section) => observer.observe(section));
