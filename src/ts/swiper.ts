import Swiper, { Controller, EffectFade, Keyboard, SwiperOptions, Thumbs } from 'swiper';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';
import 'swiper/css';

const thumbsParams: SwiperOptions = {
  modules: [Keyboard, Controller],
  loop: true,
  spaceBetween: '2%',
  slidesPerView: 'auto',
  centeredSlides: true,
  slideToClickedSlide: true,
  grabCursor: true,
  watchSlidesProgress: true,
  keyboard: true
};

const galleryThumbs = new Swiper('.mySwiperThumbs', thumbsParams);

const sliderParams: SwiperOptions = {
  modules: [Thumbs, EffectFade, Controller],
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  loop: true,
  thumbs: {
    swiper: galleryThumbs
  },
  speed: 500
};

new Swiper('.mySwiper', sliderParams);

// const slider = new Swiper('.mySwiper2', sliderParams);

// galleryThumbs.controller.control = slider;
// slider.controller.control = galleryThumbs;
