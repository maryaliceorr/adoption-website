const loadPets = (petsLoad, nope) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', petsLoad);
  myRequest.addEventListener('error', nope);
  myRequest.open('GET', '../db/pets.json');
  myRequest.send();
};

module.exports = loadPets;
