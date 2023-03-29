const sections = document.querySelectorAll(".section");
const headerLinks = document.querySelectorAll(".header a");

const options = {
  rootMargin: "0px 0px -50% 0px",
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      const activeLink = document.querySelector(`.header a[href="#${id}"]`);
      headerLinks.forEach((link) => link.classList.remove("active"));
      activeLink.classList.add("active");
    }
  });
}, options);

sections.forEach((section) => observer.observe(section));
