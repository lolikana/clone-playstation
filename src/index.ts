const htmlSelect = document.querySelector('html') as HTMLElement;
/* Nav menu START */
const menuBtn = document.querySelector('.menu--toggler') as HTMLDivElement;
const menuBtnBurger = document.querySelector('.menu--toggler-burger') as HTMLDivElement;
const primaryNav = document.querySelector('.navbar--primary') as HTMLDivElement;
const linksNav = document.querySelector('.nav-links') as HTMLUListElement;
const btnsLinkNav = document.querySelectorAll(
  '.nav-link-btn'
) as NodeListOf<HTMLButtonElement>;

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

  console.log(target);

  if (menuBtn.contains(target) && visibilityNavPrimary === 'false' && !menuOpen) {
    setPrimaryNav(true);
  } else if (!primaryNav.contains(target) && visibilityNavPrimary === 'true') {
    setPrimaryNav(false);
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

  if (clicked.classList.contains('active')) return clicked.classList.remove('active');

  btnsLinkNav.forEach(btn => {
    btn.classList.remove('active');
    clicked.classList.add('active');
  });
});
/* Nav menu END */
