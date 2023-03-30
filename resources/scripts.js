// handle refresh
window.scrollTo({ top: 0, behavior: "smooth" });

const sections = document.querySelectorAll(".section");
const headerLinks = document.querySelectorAll(".header a");

const progressDot = document.getElementById("progressDot");
const progressContainer = document.getElementById("progressContainer");

const options = {
  root: document,
  threshold: 0.8,
};

// section switching function
const observer = new IntersectionObserver((events) => {
  events.forEach((entry) => {
    if (entry.isIntersecting) {
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
}

// scroll tracking functin
function updateProgressDot() {
  const windowHeight = window.innerHeight;
  const scrollHeight = document.documentElement.scrollHeight;
  const scrolledAmount = window.scrollY;

  const remainingScroll = scrollHeight - windowHeight;
  const scrollPercentage = scrolledAmount / remainingScroll;

  const progressContainerHeight = progressContainer.offsetHeight;
  const maxDotOffset = progressContainerHeight - progressDot.offsetHeight;

  progressDot.style.top = `${scrollPercentage * maxDotOffset}px`;
}

sections.forEach((section) => observer.observe(section));

window.addEventListener("scroll", updateProgressDot);
window.addEventListener("resize", updateProgressDot);
updateProgressDot();
