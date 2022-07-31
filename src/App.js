import "./App.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("0");
  const [height, setHeight] = useState("0");
  const [superPower, setsuperPower] = useState("");
  const [dislayCharacter, setDisplayCharacter] = useState(false);
  return (
    <div className="App">
      <h1>Build a Hero</h1>
      <div>
        <label>Name: </label>
        <input
          type="text"
          style={{ margin: 10 }}
          onChange={(event) => setName(event.target.value)}
        />
        <label>Age: </label>
        <input
          type="number"
          style={{ margin: 10 }}
          onChange={(event) => setAge(event.target.value)}
        />
        <label>height: </label>
        <input
          type="number"
          style={{ margin: 10 }}
          onChange={(event) => setHeight(event.target.value)}
        />
        <label>superPower: </label>
        <input
          type="text"
          style={{ margin: 10 }}
          onChange={(event) => setsuperPower(event.target.value)}
        />
      </div>
      <button
        onClick={() => {
          setDisplayCharacter(true);
        }}
      >
        Display character
      </button>
      <div>
        <h1>Hero info</h1>
        {dislayCharacter && (
          <div>
            <ul>
              <li>Nme:{name}</li>
              <li>Age:{age}</li>
              <li>Height:{height}</li>
              <li>superPower:{superPower}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
