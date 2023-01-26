"use strict";
const htmlSelect = document.querySelector('html');
const menuBtn = document.querySelector('.menu--toggler');
const primaryNav = document.querySelector('.navbar--primary');
const secondaryNav = document.querySelector('.navbar--secondary');
const linksNav = document.querySelector('.nav-links');
const btnsLinkNav = document.querySelectorAll('.nav-link-btn');
const togglerBtnSecondaryNav = document.querySelector('.navbar--secondary-toggler');
let menuOpen = false;
function setPrimaryNav(set) {
    primaryNav.setAttribute('data-visible', `${set}`);
    menuBtn.setAttribute('aria-expanded', `${set}`);
    menuOpen = set;
    if (set) {
        menuBtn.classList.add('open', 'burger--shadow-active');
    }
    else {
        menuBtn.classList.remove('open', 'burger--shadow-active');
    }
}
htmlSelect.addEventListener('click', e => {
    const visibilityNavPrimary = primaryNav.getAttribute('data-visible');
    const target = e.target;
    console.log(target);
    if (target === secondaryNav || target === togglerBtnSecondaryNav)
        return;
    if (menuBtn.contains(target) && visibilityNavPrimary === 'false' && !menuOpen) {
        setPrimaryNav(true);
        secondaryNav.classList.remove('hide');
    }
    else if (!primaryNav.contains(target) && visibilityNavPrimary === 'true') {
        setPrimaryNav(false);
        secondaryNav.classList.add('hide');
    }
    btnsLinkNav.forEach(btn => {
        if (target !== btn)
            btn.classList.remove('active');
    });
});
linksNav.addEventListener('click', (e) => {
    const clicked = e.target.closest('.nav-link-btn');
    if (clicked === null)
        return;
    if (clicked.classList.contains('active')) {
        clicked.classList.remove('active');
        secondaryNav.setAttribute('data-visible', 'false');
        return;
    }
    btnsLinkNav.forEach(btn => {
        btn.classList.remove('active');
        clicked.classList.add('active');
        secondaryNav.classList.remove('hide');
        secondaryNav.setAttribute('data-visible', 'true');
    });
});
togglerBtnSecondaryNav.addEventListener('click', () => secondaryNav.setAttribute('data-visible', 'false'));
