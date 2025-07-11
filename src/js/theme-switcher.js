// src/js/theme-switcher.js
import { refs } from './refs.js';
import { saveTheme, loadTheme } from './local-storage-api.js';

export function initTheme() {
  const savedTheme = loadTheme();
  refs.body.className = savedTheme;
}

export function toggleTheme() {
  refs.body.classList.toggle('theme-dark');
  refs.body.classList.toggle('theme-light');
  const currentTheme = refs.body.classList.contains('theme-dark')
    ? 'theme-dark'
    : 'theme-light';
  saveTheme(currentTheme);
}
