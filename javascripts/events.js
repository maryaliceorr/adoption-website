const petCards = document.getElementsByClassName('buttons');

const resetButton = document.getElementById('reset-button');

const showDino = (e) => {
  const pets = document.getElementsByClassName('pets');
  for (let i = 0; i < pets.length; i ++) {
    console.log(pets[i]);
  }
  
  // catId.classList.add('hide');
  // dogId.classList.add('hide');
};

const showDog = (e) => {

  // catId.classList.add('hide');
  // dinoId.classList.add('hide');
};

const showCat = (e) => {

//   dogId.classList.add('hide');
//   dinoId.classList.add('hide');
};

const showAllButtons = (e) => {

  catId.classList.remove('hide');
  dogId.classList.remove('hide');
  dinoId.classList.remove('hide');
};

const showRelevantPets = (e) => {
  for (let i = 0; i < petCards; i++) {
    if (petCards[i].id === 'cat') {
      petCards[i].addEventListener('click', showCat);
    }
    else if (petCards[i].id === 'dog') {
      petCards[i].addEventListener('click', showDog);
    } else {
      petCards[i].addEventListener('click', showDino);
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
