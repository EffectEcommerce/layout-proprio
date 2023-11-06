"use strict";
function toggleDropdownLogin() {
    const parent = document.querySelector('.header-account');
    if (!parent) {
        console.error("Não foi possível acessar o elemento pai do dropdown");
        return null;
    }
    const child = document.querySelector('.account-dropdown');
    if (!child) {
        console.error("Não foi possível acessar o elemento filho do dropdown");
        return null;
    }
    parent.addEventListener('mouseover', (e) => {
        child.style.opacity = '1';
        child.style.visibility = 'visible';
    });
    parent.addEventListener('mouseleave', (e) => {
        child.style.opacity = '0';
        child.style.visibility = 'hidden';
    });
}
toggleDropdownLogin();
