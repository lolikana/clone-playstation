import Swiper, {
  Autoplay,
  Controller,
  EffectFade,
  Keyboard,
  SwiperOptions
} from 'swiper';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';
import 'swiper/css';

const thumbsParams: SwiperOptions = {
  modules: [Keyboard, Autoplay, Controller],
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 5,
  centeredSlides: true,
  slideToClickedSlide: true,
  grabCursor: true,
  watchSlidesProgress: true,
  keyboard: true,
  breakpoints: {
    700: {
      slidesPerView: 7,
      centeredSlides: false,
      spaceBetween: 7
    }
  },
  autoplay: {
    delay: 3000,
    stopOnLastSlide: true,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
    waitForTransition: true
  },
  speed: 500
};

const galleryTopThumbs = new Swiper('.section--top-thumbnails', thumbsParams);

const sliderParams: SwiperOptions = {
  modules: [EffectFade, Controller],
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  loop: true,
  loopedSlides: 6,
  controller: {
    control: galleryTopThumbs
  },
  speed: 500
};

const slider = new Swiper('.section--top-swiper', sliderParams);
galleryTopThumbs.controller.control = slider;

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
