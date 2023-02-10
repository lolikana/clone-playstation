import Swiper, {
  Autoplay,
  Controller,
  EffectFade,
  Keyboard,
  SwiperOptions,
  Thumbs
} from 'swiper';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';
import 'swiper/css';

const thumbsParams: SwiperOptions = {
  modules: [Keyboard, Controller, Autoplay],
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: '2%',
  centeredSlides: true,
  breakpoints: {
    700: {
      slidesPerView: 7,
      centeredSlides: false,
      spaceBetween: 7
    }
  },
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
  }
};

const galleryTopThumbs = new Swiper('.section--top-thumbnails', thumbsParams);

const sliderParams: SwiperOptions = {
  modules: [Thumbs, EffectFade, Controller, Autoplay],
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  loop: true,
  thumbs: {
    swiper: galleryTopThumbs
  },
  speed: 500
};

new Swiper('.section--top-swiper', sliderParams);

// const slider = new Swiper('.mySwiper2', sliderParams);

// galleryThumbs.controller.control = slider;
// slider.controller.control = galleryThumbs;

// const topSectionSlide = () => {
//   const div = document.createElement('div');
//   const picture = document.createElement('picture');
//   const sourceLarge = document.createElement('source');
//   const sourceMedium = document.createElement('source');
//   const imgTop = document.createElement('img');
//   const imgLogo = document.createElement('img');

//   const anchor = document.createElement('a');
//   const h1 = document.createElement('h1');
//   const p = document.createElement('p');
// };
