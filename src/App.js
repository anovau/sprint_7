import "./App.css";
import React, { useState } from "react";

function App() {
  // HOOKS
  const [budget, setBudget] = useState(0);

  //METHODS
  const addToBudget = (event) => {
    if (event.target.checked) {
      setBudget(budget + parseInt(event.target.value));
    } else {
      setBudget(budget - parseInt(event.target.value));
    }
  };

  return (
    <form>
      <p>¿Qué quieres hacer?</p>
      <label>
        <input
          type="checkbox"
          id=""
          name=""
          value="500"
          onChange={addToBudget}
        />
        Una página web (500€)
      </label>
      <br />
      <label>
        <input 
          type="checkbox" 
          name="" 
          value="300" 
          onChange={addToBudget} 
        />
        Una consultoria SEO (300€)
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          id=""
          name=""
          value="200"
          onChange={addToBudget}
        />
        Una campanya de Google Ads (200€)
      </label>
      <p>Preu: {budget}€</p>
    </form>
  );
}

export default App;
