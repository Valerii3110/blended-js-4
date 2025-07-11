// src/js/tasks.js
let tasks = [];

export function createTask(title, description) {
  return {
    id: Date.now().toString(),
    title,
    description,
  };
}

export function addTask(task) {
  tasks.push(task);
}

export function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
}

export function getTasks() {
  return tasks;
}

export function setTasks(newTasks) {
  tasks = newTasks;
}
