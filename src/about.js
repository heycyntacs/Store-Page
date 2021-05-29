import { containers } from "./site";

function about() {
    const about = document.createElement('div');
    const aboutHeader = document.createElement('h2');
    const aboutDesc = document.createElement('p');

    about.classList.add('about');

    aboutHeader.textContent = 'ADIDAS AT A GLANCE';
    aboutDesc.textContent = 'adidas has its roots in Germany but we are a truly global company. Around the world we employ over 62,000 people. At our global HQ in Herzogenaurach, Germany, our teams are made up of people from over 100 different nations. These numbers alone can easily suggest that adidas is quite a large and also multifaceted organization. True. But we keep things simple, lean, and fast. And we will use this approach now to give an overview of what our company is all about.';

    containers.container.appendChild(about);
    about.appendChild(aboutHeader);
    about.appendChild(aboutDesc);
}

function renderAbout() {
    containers.container.textContent = '';
    about();
}

export default renderAbout;