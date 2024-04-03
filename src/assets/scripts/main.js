/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 900,
  once: true
});

+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
})();

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector('.header__nav__buttons__menu');
  const closeButton = document.querySelector('.header__nav__buttons__close');
  const menu = document.querySelector('.header__nav__ul');

  menuToggle.addEventListener('click', function () {
    menu.classList.toggle('header__nav__ul--open');
    menuToggle.style.display = 'none';
    closeButton.style.display = 'block';
  });

  closeButton.addEventListener('click', function () {
    menu.classList.remove('header__nav__ul--open');
    menuToggle.style.display = 'block';
    closeButton.style.display = 'none';
  });
});

document.addEventListener("scroll", function () {
  changeStylesHeader();
});

function changeStylesHeader() {
  var header = document.querySelector('.header');
  var scrollPosition = window.scrollY;

  var threshold = 240;

  if (scrollPosition > threshold) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
}