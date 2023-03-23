import './ts/libs/import.ts';

import { INavSecondData } from './ts/libs/types';
import { navSecondData } from './ts/seeds/data';

const htmlSelect = document.querySelector('html') as HTMLElement;
/* Nav menu START */
const navbar = document.querySelector('.navbar') as HTMLDivElement;
const menuBtn = document.querySelector('.menu--toggler') as HTMLDivElement;
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

window.onscroll = function () {
  setStickyNav();
};

const nav = document.getElementsByTagName('nav')[0] as HTMLElement;
const sticky = nav.offsetTop;

function setStickyNav() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}

/* Burger Menu */
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
  const target = e.target as HTMLElement;
  if (
    target === primaryNav ||
    target === secondaryNav ||
    target === ulListItems ||
    target === ulListLinks ||
    target === togglerBtnSecondaryNav ||
    target === searchBar ||
    target === searchModal
  )
    return;

  if (menuBtn.contains(target) && visibilityNavPrimary === 'false' && !menuOpen) {
    setPrimaryNav(true);
  } else if (
    (!primaryNav.contains(target) && visibilityNavPrimary === 'true') ||
    target === navbar
  ) {
    setPrimaryNav(false);
    secondaryNav.setAttribute('data-visible', 'false');
    btnsLinkNav.forEach(btn => {
      btn.classList.remove('active');
    });
  }

  /** Close dropwdown when select option **/
  if (target !== searchSelectPlaceholderBtn) {
    searchSelectPlaceholderBtn.classList.remove('active');
    searchDropdown.classList.remove('show');
    searchSelectPlaceholderBtn.innerHTML = searchSelectPlaceholder[0];
  }
});

/* display active arrow primary nav (desktop) */
linksNav.addEventListener('click', (e: Event) => {
  const clicked = (e.target as HTMLElement).closest('.nav-link-btn');
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

    secondaryNav.setAttribute('data-visible', 'true');
    setPrimaryNav(true);
  });

  /** display second nav bar data **/
  const data = navSecondData.filter(item => item.id === clicked.innerHTML);
  createSecondaryElements(data[0]);
});

togglerBtnSecondaryNav.addEventListener('click', () => {
  secondaryNav.setAttribute('data-visible', 'false');
  btnsLinkNav.forEach(btn => {
    btn.classList.remove('active');
  });
});

/* Create second nav element */
const createSecondNavItem = (icon: string, title: string): HTMLLIElement => {
  const li = document.createElement('li');
  const anchor = document.createElement('a');
  const img = document.createElement('img');
  const span = document.createElement('span');
  li.classList.add('secondary--list-item');
  anchor.href = '#';
  anchor.classList.add('secondary--item-link');

  img.classList.add('secondary--item-img');
  img.src = icon;

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

function closeSearchModal() {
  searchSelectPlaceholderBtn.classList.remove('active');
  searchDropdown.classList.remove('show');
  searchModal.setAttribute('data-visible', 'false');
  searchSelectPlaceholderBtn.innerHTML = searchSelectPlaceholder[0];
}

searchModal.addEventListener('click', e => {
  const target = e.target;
  if (searchModal !== target) return;
  closeSearchModal();
});
/* ----------- Search bar END ----------- */

/* ----------- Reveal Text Section Random Game START ----------- */
const sectionRandomGameDesc = document.querySelector(
  '.section--randomGame-slide'
) as HTMLDivElement;
const sectionRevealRandomGameDesc = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.add('random-slide-active');
  observer.unobserve(entry.target);
};

const sectionRandomGameObserver = new IntersectionObserver(sectionRevealRandomGameDesc, {
  root: null,
  threshold: 0.15
});
sectionRandomGameDesc.classList.remove('random-slide-active');
sectionRandomGameObserver.observe(sectionRandomGameDesc);
/* ----------- Reveal Text Section Random Game END ----------- */

/* ----------- List Games Slider START ----------- */
const listGamesBtnLeft = document.querySelector(
  '.listGames--navigation-left'
) as HTMLButtonElement;
const listGamesBtnRight = document.querySelector(
  '.listGames--navigation-right'
) as HTMLButtonElement;
const listGamesMain = document.querySelector(
  '.listGames--container:nth-child(2)'
) as HTMLDivElement;
const listGamesSecond = document.querySelector(
  '.listGames--container:nth-child(3)'
) as HTMLDivElement;

