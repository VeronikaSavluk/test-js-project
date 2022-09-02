import { refs } from './js/constants';
import renderButtons from './js/renderbuttons';

renderButtons();
refs.buttons.addEventListener("click", onButtonClick);
function onButtonClick(e) {
    refs.page = e.target.dataset.page;
};