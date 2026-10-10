document.addEventListener("DOMContentLoaded", () => {
  const themeSwitch = document.getElementById('theme-switch');
  const savedTheme = localStorage.getItem('theme') || 'light';

  // Устанавливаем сохранённую тему
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeSwitch.checked = savedTheme === 'dark';

  // Переключение темы
  themeSwitch.addEventListener('change', () => {
    const theme = themeSwitch.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });
});
