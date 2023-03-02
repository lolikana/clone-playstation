import { ISwiperTop } from '../libs/types';
import { swiperTopData } from '../seeds/swiperData';

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
  if (data.classLogo) {
    logo.classList.add(data.classLogo);
  }
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
