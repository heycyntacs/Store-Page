import { containers } from "./site";

function createDiv() {
    const shoesDiv = document.createElement('div');
    shoesDiv.classList.add(`shoes`);

    shoesDiv.appendChild(createDetails('superstar'));

    containers.container.appendChild(shoesDiv);
}


function createDetails(name) {
    const shoesDetails = document.createElement('div');
    shoesDetails.classList.add('shoes-details');

    const shoesName = document.createElement('h3');
    shoesName.classList.add = 'shoes-name';
    shoesName.textContent = name;

    const shoesImg = document.createElement('img');
    shoesImg.classList.add = 'shoes-img';
    shoesImg.src = `/dist/images/shoes/${name}.jpg`;

    shoesDetails.appendChild(shoesName);
    shoesDetails.appendChild(shoesImg);

    return shoesDetails;
}

function renderShoes () {
    containers.container.innerHTML = '';
    createDiv();
}

export default renderShoes;