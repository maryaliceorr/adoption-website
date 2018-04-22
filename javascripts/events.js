// const pets = require('./pets');

const catButton = document.getElementById('cat-button');
const dogButton = document.getElementById('dog-button');
const dinoButton = document.getElementById('dino-button');
// const resetButton = document.getElementById('reset-button');

const cats = document.getElementsByClassName('cat');
const dogs = document.getElementsByClassName('dog');
const dinos = document.getElementsByClassName('dino');

const showDinos = (e) => {
  for (let i = 0; i < cats.length; i++) {
    cats[i].classList.add('hide');
  }

  for (let i = 0; i < dogs.length; i++) {
    dogs[i].classList.add('hide');
  }

  for (let i = 0; i < dinos.length; i++) {
    dinos[i].classList.remove('hide');
  }
};

const showDogs = (e) => {
  for (let i = 0; i < cats.length; i++) {
    cats[i].classList.add('hide');
  }

  for (let i = 0; i < dogs.length; i++) {
    dogs[i].classList.remove('hide');
  }

  for (let i = 0; i < dinos.length; i++) {
    dinos[i].classList.add('hide');
  }
};

const showCats = (e) => {
  for (let i = 0; i < cats.length; i++) {
    cats[i].classList.remove('hide');
  }

  for (let i = 0; i < dogs.length; i++) {
    dogs[i].classList.add('hide');
  }

  for (let i = 0; i < dinos.length; i++) {
    dinos[i].classList.add('hide');
  }
};

const showRelevantPets = (e) => {
  catButton.addEventListener('click', showCats);
  dogButton.addEventListener('click', showDogs);
  dinoButton.addEventListener('click', showDinos);
};

const resetCards = (e) => {
//   resetButton.addEventListener('click', pets.loadPets());
};

module.exports = {
  showRelevantPets,
  resetCards,
};
