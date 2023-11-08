const stars = 1000;
const starsContainer = document.getElementById("stars");
const radius = 400;

for (let i = 0; i < stars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    starsContainer.appendChild(star);

    const scale = 2 + Math.random() * 1;
    const starRadius = radius + Math.random() * 300;
    const rotateY = Math.random() * 360;
    const rotateX = Math.random() * 50 - 25;

    const left = Math.random() * 100;
    const top = Math.random() * 100;

    star.style.transformOrigin = `0 0 ${starRadius}px`;
    star.style.transform = `translate3d(${left}vw, ${top}vh, -${starRadius}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(${scale},${scale})`;
}