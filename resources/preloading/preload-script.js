const preloader = document.getElementById("preload-container");

var animations_complete = 0;

preloader.onanimationend = () => {
  animations_complete++;
  if (animations_complete == 6) {
    console.log("animation ended");
    document.body.style.overflowY = 'auto';
  }
};
