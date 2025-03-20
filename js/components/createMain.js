import { createForm } from "./createForm.js";
import {createShowFavorite} from "./createShowFavorite.js";

export const createMain = () =>{

    const form = createForm();
    const showFavoriteTasksWrapper = createShowFavorite();
    
    const main = document.createElement("main");
    main.classList.add("main");

    const list = document.createElement("ul");
    list.classList.add("list");

    const messageBox = document.createElement("div");
    messageBox.classList.add("messageBox");

    main.append(form, showFavoriteTasksWrapper, list, messageBox);

    return main;
}