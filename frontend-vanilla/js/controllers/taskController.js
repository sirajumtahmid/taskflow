import * as model from "../models/taskModel.js";
import * as view from "../views/taskView.js";

function handleAdd() {
  const text = view.getInputValue().trim();
  if (text === "") return;

  model.addTask(text);
  view.renderTasks(model.getTasks());
  view.clearInput();
}

function handleDelete(id) {
  model.deleteTask(id);
  view.renderTasks(model.getTasks());
}

function handleComplete(id) {
  model.completeTask(id);
  view.renderTasks(model.getTasks());
}

function handleMarkNotDone(id) {
  model.markTaskNotDone(id);
  view.renderTasks(model.getTasks());
}

export function init() {
  view.renderTasks(model.getTasks());
  view.onSubmit(handleAdd);
  view.onDelete(handleDelete);
  view.onComplete(handleComplete);
  view.onMarkNotDone(handleMarkNotDone);
}