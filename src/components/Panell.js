import React, { useEffect } from "react";
import styled from "styled-components";
import "./panell.css";
import { useLocalStorage } from "../useLocalStorage";
import info1 from "./info-1.png";

// STYLE
const StylePanell = styled.div`
  padding: 2rem 1rem 2rem 1rem;
  width: 350px;
  border: solid 3px;
  border-radius: 20px;
  margin-top: 1rem;
  font-size: 18px;
`;

function Panell({ pagesAndLanguages, openInfoPages, openInfoLanguages }) {

  // HOOKS
  const [pages, setPages] = useLocalStorage("pages", 1);
  const [languages, setLanguages] = useLocalStorage("languages", 1);

  useEffect(() => {
    pagesAndLanguages(pages, languages);
  }, [pages, languages]);

  // METHODS
  const handleOnChangePages = (event) => {
    setPages(event.target.value);
  };

  const handleOnChangeLanguages = (event) => {
    setLanguages(event.target.value);
  };

  const plusPages = (e) => {
    setPages(parseInt(pages + 1));
    e.preventDefault()
  };
  const lessPages = (e) => {
    if(pages > 1 ){
    setPages(parseInt(pages - 1));
    }
    e.preventDefault()
  };
  const plusLanguages = (e) => {
    setLanguages(parseInt(languages + 1));
    e.preventDefault()
  };
  const lessLanguages = (e) => {
    if(languages > 1 ){
    setLanguages(parseInt(languages - 1));
    }
    e.preventDefault()
  };

  return (
    <StylePanell>
      <label>
        Número de páginas
        <button onClick={plusPages}>+</button>
        <input
          type="text"
          id=""
          name=""
          value={pages}
          onChange={handleOnChangePages}
        />
        <button onClick={lessPages}>-</button>
        <img onClick={openInfoPages} src={info1} alt="info"></img>
      </label>
      <br />
      <label>
        Número de idiomas
        <button onClick={plusLanguages}>+</button>
        <input
          type="text"
          id=""
          name=""
          value={languages}
          onChange={handleOnChangeLanguages}
        />
        <button onClick={lessLanguages}>-</button>
        <img onClick={openInfoLanguages} src={info1} alt="info"></img>
      </label>
    </StylePanell>
  );
}

export default Panell;
