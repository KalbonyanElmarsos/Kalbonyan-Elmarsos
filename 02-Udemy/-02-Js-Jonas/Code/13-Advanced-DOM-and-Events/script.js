'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const header = document.querySelector('.header');
const section1 = document.querySelector('#section--1');
const navLink = document.querySelector('.nav__link');
const navLinks = document.querySelector('.nav__links');
const nav = document.querySelector('.nav');
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
const div = document.createElement('div');
div.classList.add('cookie-message');
div.textContent = 'Cookie';
div.innerHTML =
  'We use cookies. <button class="btn btn--close-cookie">Got it!</button';
header.append(div);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    div.remove(); // newer way
    // div.parentElement.removeChild(div); // older way
  });
div.style.backgroundColor = '#37383d';
div.style.width = '120%';

//  --188. Implementing Smooth Scrolling---
btnScrollTo.addEventListener('click', function (e) {
  // section1.style.backgroundColor = 'red';

  const section1Coordinates = section1.getBoundingClientRect();
  // console.log(section1Coordinates);

  const btnScrollCoordinates = e.target.getBoundingClientRect();
  // console.log(btnScrollCoordinates);

  // console.log(window.scrollX, window.scrollY);

  // 1) {old Way} Scrolling method 1 (without smoothing)
  // window.scrollTo(
  //   section1Coordinates.left + window.scrollX,
  //   section1Coordinates.top + window.scrollY
  // );

  // 2)  {old way } Scrolling method 2 (with smoothing)
  // window.scrollTo({
  //   left: section1Coordinates.left + window.scrollX,
  //   top: section1Coordinates.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  // 3) {modern way} scrolling method 3 working only on modern browsers
  section1.scrollIntoView({ behavior: 'smooth' });
});

// ---192. Event Delegation: Implementing Page Navigation ----
//  Page navigation 2 ays
//  1) way 1
// document.querySelectorAll('.nav__link').forEach(link => {
//   link.addEventListener('click', function (event) {
//     event.preventDefault();
//     const sectionId = event.target.getAttribute('href');
//     console.log(sectionId);
//     document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
//   });
// });
//  2) way 2 event delegation
document
  .querySelector('.nav__links')
  .addEventListener('click', function (event) {
    event.preventDefault();

    if (event.target.classList.contains('nav__link')) {
      const sectionID = event.target.getAttribute('href');
      document.querySelector(sectionID).scrollIntoView({ behavior: 'smooth' });
    }
  });

// -- 194. Building a Tabbed Component ---------------
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const operationContent = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
//  - Pad practice
// tabs.forEach(function (tab) {
//   tab.addEventListener('click', function (event) {
//     console.log('tabed');
//   });
// });

// - best practice using event -delegation technique
tabsContainer.addEventListener('click', function (e) {
  const btnTab = e.target.closest('.operations__tab');

  if (!btnTab) return;
  //  == Remove any active tab before the clicked one
  tabs.forEach(function (tab) {
    tab.classList.remove('operations__tab--active');
  });

  //  ==  add active class only for the clicked btn
  btnTab.classList.add('operations__tab--active');

  // == hide the content area for none clicked btns
  tabsContent.forEach(function (content) {
    content.classList.remove('operations__content--active');
  });
  //  == show only the content related to the clicked btn
  document
    .querySelector(`.operations__content--${btnTab.dataset.tab}`)
    .classList.add('operations__content--active');
});

// --195. Passing Arguments to Event Handlers----------------------
// nav.addEventListener('mouseover', function (event) {
//   if (event.target.classList.contains('nav__link')) {
//     navHovering(event, true);
//   }
// });
nav.addEventListener('mouseover', handleHover.bind(0.5));

// nav.addEventListener('mouseout', function (event) {
//   navHovering(event, false);
// });
nav.addEventListener('mouseout', handleHover.bind(1));

