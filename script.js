document.addEventListener("DOMContentLoaded", function() {
    // Example: Alert user when clicking on a team
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach(card => {
        card.addEventListener('click', function() {
            alert(`You selected ${this.innerText}`);
        });
    });
});
function setupCountdown(elementId, endTime) {
    const timerElement = document.getElementById(elementId);
    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = endTime - now;

        // Calculate time components
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // If the countdown is finished, display a message
        if (distance < 0) {
            clearInterval(countdown);
            timerElement.innerHTML = "EXPIRED";
        }
    }, 1000);
}
function setupDaysSince(elementId, startDate) {
    const counterElement = document.getElementById(elementId);
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = now - startDate;

        // Calculate number of days since the event
        const daysSince = Math.floor(distance / (1000 * 60 * 60 * 24));

        // Display the result
        counterElement.innerHTML = `${daysSince} dienų`;

        // If you want to stop counting after a certain date, you could check here
    }, 1000);
}
// Set the countdowns here with future dates
const event1Time = new Date("Apr 14, 2025 02:00:00").getTime();
const event2Time = new Date("Mar 24, 2025 18:00:00").getTime();
// Set a past event date for days since counter
const pastEventDate = new Date("Oct 23, 2024 02:00:00").getTime();

setupCountdown("timer1", event1Time);
setupCountdown("timer2", event2Time);
setupDaysSince("daysCounter", pastEventDate);

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");
  
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
    // burger is workin
  });

  function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show'); // Toggle the 'show' class
}

document.addEventListener('DOMContentLoaded', function() {
    const comingSoonText = document.querySelector('.coming-soon-text');

    comingSoonText.addEventListener('click', function() {
        this.classList.add('shake');
        setTimeout(() => {
            this.classList.remove('shake');
        }, 1000); // Removes the shake effect after 1 second
    });
});