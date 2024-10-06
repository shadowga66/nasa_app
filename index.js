document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navList = document.querySelector('.nav-list');
    const hamburger = document.querySelector('.hamburger');
    const header = document.querySelector('.header');
    const backToTopButton = document.querySelector('.back-to-top');
    const contactBtn = document.getElementById('contactBtn');
    const contactModal = document.getElementById('contactModal');
    const closeBtn = document.querySelector('.close');
    const contactForm = document.getElementById('contactForm');
    const themeToggle = document.getElementById('themeToggle');
    const preloader = document.getElementById('preloader');

    window.addEventListener('load', () => {
        preloader.style.display = 'none';
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            backToTopButton.style.display = 'block';
        } else {
            header.classList.remove('scrolled');
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
   contactBtn.addEventListener('click', () => {
        contactModal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        contactModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == contactModal) {
            contactModal.style.display = 'none';
        }
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Message sent successfully!');
        contactForm.reset();
        contactModal.style.display = 'none';
    });

    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    }
});

let cartCount = 0;

function addToCart(service, price) {
    cartCount++;
    document.getElementById("cartCount").textContent = cartCount;
    alert(`${service} has been added to your cart! Price: $${price}`);
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const service = this.getAttribute('data-service');
        const price = this.getAttribute('data-price');
        addToCart(service, price);
    });
});
