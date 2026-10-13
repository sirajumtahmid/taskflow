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
    li.textContent = task.text;
    li.dataset.id = task.id;
    list.appendChild(li);
  });
}

export function onSubmit(handler) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    handler();
  });
}