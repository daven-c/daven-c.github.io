document.body.style.overflowX = "hidden";
document.body.style.overflowY = "hidden";

var back_top = document.getElementById("backwall-top");
var back_bot = document.getElementById("backwall-bot");
var base_svg = document.getElementById("base-svg");
var mask_svg = document.getElementById("mask-svg");
var mask_circle = document.getElementById("mask-circle");
var progress_text = document.getElementById("loading-text");

var progress = 0;
var duration = 3.5; // in seconds

var incrementer = setInterval(() => {
  progress++;
  progress_text.textContent = progress + "%";
  if (progress == 100) {
    clearInterval(incrementer);
    loading_finished();
  }
}, (duration * 1000) / 110);

mask_circle.addEventListener("click", (event) => {
  if (progress == 100) {
    mask_svg.classList.add("fade-out");
    base_svg.classList.add("fade-out");
    setTimeout(() => {
      back_top.classList.add("slide-up");
      back_bot.classList.add("slide-down");
    }, 1000);

    setTimeout(() => {
      preload_cont.style.visibility = "hidden";
      mask_svg.style.visibility = "hidden";
      document.body.style.overflowX = "auto";
      document.body.style.overflowY = "auto";
      back_top.classList.remove("slide-up");
      back_bot.classList.remove("slide-down");
      mask_svg.classList.remove("fade-out");
      base_svg.classList.remove("fade-out");
    }, 1000);
  }
});

mask_circle.addEventListener("mouseover", (event) => {
  if (progress == 100) {
    mask_circle.style.fill = "rgb(20, 20, 20)";
  }
});

mask_circle.addEventListener("mouseleave", (event) => {
  if (progress == 100) {
    mask_circle.style.fill = "rgb(25, 25, 25)";
  }
});

function loading_finished() {
  mask_circle.style.cursor = "pointer";
  mask_circle.style.stroke = "green";
  progress_text.style.fill = "green";
  back_top.style.boxShadow = "inset 0 0 6px green";
  back_bot.style.boxShadow = "inset 0 0 6px green";
}
