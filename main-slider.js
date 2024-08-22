document.addEventListener('DOMContentLoaded', function () {
    // Hamburger menu toggle
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

    // Slider functionality
    const slider = document.querySelector('.slider');
    if (slider) {
        let currentSlide = 0;
        let slideInterval;

        function showSlide(index) {
            const slides = document.querySelectorAll('.slide');
            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }

            const sliderWidth = slider.clientWidth;
            document.querySelector('.slides').style.transform = `translateX(-${currentSlide * sliderWidth}px)`;
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        function startAutoSlide() {
            slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
        }

        function stopAutoSlide() {
            clearInterval(slideInterval);
        }

        window.addEventListener('resize', () => {
            showSlide(currentSlide);
        });

        showSlide(currentSlide);
        startAutoSlide();
    } else {
        console.error('Slider element not found!');
    }

    // Email sending functionality
    const sendEmailButton = document.getElementById("sendEmailButton");
    if (sendEmailButton) {
        sendEmailButton.addEventListener("click", function sendEmail() {
            Email.send({
                Host: "smtp.yourisp.com", // Make sure to use the correct SMTP host
                Username: "lodon@aerolabgh.com",
                Password: "45BB008D52DDAC4AC8C248B0C52F840E6DAA",
                To: 'philipnicholas386@gmail.com',
                From: "sikiru@aerolabgh.com",
                Subject: "Drone Light Show",
                Body: document.getElementById("name").value + " ," + 
                      document.getElementById("message").value + " ," + 
                      document.getElementById("email").value
            })
            .then(message => {
                alert('Email sent successfully!');
                console.log(message);
            })
            .catch(error => {
                console.error("Failed to send email:", error);
            });
        });
    } else {
        console.error('Send Email Button not found!');
    }
});
