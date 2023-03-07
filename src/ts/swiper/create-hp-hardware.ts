import { ISwiperHardware } from '../libs/types';
import { swiperHardwareData } from '../seeds/swiperData';

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

  btnMore.classList.add('button', 'button--border', 'button--color-blue');
  btnMore.textContent = data.btn.more.text;
  btnMore.href = data.btn.more.href;
  divBtn.appendChild(btnMore);
  if (data.btn.buy) {
    btnBuy.classList.add('button', 'button--border', 'button--color-orange');
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
