const toggle = (toggler, toggled, activeClass) => {
    toggler.classList.toggle(activeClass);
    toggled.classList.toggle(activeClass);
}

const initToggler = (togglerSelector, toggledSelector, activeClass) => {
    const toggler = document.querySelector(togglerSelector);
    const toggled = document.querySelector(toggledSelector);
    toggler.addEventListener('click', () => {
        toggle(toggler, toggled, activeClass);
    });
}

window.addEventListener('load', () => {
    console.log('window loaded');
    initToggler('.menubutton', '#mainnav', 'active');
})