 import { view } from "./view.js";
 
 export const model = {
    tasks: [],
    isShowOnlyFavorite: false,
    addTask(title, description, setColor) {
      const task = {
        title: title,
        text: description,
        id: new Date().getTime(),
        isChoose: false,
        color: setColor,
      };
      this.tasks.push(task);
      // view.renderTasks(this.tasks);
      this.updateNotesView()
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter((task) => {
        return task.id !== taskId;
      });
      // view.renderTasks(this.tasks);
      this.updateNotesView()
    },
    chooseTask(taskId) {
      this.tasks = this.tasks.map((task) => {
        if (task.id === taskId) {
          task.isChoose = !task.isChoose;
        }
        return task;
      });
  
      // view.renderTasks(this.tasks);
      this.updateNotesView()
    },
    getTasksCount() {
      return this.tasks.length;
    },
    toggleShowOnlyFavorite(isShowOnlyFavorite) {
      this.isShowOnlyFavorite = isShowOnlyFavorite;
      this.updateNotesView();
      // view.renderTasks(this.tasks);
    },
    updateNotesView() {

      const notesToRender = this.isShowOnlyFavorite 
          ? this.tasks.filter(task => task.isChoose) 
          : this.tasks; 
  
      console.log(notesToRender); 
  
      view.renderTasks(notesToRender);
    },
  };