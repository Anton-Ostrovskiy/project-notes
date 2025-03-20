export const createForm = () => {
  const form = document.createElement("form");
  form.classList.add("form");

  const inputContainer = document.createElement("div");
  inputContainer.classList.add("input-container");

  const labelInput = document.createElement("label");
  labelInput.setAttribute("for", "taskTitle");
  labelInput.textContent = "Название заметки ";

  const inputForm = document.createElement("input");
  inputForm.id = "taskTitle";
  inputForm.classList.add("input");
  inputForm.type = "text";
  inputForm.placeholder = "Напишите название новой заметки...";

  const bottomHeaderContainer = document.createElement("div");
  bottomHeaderContainer.classList.add("bottom-header-container");

  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("description-container");

  const labelTextarea = document.createElement("label");
  labelTextarea.setAttribute("for", "taskDescription");
  labelTextarea.textContent = "Описание новой заметки";

  const textarea = document.createElement("textarea");
  textarea.id = "taskDescription";
  textarea.classList.add("textarea");
  textarea.placeholder = "Напишите описание новой заметки...";

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  const titleColor = document.createElement("p");
  titleColor.classList.add("title-color");
  titleColor.textContent = "Выберите цвет заметки";

  const colorWrap = document.createElement("div");
  colorWrap.classList.add("colorWrap");

  const colorYellow = document.createElement("input");
  colorYellow.classList.add("color-yellow");
  colorYellow.setAttribute("checked", "");
  colorYellow.type = "radio";
  colorYellow.name = "color";
  colorYellow.value = "yellow";

  const colorGreen = document.createElement("input");
  colorGreen.classList.add("color-green");
  colorGreen.type = "radio";
  colorGreen.name = "color";
  colorGreen.value = "green";

  const colorBlue = document.createElement("input");
  colorBlue.classList.add("color-blue");
  colorBlue.type = "radio";
  colorBlue.name = "color";
  colorBlue.value = "blue";

  const colorRed = document.createElement("input");
  colorRed.classList.add("color-red");
  colorRed.type = "radio";
  colorRed.name = "color";
  colorRed.value = "red";

  const colorPurple = document.createElement("input");
  colorPurple.classList.add("color-purple");
  colorPurple.type = "radio";
  colorPurple.name = "color";
  colorPurple.value = "purple";

  const buttonElement = document.createElement("button");
  buttonElement.classList.add("button-add");
  buttonElement.textContent = "Добавить заметку";
  buttonElement.type = "submit";

  const buttonIconElement = document.createElement("img");
  buttonIconElement.src = "../images/plus-button.svg";

  form.append(inputContainer, bottomHeaderContainer);
  bottomHeaderContainer.append(descriptionContainer, buttonContainer);
  inputContainer.append(labelInput, inputForm);
  descriptionContainer.append(labelTextarea, textarea);
  buttonContainer.append(titleColor, colorWrap, buttonElement);
  buttonElement.append(buttonIconElement);
  colorWrap.append(colorYellow, colorGreen, colorBlue, colorRed, colorPurple);

  return form;
};
