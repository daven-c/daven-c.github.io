
const preloader = document.getElementById("preload-container");
preloader.onanimationend = (animation) => {
  if (animation.animationName == 'vanish') {
    console.log("preload animation ended");
    document.body.style.overflowY = 'auto';
    document.body.removeChild(preloader)
  }
};
