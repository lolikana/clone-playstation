import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';

import { ISwiperHardware, ISwiperTop } from './libs/types';
import Swiper, { Autoplay, EffectFade, Keyboard, SwiperOptions, Thumbs } from 'swiper';
import { swiperHardwareData, swiperTopData } from './seeds/swiperData';

const createTopSlide = (data: ISwiperTop) => {
  const divSlide = document.createElement('div');
  const picture = document.createElement('picture');
  const sourceLarge = document.createElement('source');
  const sourceMedium = document.createElement('source');
  const imgTop = document.createElement('img');
  const anchor = document.createElement('a');

  const divDesc = document.createElement('div');
  const logo = document.createElement('img');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const divBtn = document.createElement('div');
  const btn = document.createElement('a');

  sourceLarge.media = '(min-width:1024px)';
  sourceLarge.srcset = data.img.large;

  sourceMedium.media = '(min-width:700px)';
  sourceMedium.srcset = data.img.medium;

  imgTop.classList.add('slide-img');
  imgTop.src = data.img.mobile;
  imgTop.alt = `${data.alt} image slide`;
  imgTop.loading = 'lazy';

  picture.append(sourceLarge, sourceMedium, imgTop);

  anchor.classList.add('slide-link');
  anchor.href = '#';

  divDesc.classList.add('slide-desc');

  logo.classList.add('slide-logo');
  logo.src = data.logo;
  logo.alt = `${data.alt} logo`;
  logo.loading = 'lazy';

  h1.classList.add('slide-title');
  h1.textContent = data.title;

  p.classList.add('slide-text');
  p.textContent = data.text;

  divBtn.classList.add('slide-btn');

  btn.classList.add('button--link', 'white');
  btn.textContent = data.btn.text;
  btn.href = data.btn.href;
  divBtn.appendChild(btn);

  const divLazy = document.createElement('div');
  divLazy.classList.add('swiper-lazy-preloader', 'swiper-lazy-preloader-white');

  divDesc.append(logo, h1, p, divBtn);

  divSlide.classList.add('swiper-slide', 'section--top-slide');
  divSlide.append(picture, anchor, divDesc, divLazy);

  return divSlide;
};

function createTopThumbs(data: ISwiperTop) {
  const div = document.createElement('div');
  const img = document.createElement('img');

  img.classList.add('section--thumbnail-img');
  img.src = data.img.thumb;
  img.alt = `${data.alt} thumbnail slide`;
  img.loading = 'lazy';

  const divLazy = document.createElement('div');
  divLazy.classList.add('swiper-lazy-preloader', 'swiper-lazy-preloader-white');

  div.classList.add('swiper-slide', 'section--thumbnail-slide', 'top--thumbnail-slide');
  div.append(divLazy, img);

  return div;
}

const sectionTopWrapper = document.querySelector(
  '.section--top-wrapper'
) as HTMLDivElement;
const sectionTopThumbsWrapper = document.querySelector(
  '.top--thumbnail-wrapper'
) as HTMLDivElement;

swiperTopData.map(data => {
  sectionTopWrapper.appendChild(createTopSlide(data));
  sectionTopThumbsWrapper.appendChild(createTopThumbs(data));
});

