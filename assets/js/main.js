const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselContainer = document.querySelector('.carousel-container');
const totalItems = document.querySelectorAll('.product-item').length;

let currentIndex = 0;

function showNextItem() {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Go back to the first item
    }
    updateCarousel();
}

function showPrevItem() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1; // Go to the last item
    }
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100; // Move the carousel by 100% per slide
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', showPrevItem);
nextButton.addEventListener('click', showNextItem);

// Select the hamburger icon and the dropdown menu
// Select the hamburger icon, dropdown menu, and menu links
const hamburger = document.getElementById('hamburger');
const dropdownMenu = document.getElementById('dropdown-menu');
const menuLinks = dropdownMenu.querySelectorAll('a');

// Toggle the dropdown menu when the hamburger icon is clicked
hamburger.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});

// Hide the dropdown menu when a link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        dropdownMenu.classList.remove('show'); // Hide the dropdown menu
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Select all elements that should slide in
    const slideElements = document.querySelectorAll('.slide-in');

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class when the element comes into view
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);  // Stop observing once the element is visible
            }
        });
    }, { threshold: 0.5 });  // Trigger when 50% of the element is visible

    // Start observing each slide-in element
    slideElements.forEach(element => {
        observer.observe(element);
    });
});


//validate form has all data
document.getElementById("contact-form").addEventListener("submit", function(event) {
    // Check if all required fields are filled
    let valid = true;
    const inputs = document.querySelectorAll("input[required], textarea[required]");

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = "red"; // Highlight invalid fields
            valid = false;
        } else {
            input.style.borderColor = ""; // Reset valid fields
        }
    });

    // If not valid, prevent form submission
    if (!valid) {
        event.preventDefault();
        alert("Please fill in all required fields.");
    }
});

// Handle form submission using AJAX
const form = document.getElementById('contactForm');
const loadingMessage = document.getElementById('loadingMessage');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from reloading the page

    // Show loading message
    loadingMessage.style.display = 'block';

    // Prepare the form data
    const formData = new FormData(form);

    // Send the form data using AJAX
    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Show success message
            successMessage.style.display = 'block';
        } else {
            alert('There was an error. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error. Please try again later.');
    })
    .finally(() => {
        // Hide loading message
        loadingMessage.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    // Toggle dropdown visibility when hamburger is clicked
    hamburger.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });
});
