import { model } from "./js/model.js";
import { controller } from "./js/controller.js";
import { view } from "./js/view.js";

// const ERROR = "images/error.svg";
// const SUCCESS = "images/success.svg";

// const model = {
//   tasks: [],
//   isShowOnlyFavorite: false,
//   addTask(title, description, setColor) {
//     const task = {
//       title: title,
//       text: description,
//       id: new Date().getTime(),
//       isChoose: false,
//       color: setColor,
//     };
//     this.tasks.push(task);
//     // view.renderTasks(this.tasks);
//     this.updateNotesView()
//   },
//   deleteTask(taskId) {
//     this.tasks = this.tasks.filter((task) => {
//       return task.id !== taskId;
//     });
//     // view.renderTasks(this.tasks);
//     this.updateNotesView()
//   },
//   chooseTask(taskId) {
//     this.tasks = this.tasks.map((task) => {
//       if (task.id === taskId) {
//         task.isChoose = !task.isChoose;
//       }
//       return task;
//     });

//     // view.renderTasks(this.tasks);
//     this.updateNotesView()
//   },
//   getTasksCount() {
//     return this.tasks.length;
//   },
//   toggleShowOnlyFavorite(isShowOnlyFavorite) {
//     this.isShowOnlyFavorite = isShowOnlyFavorite;
//     this.updateNotesView();
//     // view.renderTasks(this.tasks);
//   },
//   updateNotesView() {
//     // const notesToRender = this.tasks.map((task) => {
//     //   if (this.isShowOnlyFavorite) {
//     //     return task; // Показываем только избранные заметки
//     //   } else {
//     //     return this.tasks; // Показываем все заметки
//     //   }
//     // });
//     // console.log(notesToRender);

//     // // view.renderTasks(notesToRender);
//     // view.renderTasks(this.tasks);
//     // // 1. рендерит список заметок (вызывает метод view.renderNotes и передает в него notesToRender)
//     // // 2. рендерит количество заметок (вызывает метод view.renderNotesCount)

//     const notesToRender = this.isShowOnlyFavorite 
//         ? this.tasks.filter(task => task.isChoose) // Показываем только избранные заметки
//         : this.tasks; // Показываем все заметки

//     console.log(notesToRender); 

//     view.renderTasks(notesToRender);
//   },
// };

// const view = {
//   init() {
//     const app = document.getElementById("app");

//     const header = document.createElement("header");
//     header.classList.add("header");

//     const headerImageWrapper = document.createElement("div");
//     headerImageWrapper.classList.add("header-image-wrapper");

//     const headerImage = document.createElement("img");
//     headerImage.src = "images/📝Notes.svg";

//     const headerCouterTasksWrapper = document.createElement("div");
//     headerCouterTasksWrapper.classList.add("header-counter-tasks-wrapper");

//     const headerCounterTasksImage = document.createElement("img");
//     headerCounterTasksImage.src = "images/counter-tasks.svg";

//     const headerCounterTasks = document.createElement("p");
//     headerCounterTasks.classList.add("header-counter-tasks");

//     const main = document.createElement("main")
//     main.classList.add("main");

//     const form = document.createElement("form");
//     form.classList.add("form");

//     const inputContainer = document.createElement("div");
//     inputContainer.classList.add("input-container");

//     const labelInput = document.createElement("label");
//     labelInput.setAttribute("for", "taskTitle");
//     labelInput.textContent = "Название заметки ";

//     const inputForm = document.createElement("input");
//     inputForm.id = "taskTitle";
//     inputForm.classList.add("input");
//     inputForm.type = "text";
//     inputForm.placeholder = "Напишите название новой заметки...";

//     const descriptionContainer = document.createElement("div");
//     descriptionContainer.classList.add("description-container");

//     const labelTextarea = document.createElement("label");
//     labelTextarea.setAttribute("for", "taskDescription");
//     labelTextarea.textContent = "Описание новой заметки";

//     const textarea = document.createElement("textarea");
//     textarea.id = "taskDescription";
//     textarea.classList.add("textarea");

//     const buttonContainer = document.createElement("div");
//     buttonContainer.classList.add("button-container");

//     const colorWrap = document.createElement("div");
//     colorWrap.classList.add("colorWrap");

//     const colorYellow = document.createElement("input");
//     colorYellow.classList.add("color-yellow");
//     colorYellow.setAttribute("checked", "");
//     colorYellow.type = "radio";
//     colorYellow.name = "color";
//     colorYellow.value = "yellow";

//     const colorGreen = document.createElement("input");
//     colorGreen.classList.add("color-green");
//     colorGreen.type = "radio";
//     colorGreen.name = "color";
//     colorGreen.value = "green";

//     const colorBlue = document.createElement("input");
//     colorBlue.classList.add("color-blue");
//     colorBlue.type = "radio";
//     colorBlue.name = "color";
//     colorBlue.value = "blue";

//     const colorRed = document.createElement("input");
//     colorRed.classList.add("color-red");
//     colorRed.type = "radio";
//     colorRed.name = "color";
//     colorRed.value = "red";

//     const colorPurple = document.createElement("input");
//     colorPurple.classList.add("color-purple");
//     colorPurple.type = "radio";
//     colorPurple.name = "color";
//     colorPurple.value = "purple";

//     const buttonElement = document.createElement("button");
//     buttonElement.classList.add("button");
//     buttonElement.textContent = "Добавить заметку";
//     buttonElement.type = "submit";

