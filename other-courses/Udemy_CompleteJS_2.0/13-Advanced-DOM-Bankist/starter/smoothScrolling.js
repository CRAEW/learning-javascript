'use strict';

// Smooth Scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  // Scrolling
  section1.scrollIntoView({ behavior: 'smooth' });
});
