// src/js/local-storage-api.js
const TASKS_KEY = 'tasks';
const THEME_KEY = 'theme';

export function saveTasks(tasks) {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

export function loadTasks() {
  return JSON.parse(localStorage.getItem(TASKS_KEY)) || [];
}

export function saveTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}

export function loadTheme() {
  return localStorage.getItem(THEME_KEY) || 'theme-light';
}
