const preloader = document.getElementById("preload-container");

const pageAccessedByReload = () => {
  var refreshed =
    (window.performance.navigation &&
      window.performance.navigation.type === 1) ||
    window.performance
      .getEntriesByType("navigation")
      .map((nav) => nav.type)
      .includes("reload");
  if (refreshed) {
    cleanup();
  } else {
    preloader.onanimationend = (animation) => {
      if (animation.animationName == "vanish") {
        console.log("preload animation ended");
        cleanup();
      }
    };
  }
};

function cleanup() {
  document.body.style.overflowY = "auto";
  document.body.removeChild(preloader);
}

pageAccessedByReload();

