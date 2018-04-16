const domEvents = require('./events');

const outputDiv = document.getElementById('pet-holder');

const cardBuilder = (petsArray) => {
  let domStrang = '';
  petsArray.forEach((pet) => {
    domStrang += `<div class='buttons col-md-4'>`;
    domStrang +=    `<div class='panel'>`;
    domStrang +=        `<div class='center'>`;
    if (pet.type === 'cat') {
      domStrang +=       `<h2 class='list-group-item-warning'>${pet.name}</h2>`;
    } else if (pet.type === 'dog') {
      domStrang +=       `<h2 class='list-group-item-info'>${pet.name}</h2>`;
    } else {
      domStrang +=       `<h2 class='list-group-item-success'>${pet.name}</h2>`;
    };
    domStrang +=        `</div>`;
    domStrang +=      `<div class='panel-body'>`;
    domStrang +=        `<img class="img-circle" src='${pet.imageUrl}'>`;
    domStrang +=        `<h4><strong>Color: </strong>${pet.color}</h4>`;
    domStrang +=        `<p><strong>Special Skill: </strong>${pet.specialSkill}</p>`;
    domStrang +=        `<div class='center'>`;
    if (pet.type === 'cat') {
      domStrang +=        `<h3 class='list-group-item-warning'>Cat</h3>`;
    } else if (pet.type === 'dog') {
      domStrang +=        `<h3 class='list-group-item-info'>Dog</h3>`;
    } else {
      domStrang +=        `<h3 class='list-group-item-success'>Dino</h3>`;
    };
    domStrang +=        `</div>`;
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
