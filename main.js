// Hamburger menu functionality
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach(n => 
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );
}

// Form submission and email sending
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  sendEmail();
});

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "sikiru@aerolabgh.com",
    Password: "45BB008D52DDAC4AC8C248B0C52F840E6DAA",
    To: 'info@aerolabgh.com',
    From: "sikiru@aerolabgh.com",
    Subject: "drone light show",
    Body: `
      Name: ${document.getElementById("name").value}<br>
      Email: ${document.getElementById("email").value}<br>
      Message: ${document.getElementById("message").value}
    `
  })
  .then(message => {
    alert("Mail sent successfully");
    document.getElementById('contact-form').reset(); // Optionally reset form
  })
  .catch(error => {
    console.error("Mail sending failed:", error);
    alert("Mail sending failed. Please check the console for errors.");
  });
}

// Carousel functionality
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
let currentIndex = 0;

function showSlide(index) {
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

if (prevButton && nextButton && slides) {
  prevButton.addEventListener('click', () => showSlide(currentIndex - 1));
  nextButton.addEventListener('click', () => showSlide(currentIndex + 1));
}

// Optional: Auto-slide
setInterval(() => showSlide(currentIndex + 1), 5000);

// FAQ toggle functionality
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle('active');
  });
});
