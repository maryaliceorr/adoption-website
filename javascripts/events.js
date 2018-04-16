const petCards = document.getElementsByClassName('buttons');

const resetButton = document.getElementById('reset-button');

const showDino = (e) => {
  const catId = e.target.parentNode.id('cat');
  const dogId = e.target.parentNode.id('dog');

  catId.classList.add('hide');
  dogId.classList.add('hide');
};

const showDog = (e) => {
  const catId = e.target.parentNode.id('cat');
  const dinoId = e.target.parentNode.id('dino');

  catId.classList.add('hide');
  dinoId.classList.add('hide');
};

const showCat = (e) => {
  const dogId = e.target.parentNode.id('dog');
  const dinoId = e.target.parentNode.id('dino');

  dogId.classList.add('hide');
  dinoId.classList.add('hide');
};

const showAllButtons = (e) => {
  const dogId = e.target.parentNode.id('dog');
  const catId = e.target.parentNode.id('cat');
  const dinoId = e.target.parentNode.id('dino');

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
