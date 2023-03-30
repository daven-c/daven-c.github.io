const preloader = document.getElementById("preload-container");

// handle refresh
window.scrollTo({ top: 0, behavior: "smooth" });
window.scrollTo({ top: 0, behavior: "smooth" });

preloader.onanimationend = (animation) => {
  if (animation.animationName == 'vanish') {
    console.log("preload animation ended");
    document.body.style.overflowY = 'auto';
    document.body.removeChild(preloader)
  }
};
