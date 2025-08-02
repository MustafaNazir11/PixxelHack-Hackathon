// Mobile menu toggle
const menuBtn = document.getElementById('menu_btn');
const navLinks = document.getElementById('nav_links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close menu when clicking on a link (optional)
document.querySelectorAll('.nav_items a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll to top functionality
const scrollToTop = document.getElementById('to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTop.classList.add('show');
    } else {
        scrollToTop.classList.remove('show');
    }
});

scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scroll to bestsellers section
function scrollToBestsellers() {
    document.getElementById('bestsellers').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Enhanced carousel with manual controls
let currentSlide = 0;
const totalSlides = document.querySelectorAll('.carousel_item').length / 2; // Divide by 2 due to duplicates

function moveCarousel(direction) {
    const track = document.getElementById('carouselTrack');
    const itemWidth = document.querySelector('.carousel_item').offsetWidth + 20; // Including gap
    
    currentSlide += direction;
    
    if (currentSlide >= totalSlides) currentSlide = 0;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    
    track.style.transform = `translateX(-${currentSlide * itemWidth}px)`;
}

// Interactive food item details
function showItemDetails(name, description, price) {
    const modal = document.createElement('div');
    modal.className = 'food-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <h3>${name}</h3>
            <p>${description}</p>
            <div class="price">${price}</div>
            <button class="btn btn1" onclick="alert('Added to cart!')">Add to Cart</button>
        </div>
    `;
    document.body.appendChild(modal);
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animate service boxes on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.box').forEach(box => {
    observer.observe(box);
});