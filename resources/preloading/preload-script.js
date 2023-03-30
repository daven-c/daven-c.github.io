const preloader = document.getElementById("preload-container");

// handle refresh
window.onbeforeunload = preloader.scrollIntoView({ behavior: "smooth" });

preloader.onanimationend = (animation) => {
  if (animation.animationName == "vanish") {
    console.log("preload animation ended");
    document.body.style.overflowY = "auto";
    document.body.removeChild(preloader);
  }
};
