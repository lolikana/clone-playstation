import { navSecondData } from './seeds/data';

const htmlSelect = document.querySelector('html') as HTMLElement;
/* Nav menu START */
const menuBtn = document.querySelector('.menu--toggler') as HTMLDivElement;
const menuBtnBurger = document.querySelector('.menu--toggler-burger') as HTMLDivElement;
const primaryNav = document.querySelector('.navbar--primary') as HTMLDivElement;
const secondaryNav = document.querySelector('.navbar--secondary') as HTMLDivElement;
const linksNav = document.querySelector('.nav-links') as HTMLUListElement;
const btnsLinkNav = document.querySelectorAll(
  '.nav-link-btn'
) as NodeListOf<HTMLButtonElement>;
const togglerBtnSecondaryNav = document.querySelector(
  '.navbar--secondary-toggler'
) as HTMLButtonElement;

console.log(navSecondData);

/** Burger Menu **/
let menuOpen = false;

function setPrimaryNav(set: boolean) {
  primaryNav.setAttribute('data-visible', `${set}`);
  menuBtn.setAttribute('aria-expanded', `${set}`);

  menuOpen = set;
  if (set) {
    menuBtn.classList.add('open', 'burger--shadow-active');
  } else {
    menuBtn.classList.remove('open', 'burger--shadow-active');
  }
}

htmlSelect.addEventListener('click', e => {
  const visibilityNavPrimary = primaryNav.getAttribute('data-visible');
  const target = e.target as any;

  if (target === secondaryNav || target === togglerBtnSecondaryNav) return;

  if (menuBtn.contains(target) && visibilityNavPrimary === 'false' && !menuOpen) {
    setPrimaryNav(true);
    secondaryNav.classList.remove('hide');
  } else if (!primaryNav.contains(target) && visibilityNavPrimary === 'true') {
    setPrimaryNav(false);
    secondaryNav.setAttribute('data-visible', 'false');
  }

  /** remove active arrow */
  btnsLinkNav.forEach(btn => {
    if (target !== btn && target !== menuBtn && target !== menuBtnBurger)
      btn.classList.remove('active');
  });
});

/** display active arrow */
linksNav.addEventListener('click', (e: any) => {
  const clicked = e.target.closest('.nav-link-btn');

  if (clicked === null) return;

  if (clicked.classList.contains('active')) {
    clicked.classList.remove('active');
    secondaryNav.setAttribute('data-visible', 'false');
    if (window.innerWidth >= 700) {
      setPrimaryNav(false);
    }
    return;
  }

  btnsLinkNav.forEach(btn => {
    btn.classList.remove('active');
    clicked.classList.add('active');
    secondaryNav.classList.remove('hide');
    secondaryNav.setAttribute('data-visible', 'true');
    setPrimaryNav(true);
  });
});

togglerBtnSecondaryNav.addEventListener('click', () => {
  secondaryNav.setAttribute('data-visible', 'false');
  btnsLinkNav.forEach(btn => {
    btn.classList.remove('active');
    secondaryNav.classList.remove('hide');
  });
});
/* Nav menu END */
