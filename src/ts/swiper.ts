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

const galleryThumbs = new Swiper('.mySwiperThumbs', thumbsParams);

const sliderParams: SwiperOptions = {
  modules: [Thumbs, EffectFade, Controller, Autoplay],
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
