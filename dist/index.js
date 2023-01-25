"use strict";
const htmlSelect = document.querySelector('html');
const menuBtn = document.querySelector('.menu--toggler');
const primaryNav = document.querySelector('.navbar--primary');
const linksNav = document.querySelector('.nav-links');
const btnsLinkNav = document.querySelectorAll('.nav-link-btn');
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
    if (menuBtn.contains(target) && visibilityNavPrimary === 'false' && !menuOpen) {
        setPrimaryNav(true);
    }
    else if (!primaryNav.contains(target) && visibilityNavPrimary === 'true') {
        setPrimaryNav(false);
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
    if (clicked.classList.contains('active'))
        return clicked.classList.remove('active');
    btnsLinkNav.forEach(btn => {
        btn.classList.remove('active');
        clicked.classList.add('active');
    });
});
