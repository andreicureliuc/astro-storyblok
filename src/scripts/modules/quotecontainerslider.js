import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

const quoteContainerSlider = {
  init: function () {
    quoteContainerSlider.set();
  },

  set: () => {
    const quoteslider = document.querySelectorAll(".quotecontainer");
    Array.prototype.forEach.call(quoteslider, (slider) => {
      quoteContainerSlider.initQuoteSlider(slider);
    });
  },

  initQuoteSlider: (slider) => {
    const slideLength = slider.querySelectorAll(".swiper-slide").length;

    if (slideLength > 1) {
      slider.querySelector(".slider-controls").classList.remove("hidden");

      const quoteSlider = new Swiper(
        slider.querySelector(".swiper-container"),
        {
          modules: [Navigation, Pagination],
          observer: true,
          observeParents: true,
          speed: 600,
          direction: "horizontal",
          spaceBetween: 25,
          loop: false,
          slidesPerView: 1,
          autoHeight: true,
          pagination: {
            el: slider.querySelector(".slider-pagination"),
            type: "fraction",
          },
          navigation: {
            nextEl: slider.querySelector(".slider-button-next"),
            prevEl: slider.querySelector(".slider-button-prev"),
          },
        }
      );
    }
  },
};

quoteContainerSlider.init();

export default quoteContainerSlider;
