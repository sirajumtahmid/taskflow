const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");

export function getInputValue() {
  return input.value;
}

export function clearInput() {
  input.value = "";
  input.focus();
}

export function renderTasks(tasks) {
  list.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.dataset.id = task.id;

    const text = document.createElement("span");
    text.textContent = task.text;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    deleteButton.dataset.id = task.id;
    deleteButton.textContent = "Delete";

    li.append(text, deleteButton);
    list.appendChild(li);
  });
}

export function onSubmit(handler) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    handler();
  });
}

export function onDelete(handler) {
  list.addEventListener("click", (event) => {
    if (!event.target.matches(".delete-button")) return;
    handler(event.target.dataset.id);
  });
}