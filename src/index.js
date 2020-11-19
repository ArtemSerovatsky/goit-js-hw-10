import './styles.css';
import menuJson from './menu.json';
import itemsTamplate from './js/templating.js';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const inputRef = document.querySelector('.theme-switch__toggle');
inputRef.addEventListener('change', handleChange);

const localStorageTheme = localStorage.getItem('theme');

function handleChange() {
  if (!inputRef.checked) {
    addLightTheme();
  } else {
    addDarkTheme();
  }
}

function addLightTheme() {
  document.body.classList.remove(Theme.DARK);
  document.body.classList.add(Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
}

function addDarkTheme() {
  document.body.classList.remove(Theme.LIGHT);
  document.body.classList.add(Theme.DARK);
  localStorage.setItem('theme', Theme.DARK);
}

function lookLocalStorage() {
  if (localStorageTheme === Theme.DARK) {
    document.body.classList.toggle(Theme.DARK);
    inputRef.checked = true;
  }
}

lookLocalStorage();

const markup = itemsTamplate(menuJson);

const galleryRef = document.querySelector('.js-menu');
galleryRef.insertAdjacentHTML('beforeend', markup);
