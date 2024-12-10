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

function updateProgressBar(startDate, endDate) {
    const now = new Date().getTime();
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();

    if (now < start) {
        // If current time is before the start date
        document.getElementById('progress-fill').style.width = '0%';
        document.getElementById('progress-percentage').innerText = '0%';
    } else if (now > end) {
        // If current time is after the end date
        document.getElementById('progress-fill').style.width = '100%';
        document.getElementById('progress-percentage').innerText = '100%';
    } else {
        // Calculate the progress percentage
        const totalDuration = end - start;
        const elapsedDuration = now - start;
        const percentage = Math.floor((elapsedDuration / totalDuration) * 100);

        // Update the progress bar and percentage text
        document.getElementById('progress-fill').style.width = percentage + '%';
        document.getElementById('progress-percentage').innerText = percentage + '%';
    }
}

// Set your specific dates
const startDate = "Oct 23, 2024 02:00:00"; // X day in the past
const endDate = "Apr 14, 2025 02:00:00"; // Y time in the future

// Initialize the progress bar
updateProgressBar(startDate, endDate);

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 10000); // Change image every 5 seconds
}