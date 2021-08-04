'use strict';

// Cookiebanner

const header = document.querySelector('.header');
const message = document.createElement('div');

message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies of improved functionality and analytics. <button class ="btn btn--close-cookie">Got it!</button>';

header.append(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

//  Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120vw';
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
