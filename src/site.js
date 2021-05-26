const content = document.querySelector('#content');

function navLogo (nav){
    const logoContainer = document.createElement('div');
    const logo = document.createElement('a');
    logo.classList.add('navLink');
    logo.id = 'logo';
    logo.textContent = 'Logo';
    logo.href = '#';
    nav.appendChild(logoContainer);
    logoContainer.appendChild(logo);
}

function menuNav (nav) {
    const menu = document.createElement('a');
    menu.classList.add('navLink');
    menu.textContent = 'Menu';
    menu.href = '#';
    nav.appendChild(menu);
}

function contactNav (nav) {
    const location = document.createElement('a');
    location.classList.add('navLink');
    location.textContent = 'Contact';
    location.href = '#';
    nav.appendChild(location);
}

function aboutNav (nav) {
    const about = document.createElement('a');
    about.classList.add('navLink');
    about.textContent = 'About';
    about.href = '#';
    nav.appendChild(about);
}

function navbar () {
    const navbar = document.createElement('section');
    const navlinkContainer = document.createElement('div');
    navbar.classList.add('navbar');
    content.appendChild(navbar);
    navLogo(navbar);
    menuNav(navlinkContainer);
    contactNav(navlinkContainer);
    aboutNav(navlinkContainer);
    navbar.appendChild(navlinkContainer);
}

function background () {
    const background = document.createElement('img');
    background.id = 'background';
    background.src = '/dist/images/wp7910550-yoasobi-wallpapers.jpg';
    content.appendChild(background);
}

function fb (socialContainer) {
    const fb = document.createElement('a');
    fb.textContent = 'FB';
    fb.href = '#';
    fb.classList.add('socials');
    socialContainer.appendChild(fb);
}

function tw (socialContainer) {
    const tw = document.createElement('a');
    tw.textContent = 'TW';
    tw.href = '#';
    tw.classList.add('socials');
    socialContainer.appendChild(tw);
}

function ig (socialContainer) {
    const ig = document.createElement('a');
    ig.textContent = 'IG';
    ig.href = '#';
    ig.classList.add('socials');
    socialContainer.appendChild(ig);
}

function socials () {
    const socialContainer = document.createElement('div');
    socialContainer.classList.add('socialsContainer');
    fb(socialContainer);
    tw(socialContainer);
    ig(socialContainer);
    content.appendChild(socialContainer);
}

function renderSite () {
    navbar();
    background();
    socials();
}

export default renderSite;