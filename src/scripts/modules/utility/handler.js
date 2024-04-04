import EventListeners from './event-listeners';

class Handler {
  constructor(width) {
    this.width = width;
    this.isViewport = false;
  }

  isCurrentViewport() {
    return window.innerWidth >= this.width;
  }

  resizeEnd() {
    return new Promise((resolve) => {
      EventListeners.onResizeEnd().then(() => {
        this.isViewPort = this.isCurrentViewport();
        resolve(this.isViewPort);
      });
    });
  }
}

export default Handler;