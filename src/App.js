import React, { useState } from "react";
import Jokes from "./Jokes";
import Stories from "./Stories";

function App() {
  const [serchQuery, setSerchQuery] = useState("");

  //hanlde serch query
  const onchangehander = event => {
    setSerchQuery(event.target.value);
  };
  // Hangle Serch
  const serchHandle = () => {
    window.open(`https://www.google.com/search?q=${serchQuery}`, "_blank");
  };
  // handle serch with Enter key
  const handleKeyPress = keycode => {
    if (keycode.key === "Enter") {
      serchHandle();
    }
  };
  return (
    <div className="container">
      <div className="form">
        <input
          type="text"
          value={serchQuery}
          onChange={onchangehander}
          onKeyPress={handleKeyPress}
        />
        <button onClick={serchHandle}>Search</button>
      </div>

      {/*Random Jokes  */}
      <Jokes />
      <hr />
      {/* Top Stories hacker Rank */}
      <Stories />
    </div>
  );
}

export default App;
