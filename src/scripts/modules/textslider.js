import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

const TextSlider = {
  init: function () {
    TextSlider.set();
  },

  set: () => {
    const textslider = document.querySelectorAll(".textslider");
    Array.prototype.forEach.call(textslider, (slider) => {
      TextSlider.initTextSlider(slider);
    });
  },

  initTextSlider: (slider) => {
    let slidesWidth;

    if (!slider.classList.contains("textslider-long")) {
      slidesWidth = 560;
    }

    const textslider = new Swiper(slider.querySelector(".swiper-container"), {
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      speed: 600,
      direction: "horizontal",
      spaceBetween: 25,
      loop: false,
      pagination: {
        el: slider.querySelector(".slider-pagination"),
        type: "fraction",
      },
      navigation: {
        nextEl: slider.querySelector(".slider-button-next"),
        prevEl: slider.querySelector(".slider-button-prev"),
      },
      breakpoints: {
        // when window width is >= 768px
        768: {
          width: slidesWidth,
          slidesPerView: 1,
          spaceBetween: 50,
        },
        320: {
          slidesPerView: 1.1,
        },
      },
    });
  },
};

TextSlider.init();

export default TextSlider;
