const Counter = {
  init: function () {
    Counter.intersectionObserver();
  },

  intersectionObserver: function () {
    // test if the counter container is in view of the browser window.
    // for research: https://developers.google.com/web/updates/2016/04/intersectionobserver

    const counterObjGroup = document.querySelectorAll(".counter-wrapper"),
      observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
      },
      observer = new IntersectionObserver(
        intersectionCallback,
        observerOptions
      );

    function intersectionCallback(entries) {
      Array.prototype.forEach.call(entries, function (entry) {
        if (entry.intersectionRatio > 0) {
          Counter.animateValue(entry.target);
        }
      });
    }

    Array.prototype.forEach.call(counterObjGroup, function (counterContainer) {
      observer.observe(counterContainer);
    });
  },

  animateValue: function (container) {
    // Selector for the Counter Number
    const objGroup = container.querySelectorAll(".counter-obj");

    if (!container.classList.contains("active")) {
      // Doing this Call for every Counter Element
      Array.prototype.forEach.call(objGroup, function (el) {
        // Counter Single Selector, Start Number (0), End Number (get this from data-attr in selector, duration (time in ms for doing the transition)
        const counter = el,
          startNumber = 0,
          endNumber =
            el.getAttribute("data-counter-value") !== null
              ? parseInt(el.getAttribute("data-counter-value"), 10)
              : 0,
          preSign = el.getAttribute("data-counter-presign"),
          duration = 3000;

        const range = endNumber - startNumber,
          minTimer = 50;
        let stepTime = Math.abs(Math.floor(duration / range));

        stepTime = Math.max(stepTime, minTimer);

        const startTime = new Date().getTime(),
          endTime = startTime + duration;
        let timer;

        function run() {
          const now = new Date().getTime(),
            remaining = Math.max((endTime - now) / duration, 0),
            value = Math.round(endNumber - remaining * range);

          counter.innerHTML =
            preSign !== null && preSign.length ? value + "" + preSign : value;

          if (value === endNumber) {
            clearInterval(timer);
          }
        }

        timer = setInterval(run, stepTime);
        run();
      });

      container.classList.add("active");
    }
  },
};

Counter.init();

export default Counter;
