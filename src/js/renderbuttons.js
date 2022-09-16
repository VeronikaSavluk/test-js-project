import Pagination from 'tui-pagination';

import 'tui-pagination/dist/tui-pagination.min.css';

import { refs } from './constants';

export default function renderButtons() {
    // const buttons = Array(refs.totalPages).fill().map((_, idx) =>
    //     `<button class="page__button" data-page=${idx}>${idx + 1}</button>`).join(" ");
    // refs.buttons.innerHTML = "";
    // refs.buttons.insertAdjacentHTML('beforeend', `${buttons}`);
    const options = {
    totalItems: refs.totalPages * 10,
    itemsPerPage: 10,
    visiblePages: 5,
    centerAlign: true
}
    const pagination = new Pagination(refs.buttons, options);
};