import React from "react";
import FetchData from "./FetchData";

const URL = "https://official-joke-api.appspot.com/jokes/random";
const Jokes = () => {
  const { punchline, setup } = FetchData(URL, {});

  return (
    <div>
      <h1>Jokes</h1>
      <h3>{setup}</h3>
      <p>
        <em>{punchline}</em>
      </p>
    </div>
  );
};
export default Jokes;
