import Handler from './handler';

const Viewport = {

  handlers: {},

  init: (mediaQueries) => {
    Object.entries(mediaQueries).forEach(([key, value]) => {
      Viewport.handlers[key] = new Handler(value);
    });
  },
};

export default Viewport;
