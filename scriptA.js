console.log("SCRIPT A IS WORKING!");

const aboutSection = document.querySelector(".about-anim");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const images = entry.target.querySelectorAll(".box-VM-anim");

        if (entry.isIntersecting) {
            entry.target.classList.add("show");

            images.forEach(image => {
                image.classList.add("show");
            });
        } else {
            entry.target.classList.remove("show");

            images.forEach(image => {
                image.classList.remove("show");
            });
        }
    });
}
);

observer.observe(aboutSection);

const motto = document.querySelector(".motto");

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, {
    threshold: 0.2
});

if (motto) {
    observer1.observe(motto);
}