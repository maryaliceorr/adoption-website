const grabAnimals = require('./pets');
const printToDom = require('./dom');

let animalArray = [];

const animalsLoad = function () {
  animalArray = JSON.parse(this.responseText).pets;
  printToDom(animalArray);
};

const nope = () => {
  console.error('you are WRONG');
};

const initializer = () => {
  grabAnimals(animalsLoad, nope);
};

const getAnimals = () => {
  return animalArray;
};

module.exports = {
  initializer,
  getAnimals,
};
