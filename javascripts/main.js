const data = require('./data');
const domEvents = require('./events');

data.initializer();

domEvents.resetCards();
domEvents.showRelevantPets();
