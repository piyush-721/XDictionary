import { useState } from 'react';
import './App.css';

function App() {
  let data = 
[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

];

const [value, setValue] = useState("");
const [meaning, setMeaning] = useState("");

  const handleSearch = () => {
    const searchWord = value;
    for(let i = 0; i < data.length; i++){
      if(data[i].word === searchWord){
        setMeaning(data[i].meaning);
        break;
      }
      else{
        setMeaning("Word not found in the dictionary.");
      }
    }
  }

  return (
    <div >
      <h1>Dictionary App</h1>

      <input type="text" value={value} onChange={(e) => setValue(e.target.value)}></input>
      <button onClick={handleSearch}>Search</button> <br />
      <h3>Definition:</h3> <p>{meaning}</p>

    </div>
  );
}

export default App;
