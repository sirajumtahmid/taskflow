import { saveTasks, loadTasks } from "./storage.js";
import { generateId } from "../utils/helpers.js";

let tasks = loadTasks();

export function getTasks() {
  return [...tasks];
}

export function addTask(text) {
  const task = {
    id: generateId(),
    text: text,
    done: false,
    createdAt: new Date().toISOString(),
  };
  tasks.push(task);
  saveTasks(tasks);
  return task;
}