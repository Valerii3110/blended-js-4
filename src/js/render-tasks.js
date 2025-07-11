// src/js/render-tasks.js
import { refs } from './refs.js';

export function renderTasks(tasks, onDelete) {
  refs.taskList.innerHTML = '';

  const markup = tasks
    .map(task => {
      return `
        <li class="task-list-item" data-id="${task.id}">
          <button class="task-list-item-btn">Delete</button>
          <h3>${task.title}</h3>
          <p>${task.description}</p>
        </li>`;
    })
    .join('');

  refs.taskList.insertAdjacentHTML('beforeend', markup);

  refs.taskList.querySelectorAll('.task-list-item-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const id = e.target.closest('li').dataset.id;
      onDelete(id);
    });
  });
}
