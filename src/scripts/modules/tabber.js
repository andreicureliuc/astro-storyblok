import Viewport from "./utility/viewport";

const Tabber = {
  isMediumViewport: false,

  init: () => {
    const tabber = document.querySelectorAll(".tabber");

    if (tabber.length) {
      Viewport.init({
        medium: 1024,
      });

      Tabber.handleResize();

      if (!Viewport.handlers.medium.isCurrentViewport()) {
        Tabber.switchContentMobile();
      } else {
        Tabber.isMediumViewport = true;
        Tabber.switchContentDesktop();
      }

      tabber.forEach((tabberInstance) => {
        const firstTab = tabberInstance.querySelector(".tabber-head li");
        if (firstTab) {
          firstTab.classList.add("active");
          const navId = firstTab.dataset.tabNavId;
          const tabberNavItems =
            tabberInstance.querySelectorAll(".tabber-head li");
          Tabber.switchContent(tabberNavItems, tabberInstance, firstTab, navId);
        }
      });
    }
  },

  handleResize: () => {
    Viewport.handlers.medium.resizeEnd().then((isInViewPort) => {
      if (!isInViewPort) {
        if (Tabber.isMediumViewport === true) {
          Tabber.isMediumViewport = false;
          Tabber.switchContentMobile();
        }
      } else if (Tabber.isMediumViewport === false) {
        Tabber.isMediumViewport = true;
        Tabber.switchContentDesktop();
      }

      Tabber.handleResize();
    });
  },

  switchContentDesktop: () => {
    const tabberList = document.querySelectorAll(".tabber");

    Array.prototype.forEach.call(tabberList, function (tabber) {
      const tabberNavItems = tabber.querySelectorAll(".tabber-head li");

      Array.prototype.forEach.call(tabberNavItems, function (item) {
        const tabNavId = item.dataset.tabNavId;

        item.addEventListener("click", () => {
          Tabber.switchContent(tabberNavItems, tabber, item, tabNavId);
        });
      });
    });
  },

  switchContentMobile: () => {
    const tabberList = document.querySelectorAll(".tabber");

    Array.prototype.forEach.call(tabberList, function (tabber) {
      const tabberNavItems = tabber.querySelectorAll(".tabber-content-mobile");

      Array.prototype.forEach.call(tabberNavItems, function (item) {
        item.addEventListener("click", () => {
          const tabberContentItems = tabber.querySelectorAll(
            ".tabber-content-item"
          );

          Array.prototype.forEach.call(
            tabberContentItems,
            function (contentItem) {
              contentItem.classList.remove("active");
            }
          );

          if (item.classList.contains("active")) {
            item.classList.remove("active");
            item.nextElementSibling.classList.remove("active");
          } else {
            item.nextElementSibling.classList.add("active");
            tabberNavItems.forEach(function (tabberNavItem) {
              tabberNavItem.classList.remove("active");
            });
            item.classList.add("active");
          }
        });
      });
    });
  },

  switchContent: (tabberNavItems, tabber, item, navId) => {
    const tabberContentItems = tabber.querySelectorAll(".tabber-content-item");

    Array.prototype.forEach.call(tabberContentItems, function (contentItem) {
      const tabContentId = contentItem.dataset.tabContentId;

      tabberNavItems.forEach(function (tabberNavItem) {
        tabberNavItem.classList.remove("active");
      });

      item.classList.add("active");

      contentItem.classList.remove("active");

      if (tabContentId === navId) {
        contentItem.classList.add("active");
      }
    });
  },
};

Tabber.init();

export default Tabber;