const checkDataSlide = () => {
  if (listGamesMain.dataset.slide === '2' && listGamesSecond.dataset.slide === '1') {
    listGamesMain.dataset.slide = '1';
    listGamesSecond.dataset.slide = '2';
  } else {
    listGamesMain.dataset.slide = '2';
    listGamesSecond.dataset.slide = '1';
  }
};

const addClassSlide = (direction: string) => {
  if (direction == 'left') {
    if (listGamesMain.dataset.slide === '2') {
      listGamesMain.classList.add('leftOut');
      listGamesSecond.classList.add('leftIn');
    } else {
      listGamesMain.classList.add('leftIn');
      listGamesSecond.classList.add('leftOut');
    }
  } else {
    if (listGamesMain.dataset.slide === '1') {
      listGamesMain.classList.add('rightOut');
      listGamesSecond.classList.add('rightIn');
    } else {
      listGamesMain.classList.add('rightIn');
      listGamesSecond.classList.add('rightOut');
    }
  }
};

const removeSlideAnimation = () => {
  listGamesMain.classList.remove('leftIn');
  listGamesMain.classList.remove('leftOut');
  listGamesSecond.classList.remove('leftIn');
  listGamesSecond.classList.remove('leftOut');
  listGamesMain.classList.remove('rightIn');
  listGamesMain.classList.remove('rightOut');
  listGamesSecond.classList.remove('rightIn');
  listGamesSecond.classList.remove('rightOut');
};

listGamesBtnLeft.addEventListener('click', () => {
  removeSlideAnimation();
  checkDataSlide();
  addClassSlide('left');
});

listGamesBtnRight.addEventListener('click', () => {
  removeSlideAnimation();
  checkDataSlide();
  addClassSlide('right');
});

/* ----------- List Games Slider END ----------- */

/* ----------- Footer Category Accordion START ----------- */
class Accordion {
  rootEl: HTMLElement;
  buttonEl: HTMLButtonElement;
  contentEl: HTMLElement;
  contentElLi: NodeListOf<HTMLElement>;
  isOpen: boolean;
  constructor(domNode: HTMLElement) {
    this.rootEl = domNode;
    this.buttonEl = this.rootEl.querySelector(
      '.footer--category-btn'
    ) as HTMLButtonElement;

    const controlsId = this.buttonEl.getAttribute('aria-controls') as string;
    this.contentEl = document.getElementById(controlsId) as HTMLElement;
    this.contentElLi = document.querySelectorAll(
      `#${this.contentEl.id} > li`
    ) as NodeListOf<HTMLElement>;
    this.isOpen = this.buttonEl.getAttribute('aria-expanded') === 'true';

    // add event listeners
    this.buttonEl.addEventListener('click', this.onButtonClick.bind(this));
  }

  onButtonClick() {
    this.toggle(!this.isOpen);
  }

  toggle(isOpen: boolean) {
    // don't do anything if the open state doesn't change
    if (isOpen === this.isOpen) {
      return;
    }

    // update the internal state
    this.isOpen = isOpen;

    // handle DOM updates
    this.buttonEl.setAttribute('aria-expanded', `${isOpen}`);
    if (isOpen) {
      this.contentEl.classList.add('visible');
      this.contentEl.style.maxHeight = `${
        this.contentElLi.length + this.contentElLi.length * 0.5
      }rem`;
    } else {
      this.contentEl.classList.remove('visible');
      this.contentEl.style.removeProperty('max-height');
    }
  }

  // Add public open and close methods for convenience
  openAccordion() {
    this.toggle(true);
  }

  closeAccordion() {
    this.toggle(false);
  }
}

// init accordions
const accordions = document.querySelectorAll(
  '.footer--category'
) as NodeListOf<HTMLElement>;
accordions.forEach(accordionEl => {
  new Accordion(accordionEl);
});

/* ----------- Footer Category Accordion END ----------- */
