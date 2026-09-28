const produkBox = document.getElementById("produkBox");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

const produkItems = produkBox.children;

let currentIndex = 0;

const mobileMode = window.matchMedia("(max-width: 768px)");

rightBtn.addEventListener("click", function () {

    if (mobileMode.matches) {

        // MOBILE / TABLET
        if (currentIndex < produkItems.length - 1) {
            currentIndex++;

            produkItems[currentIndex].scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start"
            });
        }

    } else {

        // DESKTOP
        produkBox.scrollLeft += 1141;

    }

});

leftBtn.addEventListener("click", function () {

    if (mobileMode.matches) {

        // MOBILE / TABLET
        if (currentIndex > 0) {
            currentIndex--;

            produkItems[currentIndex].scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start"
            });
        }

    } else {

        // DESKTOP
        produkBox.scrollLeft -= 1141;

    }

});

const produkBox2 = document.getElementById("produkBox2");
const leftBtn2 = document.getElementById("leftBtn2");
const rightBtn2 = document.getElementById("rightBtn2");

const produkItems2 = produkBox2.children;

let currentIndex2 = 0;

const mobileMode2 = window.matchMedia("(max-width: 768px)");

rightBtn2.addEventListener("click", function () {

    if (mobileMode2.matches) {

        // MOBILE / TABLET
        if (currentIndex2 < produkItems2.length - 1) {
            currentIndex2++;

            produkItems2[currentIndex2].scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start"
            });
        }

    } else {

        // DESKTOP
        produkBox.scrollLeft += 1141;

    }

});

leftBtn2.addEventListener("click", function () {

    if (mobileMode2.matches) {

        // MOBILE / TABLET
        if (currentIndex2 > 0) {
            currentIndex2--;

            produkItems2[currentIndex2].scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start"
            });
        }

    } else {

        // DESKTOP
        produkBox2.scrollLeft -= 1141;

    }

});

const imageSection2 = document.querySelector(".produk-scroll-show");

const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const images = entry.target.querySelectorAll(".card");

      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        images.forEach((image) => {
          image.classList.add("show");
        });
      } else {
        entry.target.classList.remove("show");

        images.forEach((image) => {
          image.classList.remove("show");
        });
      }
    });
  },
  {
    threshold: 0.2,
  },
);

if (imageSection2) {
  observer2.observe(imageSection2);
}

const imageSection3 = document.querySelector(".produk-scroll-show2");

const observer3 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const images = entry.target.querySelectorAll(".card3");

      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        images.forEach((image) => {
          image.classList.add("show");
        });
      } else {
        entry.target.classList.remove("show");

        images.forEach((image) => {
          image.classList.remove("show");
        });
      }
    });
  },
  {
    threshold: 0.2,
  },
);

if (imageSection3) {
  observer3.observe(imageSection3);
}
