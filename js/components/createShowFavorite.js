export const createShowFavorite = () => {
  const showFavoriteTasksWrapper = document.createElement("div");
  showFavoriteTasksWrapper.classList.add("showFavoriteTasksWrapper");

  const showFavoriteTasksInput = document.createElement("input");
  showFavoriteTasksInput.type = "checkbox";
  showFavoriteTasksInput.id = "showFavoriteTasks";
  showFavoriteTasksInput.name = "showFavoriteTasks";

  const showFavoriteTasksLabel = document.createElement("label");
  showFavoriteTasksLabel.textContent = "Показать только избранные заметки";
  showFavoriteTasksLabel.setAttribute("for", "showFavoriteTasks");

  showFavoriteTasksWrapper.append(
    showFavoriteTasksInput,
    showFavoriteTasksLabel
  );

  return showFavoriteTasksWrapper;
};
