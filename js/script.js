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
        });
    });
});
