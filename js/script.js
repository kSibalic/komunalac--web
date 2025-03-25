document.addEventListener("DOMContentLoaded", function () {
    let menuIcon = document.getElementById("menu-icon");
    let nav = document.querySelector("nav");

    // Toggle the mobile menu and animate hamburger
    menuIcon.addEventListener("click", function () {
        nav.classList.toggle("active");
        menuIcon.classList.toggle("active");
    });

    // Toggle dropdown menus on mobile
    document.querySelectorAll(".dropdown_ > a").forEach((dropdown) => {
        dropdown.addEventListener("click", function (e) {
            // Only prevent default and toggle on mobile
            if (window.innerWidth <= 959) {
                e.preventDefault();
                let parent = this.parentElement;

                // Toggle current dropdown
                parent.classList.toggle("active");

                // Close other dropdowns when opening one
                document.querySelectorAll(".dropdown_").forEach((item) => {
                    if (item !== parent) {
                        item.classList.remove("active");
                    }
                });
            }
        });
    });

    // Close menu when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 959) {
            if (!nav.contains(e.target) && !menuIcon.contains(e.target)) {
                nav.classList.remove("active");
                menuIcon.classList.remove("active");

                // Close all dropdowns
                document.querySelectorAll(".dropdown_").forEach((item) => {
                    item.classList.remove("active");
                });
            }
        }
    });

    // Prevent propagation on dropdown submenu to allow scrolling
    document.querySelectorAll("nav .dropdown_ ul").forEach((submenu) => {
        submenu.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent click from closing dropdown on mobile
        });
    });
});