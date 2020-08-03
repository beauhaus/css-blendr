import React, { useState, createContext } from "react";
import styled from "styled-components";
// import { Link } from 'react-scroll'
// import { animateScroll } from 'react-scroll'
// import { gsap } from "gsap";
// import 'typeface-rajdhani'

// import MixModeDisplay from '../components/test/refactor/mixmodedisplay'

// export const AppContext2 = createContext();
import RenderTester from "../components/test/refactor/rendertester";

const PageDWrapper = styled.div`
  ${"" /* background: slategrey; */}
  width: 100vw;
  height: auto;
  padding-top: 20vh;
  display: grid;
  place-items: center;
  button {
    border: 1px solid #fff;
    background: violet;
    margin: 2vh;
    color: #fff;
  }
`;

const PageD = () => {
  const [renderVal, setRenderVal] = useState(0);
  const [mixModNum2, setMixModeNum2] = useState(0);
  const mixModesArray2 = [
    "abnormal",
    "Multiply",
    "Colour-burn",
    "abnormal",
    "Multiply",
    "abnormal",
    "Multiply",
    "abnormal",
    "Multiply",
    "abnormal",
    "Multiply",
    "Colour-burn",
    "abnormal",
    "Multiply",
    "abnormal",
    "Multiply",
    "abnormal",
    "Multiply",
    "abnormal",
    "Multiply",
    "Colour-burn",
    "abnormal",
    "Multiply",
    "abnormal",
    "Multiply",
    "abnormal",
    "Multiply",
  ];

  const btnClickHandler = () => {
    console.log("clicked");
    setRenderVal(renderVal + 1);
  };
  return (
    <PageDWrapper className="page-d-wrapper">
      <button onClick={btnClickHandler}>HOLY SHIT</button>
      <RenderTester input={renderVal} />
    </PageDWrapper>
  );
};

export default PageD;
