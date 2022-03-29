
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// STYLE
const StylePanell = styled.div`
  padding: 2rem 1rem 2rem 1rem;
  width: 300px;
  border: solid 3px;
  border-radius: 20px;
  margin-top: 1rem;
`;


function Panell({ pagesAndLanguages }) {
  
  const [pages, setPages] = useState(0);
  const [languages, setLanguages] = useState(0);

  useEffect(() => {
    pagesAndLanguages(pages, languages)
  
  }, [pages, languages]);

  const handleOnChangePages = (event) => {
    setPages(event.target.value)
  }

  const handleOnChangeLanguages = (event) => {
    setLanguages(event.target.value)
  }

  return (
    <StylePanell>
      <label>
        Número de páginas:
        <input
          type="text"
          id=""
          name=""
          value={pages}
          onChange={handleOnChangePages}
        />
      </label>
      <br />
      <label>
        Número de idiomas:
        <input
          type="text"
          id=""
          name=""
          value={languages}
        onChange={handleOnChangeLanguages}
        />
      </label>
    </StylePanell>
  );
}

export default Panell;
