/* Мобильная навигация */

let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let navMainWrapper = document.querySelector('.main-nav__wrapper');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navMainWrapper.style.display = "block";
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navMainWrapper.style.display = "none";
  }
});

let navNoJs = document.querySelector('.main-nav--no-js');
let mainNavList = document.querySelector('.main-nav__list');

if (navMain.classList.contains('main-nav--no-js')) {
  navMainWrapper.style.display = "block";
  navToggle.style.display = "none";
}

/* Карта */

let center = [59.93861491380169,30.323047228835982];

function init() {
  let map = new ymaps.Map('map', {
    center: center,
    zoom: 15
  });

  let placemark = new ymaps.Placemark(center, {}, {
    iconLayout: 'default#image',
    iconImageHref: '',
    iconImageSize: [57, 53],
    iconImageOffset: [1, 1]
  });

  map.controls.remove("geolocationControl");
  map.controls.remove("searchControl");
  map.controls.remove("trafficControl");
  map.controls.remove("typeSelector");
  map.controls.remove("fullscreenControl");
  map.controls.remove("zoomControl");
  map.controls.remove("rulerControl");
  map.geoObjects.add(placemark);
}

ymaps.ready(init);
