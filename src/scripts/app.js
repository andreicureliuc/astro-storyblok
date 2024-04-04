import Counter from './modules/counter';
import quoteContainerSlider from './modules/quotecontainerslider';
import StepContainer from './modules/stepcontainer';
import Tabber from './modules/tabber';
import TabContainer from './modules/tabcontainer';
import TextSlider from './modules/textslider';

function pageReady(callback) {
  if (document.readyState !== 'loading') {
    callback();
  } else document.addEventListener('DOMContentLoaded', callback);
}

pageReady(() => {
  Counter.init();
  quoteContainerSlider.init();
  StepContainer.init();
  Tabber.init();
  TabContainer.init();
  TextSlider.init();
});