/** Create Section Hardware Slider */
const createHardwareSlide = (data: ISwiperHardware) => {
  const divSlide = document.createElement('div');
  const divContainer = document.createElement('div');

  const imgTop = document.createElement('img');

  const divDesc = document.createElement('div');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const divBtn = document.createElement('div');
  const btnMore = document.createElement('a');
  const btnBuy = document.createElement('a');

  imgTop.classList.add('slide-img');
  imgTop.src = data.img;
  imgTop.alt = `${data.alt} image slide`;
  imgTop.loading = 'lazy';

  divDesc.classList.add('slide--hardware-desc');

  h1.classList.add('slide-title');
  h1.textContent = data.title;

  p.classList.add('slide-text');
  p.textContent = data.text;

  divBtn.classList.add('slide-btn');

  btnMore.classList.add('button--link', 'blue');
  btnMore.textContent = data.btn.more.text;
  btnMore.href = data.btn.more.href;
  divBtn.appendChild(btnMore);
  if (data.btn.buy) {
    btnBuy.classList.add('button--link', 'orange');
    btnBuy.textContent = data.btn.buy.text;
    btnBuy.href = data.btn.buy.href;
    divBtn.appendChild(btnBuy);
  }

  const divLazy = document.createElement('div');
  divLazy.classList.add('swiper-lazy-preloader', 'swiper-lazy-preloader-white');

  divDesc.append(h1, p, divBtn);

  divSlide.classList.add('swiper-slide', 'section--hardware-slide');
  divContainer.classList.add('section--hardware-content');
  divContainer.append(imgTop, divDesc, divLazy);
  divSlide.appendChild(divContainer);
  return divSlide;
};

function createHardwareThumbs(data: ISwiperHardware) {
  const div = document.createElement('div');
  const divContainer = document.createElement('div');
  const img = document.createElement('img');
  const p = document.createElement('p');

  img.classList.add('section--thumbnail-img');
  img.src = data.img;
  img.alt = `${data.alt} thumbnail slide`;
  img.loading = 'lazy';

  p.textContent = data.alt;

  const divLazy = document.createElement('div');
  divLazy.classList.add('swiper-lazy-preloader', 'swiper-lazy-preloader-white');

  divContainer.classList.add('section--hardware-content');
  divContainer.append(img, p);
  div.classList.add(
    'swiper-slide',
    'section--thumbnail-slide',
    'hardware--thumbnail-slide'
  );
  div.append(divContainer);

  return div;
}

const sectionHardwareWrapper = document.querySelector(
  '.section--hardware-wrapper'
) as HTMLDivElement;
const sectionHardwareThumbsWrapper = document.querySelector(
  '.hardware--thumbnail-wrapper'
) as HTMLDivElement;

swiperHardwareData.map(data => {
  sectionHardwareWrapper.appendChild(createHardwareSlide(data));
  sectionHardwareThumbsWrapper.appendChild(createHardwareThumbs(data));
});

/** Swiper Top Section Parameters */
const thumbsParams: SwiperOptions = {
  modules: [Keyboard, Autoplay],
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: '2%',
  centeredSlides: true,
  slideToClickedSlide: true,
  grabCursor: true,
  watchSlidesProgress: true,
  keyboard: true,
  autoplay: {
    delay: 3000,
    stopOnLastSlide: true,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
    waitForTransition: true
  },
  breakpoints: {
    700: {
      loop: false,
      centeredSlides: false,
      spaceBetween: 7
    }
  },
  speed: 500
};
const thumsParamsTop: SwiperOptions = {
  breakpoints: {
    700: {
      slidesPerView: swiperTopData.length
    }
  }
};
const thumsParamsHardware: SwiperOptions = {
  breakpoints: {
    700: {
      slidesPerView: swiperHardwareData.length
    }
  }
};

const galleryTopThumbs = new Swiper('.section--top-thumbnails', {
  ...thumbsParams,
  ...thumsParamsTop
});
const galleryHardwareThumbs = new Swiper('.section--hardware-thumbnails', {
  ...thumbsParams,
  ...thumsParamsHardware
});

const sliderParams: SwiperOptions = {
  modules: [EffectFade, Thumbs],
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  loop: true,
  touchRatio: 0,
  speed: 500
};

const sliderParamsTop: SwiperOptions = {
  loopedSlides: swiperTopData.length,
  thumbs: {
    swiper: galleryTopThumbs
  }
};
const sliderParamsHardware: SwiperOptions = {
  loopedSlides: swiperHardwareData.length,
  thumbs: {
    swiper: galleryHardwareThumbs
  }
};
new Swiper('.section--top-swiper', { ...sliderParams, ...sliderParamsTop });
new Swiper('.section--hardware-swiper', { ...sliderParams, ...sliderParamsHardware });
