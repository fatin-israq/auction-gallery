// import { useState } from "react";
import Hero from "./components/Hero";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import FollowCursor from "./utils/FollowCursor";

function App() {
  return (
    <>
      <FollowCursor></FollowCursor>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="flex justify-between gap-10 m-20">
        <Items />
        <Result />
      </div>
    </>
  );
}

export default App;
