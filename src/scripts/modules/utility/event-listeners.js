const EventListeners = {
  onResizeEnd: (delay = 250) => {
    let resizeTimer;

    return new Promise((resolve) => {
      window.addEventListener('resize', () => {
        if (resizeTimer) {
          window.clearTimeout(resizeTimer);
        }
        resizeTimer = setTimeout(() => {
          resolve();
        }, delay);
      });
    });
  },
};

export default EventListeners;