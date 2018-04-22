const data = require('./data');
const dom = require('./dom');
const pets = require('./pets');

const catButton = document.getElementById('cat-button');
const dogButton = document.getElementById('dog-button');
const dinoButton = document.getElementById('dino-button');
const resetButton = document.getElementById('reset-button');

const cat = document.getElementByClassName('cat');
const dog = document.getElementByClassName('dog');
const dino = document.getElemtByClassName('dino');

// const showDino = (e) => {
//   const pets = document.getElementsByClassName('pets');
//   for (let i = 0; i < pets.length; i ++) {
//     console.log(pets[i]);
//   }
const showDino = (e) => {
  cat.classList.add('hide');
  dog.classList.add('hide');
};

const showDog = (e) => {
  cat.classList.add('hide');
  dino.classList.add('hide');
};

const showCat = (e) => {
  dog.classList.add('hide');
  dino.classList.add('hide');
};

const showRelevantPets = (e) => {
  for (let i = 0; i < pets; i++) {
    if (pets[i].id === 'cat') {
      catButton.addEventListener('click', showCat);
    }
    else if (pets[i].id === 'dog') {
      dogButton.addEventListener('click', showDog);
    } else {
      dinoButton.addEventListener('click', showDino);
    };
  };
};

const resetCards = (e) => {
  resetButton.addEventListener('click', showAllButtons);
};

module.exports = {
  showRelevantPets,
  resetCards,
};
