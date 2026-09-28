// const produkBox = document.getElementById("produkBox");
// const leftBtn = document.getElementById("leftBtn");
// const rightBtn = document.getElementById("rightBtn");

// let canScroll = true;

// if (rightBtn && leftBtn && produkBox) {
//   rightBtn.addEventListener("click", function () {
//     if (!canScroll) return;

//     canScroll = false;

//     if (window.innerWidth <= 768) {
//       produkBox.scrollLeft += 500;
//     } else {
//       produkBox.scrollLeft += 1141;
//     }

//     setTimeout(function () {
//       canScroll = true;
//     }, 500);
//   });

//   leftBtn.addEventListener("click", function () {
//     if (!canScroll) return;

//     canScroll = false;

//     if (window.innerWidth <= 768) {
//       produkBox.scrollLeft -= 500;
//     } else {
//       produkBox.scrollLeft -= 1141;
//     }

//     setTimeout(function () {
//       canScroll = true;
//     }, 500);
//   });
// }

// const produkBox2 = document.getElementById("produkBox2");
// const leftBtn2 = document.getElementById("leftBtn2");
// const rightBtn2 = document.getElementById("rightBtn2");

// let canScroll2 = true;

// if (rightBtn2 && leftBtn2 && produkBox2) {
//   rightBtn2.addEventListener("click", function () {
//     if (!canScroll2) return;

//     canScroll2 = false;

//     if (window.innerWidth <= 768) {
//       produkBox2.scrollLeft += 500;
//     } else {
//       produkBox2.scrollLeft += 1141;
//     }


//     setTimeout(function () {
//       canScroll2 = true;
//     }, 500);
//   });

//   leftBtn2.addEventListener("click", function () {
//     if (!canScroll2) return;

//     canScroll2 = false;
//     if (window.innerWidth <= 768) {
//       produkBox2.scrollLeft -= 500;
//     } else {
//       produkBox2.scrollLeft -= 1141;
//     }


//     setTimeout(function () {
//       canScroll2 = true;
//     }, 500);
//   });
// }

const produkBox = document.getElementById("produkBox");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

const produkItems = produkBox.children;

let currentIndex = 0;

rightBtn.addEventListener("click", () => {
    if (currentIndex < produkItems.length - 1) {
        currentIndex++;

        produkItems[currentIndex].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start"
        });
    }
});

leftBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;

        produkItems[currentIndex].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start"
        });
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

// const produkBox3 = document.getElementById("produkBox3");
// const leftBtn3 = document.getElementById("leftBtn3");
// const rightBtn3 = document.getElementById("rightBtn3");

// let canScroll3 = true;

// if (rightBtn3 && leftBtn3 && produkBox3) {
//   rightBtn3.addEventListener("click", function () {
//     if (!canScroll3) return;

//     canScroll3 = false;

//     if (window.innerWidth <= 768) {
//       produkBox3.scrollLeft += 500;
//     } else {
//       produkBox3.scrollLeft += 1141;
//     }


//     setTimeout(function () {
//       canScroll3 = true;
//     }, 500);
//   });

//   leftBtn3.addEventListener("click", function () {
//     if (!canScroll3) return;

//     canScroll3 = false;
//     if (window.innerWidth <= 768) {
//       produkBox3.scrollLeft -= 500;
//     } else {
//       produkBox3.scrollLeft -= 1141;
//     }


//     setTimeout(function () {
//       canScroll3 = true;
//     }, 500);
//   });
// }

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
