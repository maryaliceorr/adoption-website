const petCards = document.getElementsByClassName('buttons');

const resetButton = document.getElementById('reset-button');

const showDino = (e) => {
  const catId = e.target.children[4].petId('cat');
  const dogId = e.target.children[4].petId('dog');

  catId.classList.add('hide');
  dogId.classList.add('hide');
};

const showDog = (e) => {
  const catId = e.target.children[4].petId('cat');
  const dinoId = e.target.children[4].petId('dino');

  catId.classList.add('hide');
  dinoId.classList.add('hide');
};

const showCat = (e) => {
  const dogId = e.target.children[4].petId('dog');
  const dinoId = e.target.children[4].petId('dino');

  dogId.classList.add('hide');
  dinoId.classList.add('hide');
};

const showAllButtons = (e) => {
  const dogId = e.target.children[4].petId('dog');
  const catId = e.target.chilren[4].catId('cat');
  const dinoId = e.target.children[4].petId('dino');

  catId.classList.remove('hide');
  dogId.classList.remove('hide');
  dinoId.classList.remove('hide');
};

const showRelevantPets = (e) => {
  for (let i = 0; i < petCards; i++) {
    const cardType = e.target.parentNode.children[4];
    if (cardType === 'cat') {
      petCards[i].addEventListener('click', showCat);
    }
    else if (cardType === 'dog') {
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
