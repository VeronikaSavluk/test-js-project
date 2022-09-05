import { refs } from './constants';

export default function renderButtons() {
    const buttons = Array(refs.totalPages).fill().map((_, idx) =>
        `<li><button data-page=${idx}>${idx + 1}</button></li>`).join(" ");
    refs.buttons.innerHTML = "";
    refs.buttons.insertAdjacentHTML('beforeend', `<li><button><<</button></li>${buttons}<li><button>>></button></li>`);
};