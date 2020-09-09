import {createElement, getStatus} from "../utils/utils.js";

const getProfileStatusTemplate = (filters) => {
  const {watched} = filters;
  const status = getStatus(watched);
  return (
    `<section class="header__profile profile">
      <p class="profile__rating">${status}</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};

export default class ProfileStatus {
  constructor(filters) {
    this._filters = filters;
    this._element = null;
  }
  _getTemplate() {
    return getProfileStatusTemplate(this._filters);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this._getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
