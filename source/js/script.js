const burger = document.querySelector('.burger');
const siteList = document.querySelector('.site-list');
const mainNavHeader = document.querySelector('.main-nav__header');
const nav = document.querySelector('.main-nav');

nav.style.background = 'none';

burger.addEventListener('click', function() {
  if (this.classList.contains('burger--active')) {
    this.classList.remove('burger--active');
    siteList.classList.add('site-list--close');
    mainNavHeader.classList.add('main-nav__header--close');
    nav.style.background = 'none';
  } else {
    this.classList.add('burger--active');
    siteList.classList.remove('site-list--close');
    mainNavHeader.classList.remove('main-nav__header--close');
    nav.style.background = '#283645';
  }
})

const form = document.querySelector('.main-form');
const popup = document.querySelectorAll('.popup');
const success = document.querySelector('.popup--ok');
const error = document.querySelector('.popup--error');
const submitButton = document.querySelector('.main-form__btn');

popup.forEach((it) => {
  const popupBtn = it.querySelector('.popup__btn');
  popupBtn.addEventListener('click', function() {
    it.classList.remove('popup--toggle');
  })
})

submitButton.addEventListener('click', (evt)=> {
  const inputValidity = form.querySelectorAll('input');
  const inputs = new Array();

  for (let i = 0; i < inputValidity.length; i++) {
    if (inputValidity[i].hasAttribute('required')) {
      inputs.push(inputValidity[i]);
    }
  }

  for (let i = 0; i < inputs.length; i++) {
    if(inputs[i].value === "") {
      error.classList.add('popup--toggle');
    } else if (inputs[0].value !== "" && inputs[1].value !== "" && inputs[2].value !== "") {
      evt.preventDefault();
      success.classList.add('popup--toggle');
    }
  }
})