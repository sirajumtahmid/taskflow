import * as model from "../models/taskModel.js";
import * as view from "../views/taskView.js";

function handleAdd() {
  const text = view.getInputValue().trim();
  if (text === "") return;

  model.addTask(text);
  view.renderTasks(model.getTasks());
  view.clearInput();
}

export function init() {
  view.renderTasks(model.getTasks());
  view.onSubmit(handleAdd);
}