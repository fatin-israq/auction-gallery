import { useState } from "react";
import Hero from "./components/Hero";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import FollowCursor from "./utils/FollowCursor";

function App() {
  const [favorites, setFavorites] = useState([]);

  const handleFav = (item) => {
    const newFavorites = [...favorites, item];
    setFavorites(newFavorites);
  };

  const handleRemoveFav = (item) => {
    const newFavorites = favorites.filter((fav) => {
      return fav.id !== item.id;
    });
    console.log(newFavorites);
    setFavorites(newFavorites);
  };

  return (
    <>
      <FollowCursor></FollowCursor>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="flex justify-between gap-10 m-20">
        <Items handleFav={handleFav} />
        <Result
          favorites={favorites}
          handleRemoveFav={handleRemoveFav}
        ></Result>
      </div>
    </>
  );
}

export default App;
