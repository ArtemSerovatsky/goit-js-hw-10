import CardTemplate from '../templates/card.hbs';
import cardContent from '../menu.json';
const cardsList = document.querySelector('.js-menu');

const menuCard = CardTemplate(cardContent);

cardsList.insertAdjacentHTML('beforeend', menuCard);
