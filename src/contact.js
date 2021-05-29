import { containers } from './site';

function support() {
    const contactContainer = document.createElement('div');
    const fb = document.createElement('a');
    const fbHeader = document.createElement('h2');
    const fbInfo = document.createElement('p');
    const fbSched = document.createElement('p');
    const fbSat = document.createElement('p');
    
    contactContainer.classList.add('contact-info');
    fb.classList.add('fb-head');
    fb.href = 'https://www.facebook.com/adidasPH/';
    fbHeader.textContent = 'FACEBOOK:';
    fbInfo.textContent = 'Use the private message option to contact our support team.';
    fbSched.textContent = `Mon to Friday (excluding Public Holidays): 9am to 9pm.`;
    fbSat.textContent = 'Saturday: 9am to 6pm.';

    containers.container.appendChild(contactContainer); 
    contactContainer.appendChild(fb);
    fb.appendChild(fbHeader);
    contactContainer.appendChild(fbInfo);
    contactContainer.appendChild(fbSched);
    contactContainer.appendChild(fbSat);
}

function renderContact() {
    containers.container.innerHTML = '';
    support();
}

export default renderContact;