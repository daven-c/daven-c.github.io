/*
const sections = document.querySelectorAll(".section");
const headerLinks = document.querySelectorAll(".header a");

const options = {
  rootMargin: "0px 0px -50% 0px",
  threshold: 0,
};

const observer = new IntersectionObserver((events) => {
  events.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      console.log(entry.target)
    }
  });
}, options);

sections.forEach((section) => observer.observe(section));
*/

const progressDot = document.getElementById("progressDot");
const progressContainer = document.getElementById("progressContainer");

function sectionSwap(event) {
  // Prevent the default behavior of the link
  event.preventDefault();

  var targetSectionId = event.currentTarget.getAttribute("href");
  var targetSection = document.querySelector(targetSectionId);
  targetSection.scrollIntoView({ behavior: "smooth" });
}

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

window.addEventListener("scroll", updateProgressDot);
window.addEventListener("resize", updateProgressDot);
updateProgressDot();
