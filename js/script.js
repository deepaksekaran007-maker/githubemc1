document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Sticky Navbar Visual Effect on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 10px 30px rgba(5, 11, 31, 0.85)";
            navbar.style.padding = "10px 0";
        } else {
            navbar.style.boxShadow = "none";
            navbar.style.padding = "15px 0";
        }
    });

    // 2. Mobile Dropdown Smart Toggle Collapse on Link Click
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const menuToggle = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
    
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (window.innerWidth < 992) {
                bsCollapse.hide();
            }
        });
    });

    // 3. Swiper Carousel Core Configuration for Testimonials Module
    const swiper = new Swiper('.testimonial-swiper', {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
            }
        }
    });

    // 4. Back-to-Top Floating Toggle Component Interaction
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 400) {
            backToTopBtn.classList.remove('d-none');
            backToTopBtn.classList.add('d-flex');
        } else {
            backToTopBtn.classList.remove('d-flex');
            backToTopBtn.classList.add('d-none');
        }
    });

    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 5. Contact Form Validation and Mock Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you! Your simulated transmission was received successfully.');
            contactForm.reset();
        });
    }
});