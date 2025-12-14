// import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import FollowCursor from "./utils/FollowCursor";

function App() {
  return (
    <>
      <FollowCursor></FollowCursor>
      <Navbar></Navbar>
      <Hero></Hero>
    </>
  );
}

export default App;
