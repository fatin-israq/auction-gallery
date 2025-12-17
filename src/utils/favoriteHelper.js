export const inFavorite = (item, favorites) => {
  // const inFav = favorites.some((fav) => fav.id === item.id);
  let inFav = false;
  for (let i = 0; i < favorites.length; i++) {
    if (item.id === favorites[i].id) {
      inFav = true;
      return inFav;
    }
  }
};
