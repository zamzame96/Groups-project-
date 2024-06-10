document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    menuToggle.addEventListener("click", function() {
        navbar.classList.toggle("show");
    });

    // Adjust gallery items based on screen size
    const galleryItems = document.querySelectorAll(".gallery-item");

    function updateGalleryLayout() {
        const width = window.innerWidth;
        if (width < 480) {
            galleryItems.forEach(item => {
                item.style.flex = "1 1 100%";
                item.style.maxWidth = "100%";
            });
            
        } else if (width < 768) {
            galleryItems.forEach(item => {
                item.style.flex = "1 1 calc(50% - 20px)";
                item.style.maxWidth = "calc(50% - 20px)";
            });
        } else {
            galleryItems.forEach(item => {
                item.style.flex = "1 1 calc(33.333% - 40px)";
                item.style.maxWidth = "calc(33.333% - 40px)";
            });
        }
    }

    // Call the function initially and on window resize
    updateGalleryLayout();
    window.addEventListener("resize", updateGalleryLayout);
});