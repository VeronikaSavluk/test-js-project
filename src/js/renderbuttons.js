import { refs } from './constants';
export default function renderButtons() {
    const buttons = Array(refs.totalPages).fill().map((_, idx) =>
        `<button data-page=${idx}>${idx + 1}</button>`).join(" ");
    refs.buttons.innerHTML = "";
    refs.buttons.insertAdjacentHTML('beforeend', `${buttons}`);
};