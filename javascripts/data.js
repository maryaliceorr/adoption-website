const grabPets = require('./pets');
const printToDom = require('./dom');

let petsArray = [];

const petsLoad = function () {
  petsArray = JSON.parse(this.responseText).pets;
  printToDom(petsArray);
};

const nope = () => {
  console.error('you are WRONG');
};

const initializer = () => {
  grabPets(petsLoad, nope);
};

const getPets = () => {
  return petsArray;
};

module.exports = {
  initializer,
  getPets,
};
