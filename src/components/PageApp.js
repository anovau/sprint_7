import "./PageApp.css";
import React, { useState, useEffect } from "react";
import Panell from "./Panell";
import PopUp from "./PopUp";

function PageApp() {
  // HOOKS
  const [budget, setBudget] = useState(0);
  const [budgetPanell, setBudgetPanell] = useState(0);
  const [checkedWeb, setCheckedWeb] = useState(false);
  const [popUpPages, setPopUpPages] = useState(false)
  const [popUpLanguages, setPopUpLanguages] = useState(false)

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
        setCheckedWeb(event.target.checked)
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

  const closePopUp = () => {
    setPopUpPages(false);
    setPopUpLanguages(false);
  }

  return (
    <main>
      <card>
        <form>
          <p>¿Qué quieres hacer?</p>
          <label>
            <input
              type="checkbox"
              value="500"
              onChange={addToBudget}
            />
            Una página web (500€)
          </label>
          {checkedWeb ? <Panell pagesAndLanguages={addToBudgetPanell} openInfoPages={() => setPopUpPages(true)} openInfoLanguages={() =>setPopUpLanguages(true)} /> : ""}
          <br />
          <label>
            <input 
              type="checkbox"
              value="300"
              onChange={addToBudget}
               />
            Una consultoria SEO (300€)
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="200"
              onChange={addToBudget}
            />
            Una campaña de Google Ads (200€)
          </label>
          <p>Precio: {budget}€</p>
        </form>
      </card>
      {popUpPages ? <PopUp infoText="En este componente debe indicar el numero de páginas que tendrá su sitio web." closePopUp={closePopUp} />  : ""}
      {popUpLanguages ? <PopUp infoText="En este componente debe indicar el numero de idiomas que tendrá su sitio web." closePopUp={closePopUp} /> : ""}
    </main>
  );
}

export default PageApp;
