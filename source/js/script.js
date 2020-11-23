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
