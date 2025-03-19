// navbar Option 1

document.addEventListener("DOMContentLoaded", function () {
    let dropdowns = document.querySelectorAll(".navbar .dropdown");

    dropdowns.forEach((dropdown) => {
        let menu = dropdown.querySelector(".dropdown-menu");

        // Show dropdown on hover
        dropdown.addEventListener("mouseenter", function () {
            menu.style.display = "block";
        });

        // Hide dropdown when the mouse leaves
        dropdown.addEventListener("mouseleave", function () {
            menu.style.display = "none";
        });
    });
});


    // Toggle hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Toggle dropdown on mobile
    const dropdowns = document.querySelectorAll('.dropdown-toggle');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            if (window.innerWidth <= 1024) { // Only on mobile/tablet
                e.preventDefault();
                const parent = dropdown.parentElement;
                parent.classList.toggle('active');
            }
        });
    });

    // Close menu when clicking a link on mobile
    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 1024) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });
