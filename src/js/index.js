const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

document.addEventListener('DOMContentLoaded', () => {
  const SwitchInput = document.querySelector('.js-switch-input');
  const themeBody = document.querySelector('body');
  const checkedTheme = document.getElementById('theme-switch-control');
  const Windowtheme = localStorage.getItem('checked');
  themeBody.classList.add(Theme.LIGHT);

  const togleTheme = () => {
    if (Windowtheme === 'true') {
      themeBody.classList.replace(Theme.LIGHT, Theme.DARK);
      checkedTheme.checked = true;
    } else {
      themeBody.classList.replace(Theme.DARK, Theme.LIGHT);
      checkedTheme.checked = false;
    }
  };
  togleTheme();
  const changeTheme = ({ target }) => {
    if (target.checked) {
      themeBody.classList.replace(Theme.LIGHT, Theme.DARK);
      localStorage.setItem('checked', 'true');
    } else {
      themeBody.classList.replace(Theme.DARK, Theme.LIGHT);
      localStorage.setItem('checked', 'false');
    }
  };

  SwitchInput.addEventListener('change', changeTheme);
});
