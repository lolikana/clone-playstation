import { INavSecondData } from './libs/types';
import { navSecondData } from './seeds/data';

const htmlSelect = document.querySelector('html') as HTMLElement;
/* Nav menu START */
const navbar = document.querySelector('.navbar') as HTMLDivElement;
const menuBtn = document.querySelector('.menu--toggler') as HTMLDivElement;
const menuBtnBurger = document.querySelector('.menu--toggler-burger') as HTMLDivElement;
/** Primary nav */
const primaryNav = document.querySelector('.navbar--primary') as HTMLDivElement;
const secondaryNav = document.querySelector('.navbar--secondary') as HTMLDivElement;
const linksNav = document.querySelector('.nav-links') as HTMLUListElement;
const btnsLinkNav = document.querySelectorAll(
  '.nav-link-btn'
) as NodeListOf<HTMLButtonElement>;
const searchBar = document.querySelector('.navbar--search-icon') as HTMLImageElement;
/** Second nav */
const togglerBtnSecondaryNav = document.querySelector(
  '.navbar--secondary-toggler'
) as HTMLButtonElement;
const ulListItems = document.querySelector('.secondary--list-items') as HTMLUListElement;
const ulListLinks = document.querySelector('.secondary--list-links') as HTMLUListElement;
/** Search bar */
const searchBarToggler = document.querySelector(
  '.primary--search-toggler'
) as HTMLButtonElement;
const searchModal = document.querySelector('.search--modal') as HTMLDivElement;
const searchModalToggler = document.querySelector(
  '.search--modal-toggler'
) as HTMLButtonElement;
const searchSelectPlaceholderBtn = document.querySelector(
  '.search--select-placeholder'
) as HTMLButtonElement;
const searchDropdown = document.querySelector('.search--dropdown') as HTMLDivElement;
const searchSelectInputs = document.querySelectorAll(
  'input[name="search--select-option"]'
) as NodeListOf<HTMLInputElement>;
const searchTextInput = document.querySelector(
  'input[name="search-input"]'
) as HTMLInputElement;

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

  if (
    target === primaryNav ||
    target === secondaryNav ||
    target === ulListItems ||
    target === ulListLinks ||
    target === togglerBtnSecondaryNav ||
    target === searchBar
  )
    return;

  if (menuBtn.contains(target) && visibilityNavPrimary === 'false' && !menuOpen) {
    setPrimaryNav(true);
    secondaryNav.classList.remove('hide');
  } else if (!primaryNav.contains(target) && visibilityNavPrimary === 'true') {
    setPrimaryNav(false);
    if (window.innerWidth >= 700) {
      secondaryNav.setAttribute('data-visible', 'false');
    } else {
      secondaryNav.classList.add('hide');
    }
  }

  btnsLinkNav.forEach(btn => {
    if (
      target !== navbar &&
      target !== btn &&
      target !== menuBtn &&
      target !== menuBtnBurger
    )
      btn.classList.remove('active');
  });

  if (target !== searchSelectPlaceholderBtn) {
    searchSelectPlaceholderBtn.classList.remove('active');
    searchDropdown.classList.remove('show');
    searchSelectPlaceholderBtn.innerHTML = searchSelectPlaceholder[0];
  }
});

/** display active arrow primary nav */
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

/** Create second nav element */
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

/* ----------- Nav menu END ----------- */

/* ----------- Search bar START ----------- */
searchBarToggler.addEventListener('click', () => {
  searchModal.setAttribute('data-visible', 'true');
});

const searchSelectPlaceholder = ['PlayStation.com', 'Sites'];

const selectSearchValue = () => {
  const searchSelectInputChecked = document.querySelector(
    'input[name="search--select-option"]:checked'
  ) as HTMLInputElement;
  const searchSelectValue = searchSelectInputChecked.value;

  searchSelectPlaceholder.shift();
  searchSelectPlaceholder.unshift(searchSelectValue);
};

searchSelectPlaceholderBtn.addEventListener('click', () => {
  searchSelectPlaceholderBtn.classList.toggle('active');
  searchDropdown.classList.toggle('show');

  selectSearchValue();

  if (searchSelectPlaceholderBtn.classList.contains('active')) {
    searchSelectPlaceholderBtn.innerHTML = searchSelectPlaceholder[1];
  } else {
    searchSelectPlaceholderBtn.innerHTML = searchSelectPlaceholder[0];
  }
});

searchSelectInputs.forEach(input =>
  input.addEventListener('change', () => {
    selectSearchValue();
    searchSelectPlaceholderBtn.innerHTML = searchSelectPlaceholder[0];
    searchTextInput.placeholder = `Search ${searchSelectPlaceholder[0]}`;
  })
);

searchModalToggler.addEventListener('click', () => {
  searchModal.setAttribute('data-visible', 'false');
});

/* ----------- Search bar END ----------- */
