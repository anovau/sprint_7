import "./App.css";
import React, { useState, useEffect } from "react";
import Panell from "./components/Panell";

function App() {
  // HOOKS
  const [budget, setBudget] = useState(0);
  const [checkedWeb, setCheckedWeb] = useState(false);
  const [budgetPanell, setBudgetPanell] = useState(0);

  useEffect(() => {
    setBudget(budget + budgetPanell);
  }, [budgetPanell]);

  // METHODS
  const addToBudget = (event) => {
    if (event.target.checked) {
      setBudget(budget + parseInt(event.target.value));

      if (event.target.value == 500) {
        setCheckedWeb(event.target.checked);
      }
    } else {
      setBudget(budget - parseInt(event.target.value));

      if (event.target.value == 500) {
        setCheckedWeb(event.target.checked);
      }
    }
  };

  const addToBudgetPanell = (pages, languages) => {
    reset();
    setBudgetPanell(parseInt(pages * languages * 30));
  };

  const reset = () => {
    setBudget(budget - budgetPanell);
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
      {checkedWeb ? <Panell pagesAndLanguages={addToBudgetPanell} /> : ""}
      <br />
      <label>
        <input type="checkbox" name="" value="300" onChange={addToBudget} />
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
