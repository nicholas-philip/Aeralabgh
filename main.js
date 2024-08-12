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



// FAQ toggle functionality
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle('active');
  });
});
