const domEvents = require('./events');

const outputDiv = document.getElementById('pet-holder');

const cardBuilder = (petsArray) => {
  let domStrang = '';
  petsArray.forEach((pet) => {
    domStrang += `<div class='buttons col-md-4'>`;
    domStrang +=    `<div class='panel'>`;
    domStrang +=      `<h2 class='panel-heading'>${pet.name}</h2>`;
    domStrang +=      `<div class='panel-body'>`;
    domStrang +=        `<img src='${pet.imageUrl}'>`;
    domStrang +=        `<h4>${pet.color}</h4>`;
    domStrang +=        `<p>${pet.specialSkill}</p>`;
    domStrang +=        `<h3 class='panel-footer'>${pet.type}</h3>`;
    domStrang +=      `</div>`;
    domStrang +=    `</div>`;
    domStrang +=  `</div>`;
  });
  return domStrang;
};

const printToDom = (petsArray) => {
  outputDiv.innerHTML = cardBuilder(petsArray);
  domEvents();
};

module.exports = printToDom;
