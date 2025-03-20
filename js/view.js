import { model } from "./model.js";
import { controller } from "./controller.js";
import { createHeader } from "./components/createHeader.js";
import { createForm } from "./components/createForm.js";
import { createMain } from "./components/createMain.js";

export const view = {
  init() {
    const app = document.getElementById("app");

    const header = createHeader();
    const form = createForm();
    const main = createMain();

    app.append(header, main);


    this.renderTasks(model.tasks);

    const radioButtons = document.querySelectorAll('input[name="color"]');

    const inputForm = document.querySelector("#taskTitle");
    const textarea = document.querySelector("#taskDescription"); 
    const list = document.querySelector(".list");
    const showFavoriteTasksInput = document.querySelector("#showFavoriteTasks");
    const taskForm = document.querySelector("form")


    taskForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const title = inputForm.value;
      const description = textarea.value;
      let setColor;
      radioButtons.forEach((radio) => {
        if (radio.checked) {
          setColor = radio.value;
          console.log(setColor);
        }
      });
      controller.addTask(title, description, setColor);
      inputForm.value = "";
      textarea.value = "";
    });

    list.addEventListener("click", (event) => {
      const item = event.target;
      if (item.classList.contains("favorite-button")) {
        const taskId = Number(item.closest("li").id);
        console.log(taskId);

        controller.chooseTask(taskId);
      }
      if (item.classList.contains("delete-button")) {
        const taskId = Number(item.closest("li").id);
        controller.deleteTask(taskId);
      }
    });

    showFavoriteTasksInput.addEventListener("change", () => {
      model.toggleShowOnlyFavorite(showFavoriteTasksInput.checked);
      // this.renderTasks(model.tasks);
      // console.log(this.checked ? "checked" : "not checked");
    });
  },
  renderTasks(tasks) {
    const list = document.querySelector(".list");

    const favoriteTasksCount = document.querySelector(".header-counter-tasks");
    favoriteTasksCount.textContent = `Всего заметок: ${model.getTasksCount()}`;

    list.replaceChildren();

    if (tasks.length === 0) {
      const noTasksMessage = document.createElement("p");
      noTasksMessage.classList.add("noTaskMessage");

      const text1 = document.createTextNode("У вас нет еще ни одной заметки.");
      const lineBreak = document.createElement("br");
      const text2 = document.createTextNode(
        "Заполните поля выше и создайте свою первую заметку!"
      );

      noTasksMessage.append(text1, lineBreak, text2);
      list.append(noTasksMessage);
    } else {
      tasks.forEach((task) => {
        const li = document.createElement("li");
        li.id = task.id;
        // li.className = `${task.color} ${task.isChoose ? "done" : ""}`;

        const taskHeader = document.createElement("div");
        taskHeader.classList.add("taskHeaderContainer", task.color);

        const title = document.createElement("h2");
        title.classList.add("task-title");
        title.textContent = task.title;

        const taskButtonHeader = document.createElement("div");
        taskButtonHeader.classList.add("task-button-header");

        const favoriteButton = document.createElement("button");
        favoriteButton.classList.add("favorite-button");

        const favoriteButtonIcon = document.createElement("img");
        favoriteButtonIcon.src = task.isChoose
          ? "../images/heart-active.svg"
          : "../images/heart-inactive.svg";

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");

        const deleteButtonIcon = document.createElement("img");
        deleteButtonIcon.src = "../images/delete.svg";

        const taskContent = document.createElement("div");
        taskContent.classList.add("task-content");

        const text = document.createElement("p");
        text.classList.add("task-text");
        text.textContent = task.text;

        li.append(taskHeader, taskContent);
        taskHeader.append(title, taskButtonHeader);
        taskContent.append(text);
        taskButtonHeader.append(favoriteButton, deleteButton);
        favoriteButton.append(favoriteButtonIcon);
        deleteButton.append(deleteButtonIcon);

        list.prepend(li);
      });
    }
  },
  createModal(message, icon, type) {
    const messageBox = document.querySelector(".messageBox");
    const newMessage = document.createElement("div");
    newMessage.classList.add("message", type);

    const iconMessage = document.createElement("img");
    iconMessage.src = icon;
    const text = document.createElement("p");
    text.textContent = message;
    messageBox.append(newMessage);
    newMessage.append(iconMessage, text);
    setTimeout(() => {
      newMessage.remove();
    }, 3000);
  },
};
