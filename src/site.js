import renderAbout from "./about";
import renderContact from "./contact";
import renderShoes from "./shoes";

const containers = (() => {
    const content = document.querySelector('#content');
    const container = document.createElement('div');
    container.id = 'container';
    content.appendChild(container);

    return {content, container};
})();

function navLogo (nav){
    const logoContainer = document.createElement('div');
    const logo = document.createElement('a');
    logo.classList.add('navLink');
    logo.id = 'logo';
    logo.textContent = 'adidas';
    logo.href = '#';
    nav.appendChild(logoContainer);
    logoContainer.appendChild(logo);
    logo.addEventListener('click', () => {
        const h1 = document.getElementById('adidas');
        if (!containers.container.contains(h1)) adidas();
        return;
    });
}

function shoesNav (nav) {
    const shoes = document.createElement('a');
    shoes.classList.add('navLink');
    shoes.textContent = 'Shoes';
    shoes.href = '#';
    nav.appendChild(shoes);
    shoes.addEventListener('click', () => {
        if(containers.container.innerHTML.includes('shoes')) return;
        renderShoes();
    });
}

function contactNav (nav) {
    const location = document.createElement('a');
    location.classList.add('navLink');
    location.textContent = 'Contact';
    location.href = '#';
    nav.appendChild(location);
    location.addEventListener('click', () => {
        if (containers.container.innerHTML.includes('contact')) return;
        renderContact();
    });
}

function aboutNav (nav) {
    const about = document.createElement('a');
    about.classList.add('navLink');
    about.textContent = 'About';
    about.href = '#';
    nav.appendChild(about);
    about.addEventListener('click', () => {
        if (containers.container.innerHTML.includes('about')) return;
        renderAbout();
    });
}

function navbar () {
    const navbar = document.createElement('section');
    const navlinkContainer = document.createElement('div');
    navbar.classList.add('navbar');
    containers.content.appendChild(navbar);
    navLogo(navbar);
    shoesNav(navlinkContainer);
    contactNav(navlinkContainer);
    aboutNav(navlinkContainer);
    navbar.appendChild(navlinkContainer);
}

function background () {
    const background = document.createElement('img');
    background.id = 'background';
    background.src = '/dist/images/wilhelm-gunkel-AqERXpVlewg-unsplash.JPG';
    containers.content.appendChild(background);
}

function adidas () {
    containers.container.innerHTML = '';
    const adidas = document.createElement('h1');
    adidas.id = 'adidas';
    adidas.textContent = 'adidas.';
    containers.container.appendChild(adidas);
}

function fb (socialContainer) {
    const fb = document.createElement('a');
    fb.textContent = 'FB';
    fb.href = 'https://www.facebook.com/adidasPH/';
    fb.id = 'fb';
    fb.classList.add('socials');
    socialContainer.appendChild(fb);
}

function tw (socialContainer) {
    const tw = document.createElement('a');
    tw.textContent = 'TW';
    tw.href = 'https://twitter.com/adidas';
    tw.id = 'tw';
    tw.classList.add('socials');
    socialContainer.appendChild(tw);
}

function ig (socialContainer) {
    const ig = document.createElement('a');
    ig.textContent = 'IG';
    ig.href = 'https://www.instagram.com/adidas/';
    ig.id = 'ig';
    ig.classList.add('socials');
    socialContainer.appendChild(ig);
}

function socials () {
    const socialContainer = document.createElement('div');
    socialContainer.classList.add('socialsContainer');
    fb(socialContainer);
    tw(socialContainer);
    ig(socialContainer);
    containers.content.appendChild(socialContainer);
}

function renderTemplate () {
    navbar();
    background();
    socials();
}

function renderSite () {
    renderTemplate();
    adidas();
}

export {containers, renderSite};