document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio site loaded successfully!");

    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    const profileImage = document.querySelector(".profile-img");
    profileImage.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.1)";
        this.style.transition = "transform 0.3s ease";
    });
    profileImage.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    });
});
