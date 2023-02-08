const addFavorite = (room) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (favorites.some((favorite) => favorite.id === room.id)) return;
  favorites.push(room);

  localStorage.setItem("favorites", JSON.stringify(favorites));
};
const removeFavorite = (room) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favorites.some((favorite) => favorite.id === room.id)) return;
  const removed = favorites.filter((favorite) => favorite.id !== room.id);

  localStorage.setItem("favorites", JSON.stringify(removed));
};

export { addFavorite, removeFavorite };
