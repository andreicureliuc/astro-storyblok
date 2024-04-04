const TabContainer = {
  init: () => {
    TabContainer.switchContent();
    console.log("TabContainer init");
    // TabContainer.activateSpecifiedTab();
  },

  switchContent: () => {
    const tabcontainer = document.querySelectorAll(".tabcontainer");

    if (tabcontainer.length) {
      Array.prototype.forEach.call(tabcontainer, function (tabcontainerItem) {
        const tabs = tabcontainerItem.querySelectorAll(
          ".tabcontainer-block-wrapper .tabcontainer-block"
        );

        Array.prototype.forEach.call(tabs, function (tab) {
          const blockContent = tab.querySelector(".tabcontainer-block-content");

          const blockContentInnerHeight = tab.querySelector(
            ".tabcontainer-block-content-inner"
          ).offsetHeight;

          blockContent.style.maxHeight = "0px";

          tab.addEventListener("click", function () {
            console.log("tab", tab);
            if (tab.classList.contains("active")) {
              tab.classList.remove("active");
              blockContent.style.maxHeight = "0px";
            } else {
              // remove all active states for steps
              Array.prototype.forEach.call(tabs, function (tab) {
                tab.classList.remove("active");
                tab.querySelector(
                  ".tabcontainer-block-content"
                ).style.maxHeight = "0px";
              });

              blockContent.style.maxHeight = blockContentInnerHeight + "px";
              tab.classList.add("active");
            }
          });
        });
      });
    }
  },

  // activateSpecifiedTab: function () {
  //   const tab = document.location.search.match(/tab-id=[\w-]*/);
    
  //   if (tab && tab.length) {
  //     const id = tab[0].split("=")[1];
  //     const element = document.querySelector(`[data-tab-nav-id="${id}"]`);
  //     const mobileElement = document.querySelector(
  //       `[data-tab-content-mobile-id="${id}"]`
  //     );

  //     console.log("element", element);

  //     if (element) {
  //       const clickEvent = new MouseEvent("click", {
  //         view: window,
  //         bubbles: true,
  //         cancelable: false,
  //       });
  //       element.dispatchEvent(clickEvent);
  //     }

  //     if (mobileElement) {
  //       const clickEvent = new MouseEvent("click", {
  //         view: window,
  //         bubbles: true,
  //         cancelable: false,
  //       });
  //       mobileElement.dispatchEvent(clickEvent);
  //     }
  //   }
  // },
};



export default TabContainer;
