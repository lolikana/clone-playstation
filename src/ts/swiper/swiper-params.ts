import Swiper, { Autoplay, EffectFade, Keyboard, SwiperOptions, Thumbs } from 'swiper';
import { swiperHardwareData, swiperTopData } from '../seeds/swiperData';

export const sliderParams: SwiperOptions = {
  modules: [EffectFade, Thumbs],
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  loop: true,
  touchRatio: 0,
  speed: 500
};

export const thumbsParams: SwiperOptions = {
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
  speed: 500
};

/** Slider HP Top **/
const thumsParamsTop: SwiperOptions = {
  breakpoints: {
    700: {
      loop: false,
      centeredSlides: false,
      spaceBetween: 7,
      slidesPerView: swiperTopData.length
    }
  }
};
const galleryTopThumbs = new Swiper('.section--top-thumbnails', {
  ...thumbsParams,
  ...thumsParamsTop
});
export const sliderParamsTop: SwiperOptions = {
  loopedSlides: swiperTopData.length,
  thumbs: {
    swiper: galleryTopThumbs
  }
};

/** Slider HP Hardware **/
const thumsParamsHardware: SwiperOptions = {
  breakpoints: {
    700: {
      loop: false,
      centeredSlides: false,
      spaceBetween: 7,
      slidesPerView: swiperHardwareData.length
    }
  }
};
const galleryHardwareThumbs = new Swiper('.section--hardware-thumbnails', {
  ...thumbsParams,
  ...thumsParamsHardware
});
export const sliderParamsHardware: SwiperOptions = {
  loopedSlides: swiperHardwareData.length,
  thumbs: {
    swiper: galleryHardwareThumbs
  }
};
