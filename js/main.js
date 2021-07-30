// Parallax Header
document.addEventListener("mousemove", prl);
function prl(e) {
  document.querySelectorAll(".prl").forEach(function (move) {
    var move_prl = move.getAttribute("data-prl");
    var x = (e.clientX * move_prl) / 300;
    var y = (e.clientY * move_prl) / 300;
    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}

//Burger
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animation Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 1s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    //Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: false,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: true,
  },
});

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  navigation: true,
  navigationTooltips: [
    "HOME",
    "INTRO",
    "NIKE LEBRON 17",
    "FASHION BRANDS",
    "ABOUT US",
  ],
  onLeave: (origin, destination, direction) => {
    // const section = destination.item;
    // console.log(destination);
    // const link_shop = section.querySelector('.link-shop');
    const tl = new TimelineMax({ delay: 0.5 });

    if (destination.index === 1) {
      // tl.fromTo(link_shop, 1, {y: "50", opacity: 0}, {y: 0, opacity: 1});
      const main_box1 = document.querySelector(".main-box1");
      tl.fromTo(main_box1, 0.5, { x: "50", opacity: 0 }, { x: 0, opacity: 1 });
      const main_box2 = document.querySelector(".main-box2");
      tl.fromTo(main_box2, 0.5, { x: "-50", opacity: 0 }, { x: 0, opacity: 1 });
      const link_shop = document.querySelector(".link-shop");
      tl.fromTo(link_shop, 1, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });
    }
    if (destination.index === 2) {
      // tl.fromTo(link_shop, 1, {y: "50", opacity: 0}, {y: 0, opacity: 1});
      const main_video = document.querySelector(".main-vd-video");
      tl.fromTo(main_video, 1, { x: "50", opacity: 0 }, { x: 0, opacity: 1 });
      const main_txt_h2 = document.querySelector(".main-vd-txt h2");
      tl.fromTo(
        main_txt_h2,
        0.5,
        { y: "-50", opacity: 0 },
        { y: 0, opacity: 1 }
      );
      const main_txt_p = document.querySelector(".main-vd-txt p");
      tl.fromTo(
        main_txt_p,
        0.5,
        { x: "-50", opacity: 0 },
        { x: 0, opacity: 1 }
      );
      const main_txt_a = document.querySelector(".main-vd-txt a");
      tl.fromTo(main_txt_a, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });
    }
    if (destination.index === 3) {
      // tl.fromTo(link_shop, 1, {y: "50", opacity: 0}, {y: 0, opacity: 1});
      const main_fashion_h2 = document.querySelector(".main-fashion-h2 h2");
      tl.fromTo(
        main_fashion_h2,
        1,
        { y: "50", opacity: 0 },
        { y: 0, opacity: 1 }
      );
    }
    if (destination.index === 4) {
      // tl.fromTo(link_shop, 1, {y: "50", opacity: 0}, {y: 0, opacity: 1});
      const main_au_h2 = document.querySelector(".main-au-h2 h2");
      tl.fromTo(main_au_h2, 1, { x: "-100", opacity: 0 }, { x: 0, opacity: 1 });
      const au_content_img1 = document.querySelector(".au-content-img1");
      tl.fromTo(
        au_content_img1,
        1,
        { y: "-100", opacity: 0 },
        { y: 0, opacity: 1 }
      );
      const au_content_img2 = document.querySelector(".au-content-img2");
      tl.fromTo(
        au_content_img2,
        1,
        { y: "50", opacity: 0 },
        { y: 0, opacity: 1 }
      );
      const au_content = document.querySelector(".au-content");
      tl.fromTo(au_content, 1, { x: "-100", opacity: 0 }, { x: 0, opacity: 1 });
    }
  },
});