function handleHover(e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const links = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    links.forEach(element => {
      if (element !== link) element.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}
// function navHovering(event, isMouseover) {
//   const navLink = event.target;
//   const logo = nav.querySelector('img');
//   const allNavLinks = navLink.closest('.nav').querySelectorAll('.nav__link');

//   if (isMouseover) {
//     allNavLinks.forEach(function (link) {
//       link.style.opacity = 0.5;
//     });
//     logo.style.opacity = 0.5;

//     // do not change the hover link opacity
//     navLink.style.opacity = 1;
//   } else {
//     allNavLinks.forEach(function (link) {
//       link.style.opacity = 1;
//     });
//     logo.style.opacity = 1;
//   }
// }
// -- 196. Implementing a Sticky Navigation: The Scroll Event--------------
/*
const section1Coordinates = section1.getBoundingClientRect();
window.addEventListener('scroll', function () {
  if (window.scrollY > section1Coordinates.top) {
    console.log('true');
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});*/

// -- 197. A Better Way: The Intersection Observer API-------------
// const callback = (entries, observer) => {
//   entries.forEach(entry => console.log(entry));
// };
// const options = { root: null, threshold: [0, 0.2] };
// const observer = new IntersectionObserver(callback, options);
// observer.observe(section1);
const headerHeight = nav.getBoundingClientRect().height;
const callback = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(callback, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});
headerObserver.observe(header);

//  --  198. Revealing Elements on Scroll

const allSections = document.querySelectorAll('.section');
function handleSection(entries, observerObj) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  // for better berformance
  observerObj.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(handleSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden')/////////////////////////////
});
// -- 199. Lazy Loading Images----------------

const imgTargets = document.querySelectorAll('img[data-src]');
const loading = function (entries, observerObj) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  //  Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observerObj.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loading, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imgTargets.forEach(img => imgObserver.observe(img));

// -- 200. Building a Slider Component: Part 1---------------------

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const rightBtn = document.querySelector('.slider__btn--right');
const leftBtn = document.querySelector('.slider__btn--left');
let currentSlide = 0;
let maxSlide = slides.length - 1;

// slider.style.transform = 'scale(0.3) translateX(-800px)';
// slider.style.overflow = 'visible';

slides.forEach(function (slide, index) {
  slide.style.transform = `translateX(${100 * index}%)`;
});

rightBtn.addEventListener('click', nextSlide);

leftBtn.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (event) {
  event.key === 'ArrowRight' && nextSlide();
  event.key === 'ArrowLeft' && prevSlide();
});

//  - helper functions
function goTo(currentSlide) {
  slides.forEach(function (slide, index) {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
}
function nextSlide() {
  if (currentSlide === maxSlide) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goTo(currentSlide);
  activateClickedDot(currentSlide);
}
function prevSlide() {
  if (currentSlide === 0) {
    currentSlide = maxSlide;
  } else {
    currentSlide--;
  }
  goTo(currentSlide);
  activateClickedDot(currentSlide);
}
//  -- Dots ----
const dotsContainer = document.querySelector('.dots');

function dynamicDotsCreating() {
  slides.forEach((_, index) => {
    dotsContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${index}"></button`
    );
  });
}
// dynamicDotsCreating();

dotsContainer.addEventListener('click', function (event) {
  const clickedDot = event.target.dataset.slide;
  if (event.target.classList.contains('dots__dot')) {
    goTo(clickedDot);
    activateClickedDot(clickedDot);
  }
});

function activateClickedDot(currentDot) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));
  document
    .querySelector(`.dots__dot[data-slide="${currentDot}"]`)
    .classList.add('dots__dot--active');
}
function initializeSlider() {
  dynamicDotsCreating();
  activateClickedDot(0);
}
initializeSlider();
//========================================================
//====================Practicing ====================================
// ------------- 186. Selecting, Creating, and Deleting Elements ----------------------------------------------------------
/*
// - Selecting elements
console.log(document.documentElement); // the whole page
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section'); // return a nodelist not an array

console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button'); // return a HTMLCollection
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// - Create && Inserting new html elements
const div = document.createElement('div');
div.classList.add('cookie-message');
div.textContent = 'Cookie';
div.innerHTML =
  'We use cookies. <button class="btn btn--close-cookie">Got it!</button';
header.append(div); // inside header in the bottom
// header.prepend(div); // inside the header in the top
// header.after(div); // outside the header in the bottom
// header.before(div); // outside the header in the top

//  - Delete cookie

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    div.remove(); // newer way
    // div.parentElement.removeChild(div); // older way
  });
*/
// ------------- 187. Styles, Attributes and Classes ----------------------------------------------------------
/*
const header1 = document.querySelector('.header');

const divCookie = document.createElement('div');
divCookie.classList.add('cookie-message');
divCookie.textContent = 'Cookie';
divCookie.innerHTML =
  'We use cookies. <button class="btn btn--close-cookie">Got it!</button';
header1.append(divCookie); // inside header in the bottom
divCookie.style.backgroundColor = '#37383d';
divCookie.style.width = '120%';

console.log(divCookie.style.color); //
console.log(divCookie.style.backgroundColor); //rgb(55, 56, 61)

// - to access computed css properties
// console.log(getComputedStyle(divCookie).color);//rgb(187, 187, 187)
console.log(getComputedStyle(divCookie).height); //47.5px

divCookie.style.height =
  Number.parseFloat(getComputedStyle(divCookie).height, 10) + 30 + 'px';
console.log(divCookie.style.height); // 77.5px

//  Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); //Bankist logo
console.log(logo.src); //http://127.0.0.1:5500/13-Advanced-DOM-and-Events/img/logo.png
console.log(logo.customProperty); //undefined

// - access custom property
console.log(logo.getAttribute(logo.customProperty)); // mahmoud
console.log(logo.setAttribute('name', 'hend')); // create custom property

console.log(logo.src); //http://127.0.0.1:5500/13-Advanced-DOM-and-Events/img/logo.png
console.log(logo.getAttribute('src')); //img/logo.png

// - Access data attributes
console.log(logo.dataset.values); //[1,2,2]

// - manipulate classes
logo.classList.add('class1', 'class2');
logo.classList.remove('class1', 'class2');
logo.classList.toggle('class1', 'class2');
logo.classList.contains('class1', 'class2');

logo.className = 'value'; // dont use as it will override all existing lasses

*/
// ------------- 189. Types of Events and Event Handlers ----------------------------------------------------------
/*
const h1 = document.querySelector('h1');
// 1) adding events method 1
// h1.addEventListener('mouseenter', function(){alert('mouseenter')})

// 2) adding events method 2
h1.onmouseenter = function () {
  alert('mouseenter');
};

// 3) adding events method html attribute

// - Removing eventListener
// h1.removeEventListener('mouseenter', function(){})
*/