//     const showFavoriteTasksWrapper = document.createElement("div");
//     showFavoriteTasksWrapper.classList.add("showFavoriteTasksWrapper");

//     const showFavoriteTasksInput = document.createElement("input");
//     showFavoriteTasksInput.type = "checkbox";
//     showFavoriteTasksInput.id = "showFavoriteTasks";
//     showFavoriteTasksInput.name = "showFavoriteTasks";

//     const showFavoriteTasksLabel = document.createElement("label");
//     showFavoriteTasksLabel.textContent = "Показать только избранные заметки";
//     showFavoriteTasksLabel.setAttribute("for", "showFavoriteTasks");

//     const list = document.createElement("ul");
//     list.classList.add("list");

//     const messageBox = document.createElement("div");
//     messageBox.classList.add("messageBox");


//     app.append(header,main)
//     main.append(form, showFavoriteTasksWrapper, list,messageBox);
//     header.append(headerImageWrapper, headerCouterTasksWrapper);
//     headerImageWrapper.append(headerImage);
//     headerCouterTasksWrapper.append(
//       headerCounterTasksImage,
//       headerCounterTasks
//     );
//     form.append(inputContainer, descriptionContainer, buttonContainer);
//     inputContainer.append(labelInput, inputForm);
//     descriptionContainer.append(labelTextarea, textarea);
//     buttonContainer.append(colorWrap, buttonElement);
//     colorWrap.append(colorYellow, colorGreen, colorBlue, colorRed, colorPurple);
//     showFavoriteTasksWrapper.append(
//       showFavoriteTasksInput,
//       showFavoriteTasksLabel
//     );

//     this.renderTasks(model.tasks);

//     const radioButtons = document.querySelectorAll('input[name="color"]');

//     form.addEventListener("submit", (event) => {
//       event.preventDefault();
//       const title = inputForm.value;
//       const description = textarea.value;
//       let setColor;
//       radioButtons.forEach((radio) => {
//         if (radio.checked) {
//           setColor = radio.value;
//           console.log(setColor);
//         }
//       });
//       controller.addTask(title, description, setColor);
//       inputForm.value = "";
//       textarea.value = "";
//     });

//     list.addEventListener("click", (event) => {
//       const item = event.target;
//       if ((item.tagName = "li")) {
//         const taskId = Number(item.parentElement.id);
//         controller.chooseTask(taskId);
//       }
//       if (item.classList.contains("delete-button")) {
//         const taskId = Number(item.parentElement.id);
//         controller.deleteTask(taskId);
//       }
//     });

//     showFavoriteTasksInput.addEventListener("change", () => {
//       model.toggleShowOnlyFavorite(showFavoriteTasksInput.checked);
//       // this.renderTasks(model.tasks);
//       // console.log(this.checked ? "checked" : "not checked");
//     });
//   },
//   renderTasks(tasks) {
//     const list = document.querySelector(".list");

//     const favoriteTasksCount = document.querySelector(".header-counter-tasks");
//     favoriteTasksCount.textContent = `Всего заметок: ${model.getTasksCount()}`;

//     list.replaceChildren();

//     if (tasks.length === 0) {
//       const noTasksMessage = document.createElement("li");
//       noTasksMessage.classList.add("noTaskMessage")
//       noTasksMessage.textContent = "У вас нет еще ни одной заметки. Заполните поля выше и создайте свою первую заметку!";
//       noTasksMessage.style.textAlign = "center";
//       list.append(noTasksMessage);
//     } else {
//       tasks.forEach((task) => {
//         const li = document.createElement("li");
//         li.id = task.id;
//         li.className = `${task.color} ${task.isChoose ? "done" : ""}`;

//         const title = document.createElement("h3");
//         title.classList.add("task-title");
//         title.textContent = task.title;

//         const deleteButton = document.createElement("button");
//         deleteButton.classList.add("delete-button");
//         deleteButton.textContent = "Delete 🗑";

//         const text = document.createElement("p");
//         text.classList.add("task-text");
//         text.textContent = task.text;

//         li.append(title, deleteButton, text);

//         list.prepend(li);
//       });
//     }
//   },
//   createModal(message, icon, type){
//     const messageBox = document.querySelector(".messageBox");
//     const newMessage = document.createElement("div")
//     newMessage.classList.add("message", type)

//     const iconMessage = document.createElement("img");
//     iconMessage.src = icon;
//     const text = document.createElement("p");
//     text.textContent = message;
//     messageBox.append(newMessage);
//     newMessage.append(iconMessage,text)
//     // setTimeout(()=>{
//     //   text.remove();
//     // },3000)
    
//   }
// };

// const controller = {
//   addTask(title, description, setColor) {
//     if (title.trim() !== "" && description.trim() !== "") {
//       model.addTask(title, description, setColor);
//       view.createModal("Заметка добавлена", SUCCESS ,"success");
//     }
//     if(title.length > 50 && description.trim() !== ""){
//       view.createModal("Максимальная длина заголовка - 50 символов", ERROR,"error");
//     }
//     if(title.trim() == "" || description.trim() == ""){
//       view.createModal("Заполните все поля.", ERROR,"error");
//     }
    
//   },
//   deleteTask(taskId) {
//     model.deleteTask(taskId);
//     view.createModal("Заметка удалена", SUCCESS ,"success");
//   },
//   chooseTask(taskId) {
//     model.chooseTask(taskId);
//   },
// };

view.init();
