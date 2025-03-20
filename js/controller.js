import { model } from "./model.js";
import { view } from "./view.js";

const ERROR = "images/error.svg";
const SUCCESS = "images/success.svg";

export const controller = {
    addTask(title, description, setColor) {
      if(title.length > 50){
        view.createModal("Максимальная длина заголовка - 50 символов", ERROR,"error");
        return;
      }
      if(title.trim() == "" || description.trim() == ""){
        view.createModal("Заполните все поля.", ERROR,"error");
        return;
      }

      model.addTask(title, description, setColor);
        view.createModal("Заметка добавлена", SUCCESS ,"success");
      
    },
    deleteTask(taskId) {
      model.deleteTask(taskId);
      view.createModal("Заметка удалена", SUCCESS ,"success");
    },
    chooseTask(taskId) {
      model.chooseTask(taskId);
    },
  };