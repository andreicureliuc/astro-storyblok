import Viewport from "./utility/viewport";

const StepContainer = {
  isMediumViewport: false,

  init: () => {
    const stepContainer = document.querySelectorAll(".stepcontainer");
    if (stepContainer.length) {
      Viewport.init({
        medium: 1024,
      });

      StepContainer.handleResize();

      if (!Viewport.handlers.medium.isCurrentViewport()) {
        StepContainer.stepContainerSwitchContentMobile();
      } else {
        StepContainer.isMediumViewport = true;
        StepContainer.stepContainerSwitchContent();
      }
    }
  },

  handleResize: () => {
    Viewport.handlers.medium.resizeEnd().then((isInViewPort) => {
      if (!isInViewPort) {
        if (StepContainer.isMediumViewport === true) {
          StepContainer.isMediumViewport = false;
          StepContainer.stepContainerSwitchContentMobile();
        }
      } else if (StepContainer.isMediumViewport === false) {
        StepContainer.isMediumViewport = true;
        StepContainer.stepContainerSwitchContent();
      }

      StepContainer.handleResize();
    });
  },

  stepContainerSwitchContent: () => {
    const stepContainerContainerList =
      document.querySelectorAll(".stepcontainer");

    if (stepContainerContainerList.length) {
      Array.prototype.forEach.call(
        stepContainerContainerList,
        function (container) {
          const steps = container.querySelectorAll(
              ".stepcontainer-block-wrapper .stepcontainer-block"
            ),
            images = container.querySelectorAll(
              ".stepcontainer-image-wrapper .stepcontainer-image"
            );

          Array.prototype.forEach.call(steps, function (step) {
            const blockContent = step.querySelector(
              ".stepcontainer-block-content"
            );
            const stepHead = step.querySelector(".stepcontainer-block-head");
            const blockContentInnerHeight = step.querySelector(
              ".stepcontainer-block-content-inner"
            ).offsetHeight;
            blockContent.style.maxHeight = "0px";

            if (step.classList.contains("first")) {
              step.classList.add("active");

              Array.prototype.forEach.call(images, function (image) {
                image.classList.remove("active");
                if (
                  image.getAttribute("data-image-step-block") ===
                  step.getAttribute("data-step-block")
                ) {
                  image.classList.add("active");
                }
              });
              blockContent.style.maxHeight = blockContentInnerHeight + "px";
            }

            stepHead.onclick = function (event) {
              event.preventDefault();

              if (step.classList.contains("active")) {
                step.classList.remove("active");
                blockContent.style.maxHeight = "0px";
              } else {
                // remove all active states for steps
                Array.prototype.forEach.call(steps, function (step) {
                  step.classList.remove("active");
                  step.querySelector(
                    ".stepcontainer-block-content"
                  ).style.maxHeight = "0px";
                });
                blockContent.style.maxHeight = blockContentInnerHeight + "px";
                step.classList.add("active");
              }

              // set step container image as active
              Array.prototype.forEach.call(images, function (image) {
                image.classList.remove("active");
                if (
                  image.getAttribute("data-image-step-block") ===
                  step.getAttribute("data-step-block")
                ) {
                  image.classList.add("active");
                }
              });
            };
          });
        }
      );
    }
  },

  stepContainerSwitchContentMobile: () => {
    const stepContainerContainerList =
      document.querySelectorAll(".stepcontainer");

    if (stepContainerContainerList.length) {
      Array.prototype.forEach.call(
        stepContainerContainerList,
        function (container) {
          const steps = container.querySelectorAll(
              ".stepcontainer-block-wrapper .stepcontainer-block"
            ),
            images = container.querySelectorAll(
              ".stepcontainer-image-wrapper .stepcontainer-image"
            ),
            stepCounterList = container.querySelectorAll(
              ".stepcontainer-counter-container .stepcontainer-counter-block"
            );

          if (stepCounterList.length) {
            Array.prototype.forEach.call(
              stepCounterList,
              function (stepCounter) {
                stepCounter.onclick = function (e) {
                  e.preventDefault();

                  // remove active steps
                  Array.prototype.forEach.call(
                    stepCounterList,
                    function (counter) {
                      counter.classList.remove("active");
                    }
                  );

                  // set clicked step counter item as 'active'
                  stepCounter.classList.add("active");

                  // set active step image
                  Array.prototype.forEach.call(images, function (image) {
                    image.classList.remove("active");
                    if (
                      image.getAttribute("data-image-step-block") ===
                      stepCounter.getAttribute("data-step-counter")
                    ) {
                      image.classList.add("active");
                    }
                  });

                  // set active step block
                  Array.prototype.forEach.call(steps, function (step) {
                    step.classList.remove("active");
                    if (
                      step.getAttribute("data-step-block") ===
                      stepCounter.getAttribute("data-step-counter")
                    ) {
                      step.classList.add("active");
                    }
                  });
                };
              }
            );
          }
        }
      );
    }
  },
};

StepContainer.init();

export default StepContainer;
