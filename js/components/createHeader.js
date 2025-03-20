export const createHeader = () => {
  const header = document.createElement("header");
  header.classList.add("header");

  const headerImageWrapper = document.createElement("div");
  headerImageWrapper.classList.add("header-image-wrapper");

  const headerImage = document.createElement("img");
  headerImage.src = "images/📝Notes.svg";

  const headerCouterTasksWrapper = document.createElement("div");
  headerCouterTasksWrapper.classList.add("header-counter-tasks-wrapper");

  const headerCounterTasksImage = document.createElement("img");
  headerCounterTasksImage.src = "images/counter-tasks.svg";

  const headerCounterTasks = document.createElement("p");
  headerCounterTasks.classList.add("header-counter-tasks");

  header.append(headerImageWrapper, headerCouterTasksWrapper);
  headerImageWrapper.append(headerImage);
  headerCouterTasksWrapper.append(headerCounterTasksImage, headerCounterTasks);

  return header;
};
