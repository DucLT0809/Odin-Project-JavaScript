import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const NavBar = () => {
  //   const animals = ["Lion", "Cow", "Snake", "Lizard"];
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Animals: </h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
    </>
  );
};

export default NavBar;
