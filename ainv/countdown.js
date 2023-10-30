
// Set the countdown end date
const END_DATE = new Date('2023-10-31T00:00:00');

// Update the countdown timer every second
function updateCountdown() {
    const now = new Date();
    const timeRemaining = END_DATE - now;

    // Calculate the days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update the countdown timer elements
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if (timeRemaining <= 0) {
        window.location.assign('ainv.html');
    }
}

// Start the countdown timer
setInterval(updateCountdown, 1000);