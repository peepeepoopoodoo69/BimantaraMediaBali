// console.log("SCRIPT A IS WORKING!");

const produkBox = document.getElementById("produkBox");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

const produkItems = produkBox.children;

let currentIndex = 0;
let canScroll = true;

const mobileMode = window.matchMedia("(max-width: 768px)");

function desktopScroll(amount) {
    produkBox.scrollLeft += amount;
}

function mobileScroll(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = 0;
    }

    if (currentIndex >= produkItems.length) {
        currentIndex = produkItems.length - 1;
    }

    produkItems[currentIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start"
    });
}

function startCooldown() {
    canScroll = false;

    setTimeout(() => {
        canScroll = true;
    }, 700); // cooldown = 700ms
}


rightBtn.addEventListener("click", function () {

    if (!canScroll) return;

    if (mobileMode.matches) {
        mobileScroll(1);
    } else {
        desktopScroll(1145.4);
    }

    startCooldown();

});


leftBtn.addEventListener("click", function () {

    if (!canScroll) return;

    if (mobileMode.matches) {
        mobileScroll(-1);
    } else {
        desktopScroll(-1145.4);
    }

    startCooldown();

});

const produkBox2 = document.getElementById("produkBox2");
const leftBtn2 = document.getElementById("leftBtn2");
const rightBtn2 = document.getElementById("rightBtn2");

const produkItems2 = produkBox2.children;

let currentIndex2 = 0;
let canScroll2 = true;

const mobileMode2 = window.matchMedia("(max-width: 768px)");

function desktopScroll2(amount) {
    produkBox2.scrollLeft += amount;
}

function mobileScroll2(direction) {
    currentIndex2 += direction;

    if (currentIndex2 < 0) {
        currentIndex2 = 0;
    }

    if (currentIndex2 >= produkItems2.length) {
        currentIndex2 = produkItems2.length - 1;
    }

    produkItems2[currentIndex2].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start"
    });
}

function startCooldown2() {
    canScroll = false;

    setTimeout(() => {
        canScroll = true;
    }, 700); // cooldown = 700ms
}


rightBtn2.addEventListener("click", function () {

    if (!canScroll2) return;

    if (mobileMode2.matches) {
        mobileScroll2(1);
    } else {
        desktopScroll2(1145.4);
    }

    startCooldown2();

});


leftBtn2.addEventListener("click", function () {

    if (!canScroll2) return;

    if (mobileMode2.matches) {
        mobileScroll2(-1);
    } else {
        desktopScroll2(-1145.4);
    }

    startCooldown2();

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

const produkBox3 = document.getElementById("produkBox3");
const leftBtn3 = document.getElementById("leftBtn3");
const rightBtn3 = document.getElementById("rightBtn3");

const produkItems3 = produkBox3.children;

let currentIndex3 = 0;
let canScroll3 = true;

const mobileMode3 = window.matchMedia("(max-width: 768px)");

function desktopScroll3(amount) {
    produkBox3.scrollLeft += amount;
}

function mobileScroll3(direction) {
    currentIndex3 += direction;

    if (currentIndex3 < 0) {
        currentIndex3 = 0;
    }

    if (currentIndex3 >= produkItems3.length) {
        currentIndex3 = produkItems3.length - 1;
    }

    produkItems3[currentIndex3].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start"
    });
}

function startCooldown3() {
    canScrol3l = false;

    setTimeout(() => {
        canScroll3 = true;
    }, 700); // cooldown = 700ms
}


rightBtn3.addEventListener("click", function () {

    if (!canScroll3) return;

    if (mobileMode3.matches) {
        mobileScroll3(1);
    } else {
        desktopScroll3(1145.4);
    }

    startCooldown3();

});


leftBtn3.addEventListener("click", function () {

    if (!canScroll3) return;

    if (mobileMode3.matches) {
        mobileScroll3(-1);
    } else {
        desktopScroll3(-1145.4);
    }

    startCooldown3();

});

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
