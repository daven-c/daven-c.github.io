const sections = document.querySelectorAll(".section");
const headerLinks = document.querySelectorAll("header a");

const progressDot = document.getElementById("progressDot");
const progressContainer = document.getElementById("progressContainer");

const menuButton = document.getElementsByClassName("menu-button-container")[0];
const menuOverlay = document.getElementsByClassName("menu-container")[0];


const options = {
  root: document,
  threshold: .5,
};

function isDesktop() {
  return screen.width > screen.height;
}

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

// scrolling function
function sectionSwap(event) {
  event.preventDefault();

  let targetSectionId = event.currentTarget.getAttribute("href");
  let targetSection = document.querySelector(targetSectionId);
  targetSection.scrollIntoView({ behavior: "smooth" });
  if (!isDesktop()) menuanimate(menuButton);
}

function clearForm(id) {
  const form = document.getElementById(id);
  form.childNodes.forEach((input) => (input.value = ""));
}

let eles = document.getElementsByClassName((isDesktop()) ? "por-exc" : "ld-exc");
while (eles.length != 0) {
  eles[0].remove()
}

const documentHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
 }
 window.addEventListener("resize", documentHeight)
 documentHeight()

sections.forEach((section) => observer.observe(section));
