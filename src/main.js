/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/
// src/main.js
import { refs } from './js/refs.js';
import {
  createTask,
  addTask,
  deleteTask,
  getTasks,
  setTasks,
} from './js/tasks.js';
import { renderTasks } from './js/render-tasks.js';
import { saveTasks, loadTasks } from './js/local-storage-api.js';
import { initTheme, toggleTheme } from './js/theme-switcher.js';

// Ініціалізація
initTheme();
setTasks(loadTasks());
renderTasks(getTasks(), handleDelete);

// Додавання задачі
refs.form.addEventListener('submit', e => {
  e.preventDefault();

  const title = refs.taskNameInput.value.trim();
  const description = refs.taskDescInput.value.trim();
  if (!title || !description) return;

  const newTask = createTask(title, description);
  addTask(newTask);
  saveTasks(getTasks());
  renderTasks(getTasks(), handleDelete);
  refs.form.reset();
});

// Видалення задачі
function handleDelete(id) {
  deleteTask(id);
  saveTasks(getTasks());
  renderTasks(getTasks(), handleDelete);
}

// Перемикання теми
refs.themeToggleBtn.addEventListener('click', toggleTheme);
