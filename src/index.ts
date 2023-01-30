import { INavSecondData } from './libs/types';
import { navSecondData } from './seeds/data';

const htmlSelect = document.querySelector('html') as HTMLElement;
/* Nav menu START */
const menuBtn = document.querySelector('.menu--toggler') as HTMLDivElement;
const menuBtnBurger = document.querySelector('.menu--toggler-burger') as HTMLDivElement;
/** Primary nav */
const primaryNavContainer = document.querySelector(
  '.navbar--primary-container'
) as HTMLDivElement;
const secondaryNav = document.querySelector('.navbar--secondary') as HTMLDivElement;
const linksNav = document.querySelector('.nav-links') as HTMLUListElement;
const btnsLinkNav = document.querySelectorAll(
  '.nav-link-btn'
) as NodeListOf<HTMLButtonElement>;
/** Second nav */
const togglerBtnSecondaryNav = document.querySelector(
  '.navbar--secondary-toggler'
) as HTMLButtonElement;
const ulListItems = document.querySelector('.secondary--list-items') as HTMLUListElement;
const ulListLinks = document.querySelector('.secondary--list-links') as HTMLUListElement;

/** Burger Menu **/
let menuOpen = false;

function setPrimaryNavContainer(set: boolean) {
  primaryNavContainer.setAttribute('data-visible', `${set}`);
  menuBtn.setAttribute('aria-expanded', `${set}`);

  menuOpen = set;
  if (set) {
    menuBtn.classList.add('open', 'burger--shadow-active');
  } else {
    menuBtn.classList.remove('open', 'burger--shadow-active');
  }
}

htmlSelect.addEventListener('click', e => {
  const visibilityNavPrimary = primaryNavContainer.getAttribute('data-visible');
  const target = e.target as any;

  if (target === secondaryNav || target === togglerBtnSecondaryNav) return;

  if (menuBtn.contains(target) && visibilityNavPrimary === 'false' && !menuOpen) {
    setPrimaryNavContainer(true);
    secondaryNav.classList.remove('hide');
  } else if (!primaryNavContainer.contains(target) && visibilityNavPrimary === 'true') {
    setPrimaryNavContainer(false);
    secondaryNav.setAttribute('data-visible', 'false');
  }

  /** remove active arrow primary nav: desktop */
  btnsLinkNav.forEach(btn => {
    if (target !== btn && target !== menuBtn && target !== menuBtnBurger)
      btn.classList.remove('active');
  });
});

/** display active arrow primary nav */
linksNav.addEventListener('click', (e: any) => {
  const clicked = e.target.closest('.nav-link-btn');

  if (clicked === null) return;

  if (clicked.classList.contains('active')) {
    clicked.classList.remove('active');
    secondaryNav.setAttribute('data-visible', 'false');
    if (window.innerWidth >= 700) {
      setPrimaryNavContainer(false);
    }
    return;
  }

  btnsLinkNav.forEach(btn => {
    btn.classList.remove('active');
    clicked.classList.add('active');
    secondaryNav.classList.remove('hide');
    secondaryNav.setAttribute('data-visible', 'true');
    setPrimaryNavContainer(true);
  });

  const data = navSecondData.filter(item => item.id === clicked.innerHTML);
  createSecondaryElements(data[0]);
});

/** Close second nav toggler */
togglerBtnSecondaryNav.addEventListener('click', () => {
  secondaryNav.setAttribute('data-visible', 'false');
  btnsLinkNav.forEach(btn => {
    btn.classList.remove('active');
    secondaryNav.classList.remove('hide');
  });
});

/** Create seconda nav element */
const createSecondNavItem = (icon: string, title: string): HTMLLIElement => {
  const li = document.createElement('li');
  const anchor = document.createElement('a');
  const img = document.createElement('img');
  const span = document.createElement('span');

  li.classList.add('secondary--list-item');

  anchor.href = '#';
  anchor.classList.add('secondary--item-link');

  img.classList.add('secondary--item-img');
  img.src = `../../../../assets/images/icon/navbar-secondary/${icon}`;

  span.classList.add('secondary--item-text');
  span.innerHTML = title;

  anchor.appendChild(img);
  anchor.appendChild(span);
  li.appendChild(anchor);
  li.classList.add('fade-out');
  requestAnimationFrame(() => {
    li.classList.remove('fade-out');
  });
  return li;
};

const createsecondNavLink = (href: string, text: string): HTMLLIElement => {
  const li = document.createElement('li');
  const anchor = document.createElement('a');

  li.classList.add('secondary--list-link');
  anchor.href = href;
  anchor.innerHTML = text;

  li.appendChild(anchor);
  li.classList.add('fade-out');
  requestAnimationFrame(() => {
    li.classList.remove('fade-out');
  });
  return li;
};

function createSecondaryElements(data: INavSecondData) {
  togglerBtnSecondaryNav.innerHTML = data.title;

  ulListItems.innerHTML = '';

  data.items.map(item => {
    ulListItems.appendChild(createSecondNavItem(item.icon, item.title));
  });

  ulListLinks.innerHTML = '';
  data.links.map(link => {
    ulListLinks.appendChild(createsecondNavLink(link.href, link.text));
  });
}

/* Nav menu END */
