const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");
const completedList = document.querySelector("#completed-task-list");

export function getInputValue() {
  return input.value;
}

export function clearInput() {
  input.value = "";
  input.focus();
}

export function renderTasks(tasks) {
  list.innerHTML = "";
  completedList.innerHTML = "";

  tasks.filter((task) => !task.done).forEach((task) => {
    const li = document.createElement("li");
    li.dataset.id = task.id;

    const text = document.createElement("span");
    text.textContent = task.text;

    const actions = document.createElement("span");
    actions.className = "task-actions";

    const doneButton = document.createElement("button");
    doneButton.type = "button";
    doneButton.className = "done-button";
    doneButton.dataset.id = task.id;
    doneButton.textContent = "Done";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    deleteButton.dataset.id = task.id;
    deleteButton.textContent = "Delete";

    actions.append(doneButton, deleteButton);
    li.append(text, actions);
    list.appendChild(li);
  });

  tasks.filter((task) => task.done).forEach((task) => {
    const li = document.createElement("li");
    li.dataset.id = task.id;

    const text = document.createElement("span");
    text.textContent = task.text;

    const actions = document.createElement("span");
    actions.className = "task-actions";

    const notDoneButton = document.createElement("button");
    notDoneButton.type = "button";
    notDoneButton.className = "not-done-button";
    notDoneButton.dataset.id = task.id;
    notDoneButton.textContent = "Not done";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    deleteButton.dataset.id = task.id;
    deleteButton.textContent = "Delete";

    actions.append(notDoneButton, deleteButton);
    li.append(text, actions);
    completedList.appendChild(li);
  });
}

export function onSubmit(handler) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    handler();
  });
}

export function onDelete(handler) {
  document.querySelector(".container").addEventListener("click", (event) => {
    if (!event.target.matches(".delete-button")) return;
    handler(event.target.dataset.id);
  });
}

export function onComplete(handler) {
  list.addEventListener("click", (event) => {
    if (!event.target.matches(".done-button")) return;
    handler(event.target.dataset.id);
  });
}

export function onMarkNotDone(handler) {
  completedList.addEventListener("click", (event) => {
    if (!event.target.matches(".not-done-button")) return;
    handler(event.target.dataset.id);
  });
}