// ------------- 191. Event Propagation in Practice ----------------------------------------------------------
/*
const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomNumber(0, 255)},${randomNumber(0, 255)},${randomNumber(
    0,
    255
  )})`;

// section1.style.backgroundColor = randomColor;
navLink.addEventListener('click', function (event) {
  this.style.backgroundColor = randomColor();

  console.log(event.target); //navLink element
  console.log(event.currentTarget); // navLink element
  // - to stop propagation
  // event.stopPropagation();
});

navLinks.addEventListener('click', function (event) {
  this.style.backgroundColor = randomColor();
  console.log(event.target); //navLink element
  console.log(event.currentTarget); // navLinks element
});

nav.addEventListener('click', function (event) {
  this.style.backgroundColor = randomColor();
  console.log(event.target); //navLink element
  console.log(event.currentTarget); // nav element
});
*/

// ------------- 193. DOM Traversing  ----------------------------------------------------------
/*
const h1 = document.querySelector('h1');
// - dive downwards in the DON
console.log(h1.querySelectorAll('.highlight')); // NodeList(2) [span.highlight, span.highlight]
console.log(h1.childNodes); // all child nodes , NodeList(9) [text, comment, text, span.highlight, text, br, text, span.highlight, text]
console.log(h1.children); // HTMLCollection(3) [span.highlight, br, span.highlight]

h1.firstElementChild.color = 'white';
h1.lastElementChild.color = 'orangered';

// - dive upwards{parent} in the DON
console.log(h1.parentNode); //div.header__title
console.log(h1.parentElement); //div.header__title

h1.closest('.header').style.background = 'var(--gradient-secondary';
h1.closest('h1').style.background = 'var(--gradient-primary';

// - dive sideway(siblings)
console.log(h1.previousElementSibling); //null
console.log(h1.nextElementSibling); //HTMLCollection(4) [h1, h4, button.btn--text.btn--scroll-to, img.header__img]

console.log(h1.previousSibling); //#text
console.log(h1.nextSibling); // #text

console.log(h1.parentElement.children); // HTMLCollection(4) [h1, h4, button.btn--text.btn--scroll-to, img.header__img]
[...h1.parentElement.children].forEach(function (child) {
  if (child !== h1) child.style.transform = 'scale(0.5';
});
*/

// ------------- 202. Lifecycle DOM Events ----------------------------------------------------------
/*

document.addEventListener('DOMContentLoaded', function (event) {
  console.log(
    'do something after html&&css loaded, external resources exexcluded'
  );
});

window.addEventListener('load', function () {
  console.log(
    'do something after html&&css loaded and any external resources included'
  );
});
window.addEventListener('beforeunload', function (event) {
  event.preventDefault();
  console.log('do something before closing the tab');
  event.returnValue = '';
});
*/

// ------------- 203. Efficient Script Loading: defer and async ----------------------------------------------------------
// /*

//*/
