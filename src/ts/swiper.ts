import './swiper/create-hp-top';
import './swiper/create-hp-hardware';

import {
  sliderParams,
  sliderParamsHardware,
  sliderParamsTop
} from './swiper/swiper-params';
import Swiper from 'swiper';

new Swiper('.section--top-swiper', { ...sliderParams, ...sliderParamsTop });
new Swiper('.section--hardware-swiper', { ...sliderParams, ...sliderParamsHardware });
