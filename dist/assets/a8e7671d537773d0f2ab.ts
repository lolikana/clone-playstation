"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./sass/style.scss");
const data_1 = require("./ts/seeds/data");
const htmlSelect = document.querySelector('html');
const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu--toggler');
const primaryNav = document.querySelector('.navbar--primary');
const secondaryNav = document.querySelector('.navbar--secondary');
const linksNav = document.querySelector('.nav-links');
const btnsLinkNav = document.querySelectorAll('.nav-link-btn');
const searchBar = document.querySelector('.navbar--search-icon');
const togglerBtnSecondaryNav = document.querySelector('.navbar--secondary-toggler');
const ulListItems = document.querySelector('.secondary--list-items');
const ulListLinks = document.querySelector('.secondary--list-links');
const searchBarToggler = document.querySelector('.primary--search-toggler');
const searchModal = document.querySelector('.search--modal');
const searchModalToggler = document.querySelector('.search--modal-toggler');
const searchSelectPlaceholderBtn = document.querySelector('.search--select-placeholder');
const searchDropdown = document.querySelector('.search--dropdown');
const searchSelectInputs = document.querySelectorAll('input[name="search--select-option"]');
const searchTextInput = document.querySelector('input[name="search-input"]');
window.onscroll = function () {
    myFunction();
};
const nav = document.getElementsByTagName('nav')[0];
const sticky = nav.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add('sticky');
    }
    else {
        nav.classList.remove('sticky');
    }
}
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
    if (target === primaryNav ||
        target === secondaryNav ||
        target === ulListItems ||
        target === ulListLinks ||
        target === togglerBtnSecondaryNav ||
        target === searchBar ||
        target === searchModal)
        return;
    if (menuBtn.contains(target) && visibilityNavPrimary === 'false' && !menuOpen) {
        setPrimaryNav(true);
    }
    else if ((!primaryNav.contains(target) && visibilityNavPrimary === 'true') ||
        target === navbar) {
        setPrimaryNav(false);
        secondaryNav.setAttribute('data-visible', 'false');
        btnsLinkNav.forEach(btn => {
            btn.classList.remove('active');
        });
    }
    if (target !== searchSelectPlaceholderBtn) {
        searchSelectPlaceholderBtn.classList.remove('active');
        searchDropdown.classList.remove('show');
        searchSelectPlaceholderBtn.innerHTML = searchSelectPlaceholder[0];
    }
});
linksNav.addEventListener('click', (e) => {
    const clicked = e.target.closest('.nav-link-btn');
    if (clicked === null)
        return;
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
    const data = data_1.navSecondData.filter(item => item.id === clicked.innerHTML);
    createSecondaryElements(data[0]);
});
togglerBtnSecondaryNav.addEventListener('click', () => {
    secondaryNav.setAttribute('data-visible', 'false');
    btnsLinkNav.forEach(btn => {
        btn.classList.remove('active');
    });
});
const createSecondNavItem = (icon, title) => {
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
const createsecondNavLink = (href, text) => {
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
function createSecondaryElements(data) {
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
searchBarToggler.addEventListener('click', () => {
    searchModal.setAttribute('data-visible', 'true');
});
const searchSelectPlaceholder = ['PlayStation.com', 'Sites'];
const selectSearchValue = () => {
    const searchSelectInputChecked = document.querySelector('input[name="search--select-option"]:checked');
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
    }
    else {
        searchSelectPlaceholderBtn.innerHTML = searchSelectPlaceholder[0];
    }
});
searchSelectInputs.forEach(input => input.addEventListener('change', () => {
    selectSearchValue();
    searchSelectPlaceholderBtn.innerHTML = searchSelectPlaceholder[0];
    searchTextInput.placeholder = `Search ${searchSelectPlaceholder[0]}`;
}));
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
    if (searchModal !== target)
        return;
    closeSearchModal();
});
