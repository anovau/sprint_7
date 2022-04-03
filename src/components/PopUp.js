import styled from "styled-components";

function PopUp(props) {

  return (
    <>
      <Cover onClick={props.closePopUp} >
        <PopUpContainer>
          <p>{props.infoText}</p>
        </PopUpContainer>
      </Cover>
    </>
  );
}

export default PopUp;

// STYLED

const Cover = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopUpContainer = styled.div`
border-width: 3px;
border-style: solid;
border-radius: 20px;
background-color: white;
padding: 1rem 2rem 1rem 2rem;


`;
