
console.log("Luxentis Page 1 loaded.");

  function handleScan() {
    const userInput = document.getElementById('scanInput').value.trim();

    if (!userInput) {
      alert("Please enter your email.");
      return;
    }

    // Optional: Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmail = emailRegex.test(userInput);

    if (!isEmail) {
      alert("Please enter a valid email address.");
      return;
    }

    // Example: Send to your webhook / API
    fetch('https://your-server.com/api/collect-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: userInput })
    })
    .then(response => {
      if (response.ok) {
        alert("Thanks! We'll be in touch soon.");
        document.getElementById('scanInput').value = ''; // clear input
      } else {
        alert("Something went wrong. Try again later.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Error sending your email.");
    });
  }

// Testimonials

const track = document.querySelector('.carousel-track');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
const dots = document.querySelectorAll('.dot');

const cardsPerView = 2;
const gap = 20;
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;
const totalSlides = Math.ceil(totalCards / cardsPerView);

let currentIndex = 0;

function updateCarousel() {
  const cardWidth = cards[0].offsetWidth;
  const slideWidth = (cardWidth + gap) * cardsPerView;

  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

leftArrow.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

rightArrow.addEventListener('click', () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    updateCarousel();
  }
});

window.addEventListener('resize', updateCarousel);
updateCarousel();


