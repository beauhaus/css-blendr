import React from "react";
import styled from "styled-components";
import ImgMenuNavBG from "./icon-components/customnavbg";
import UsrImgGridBtn from "./usrimagegridbtn";
import PaintBtn from "./paintbtn";
import DefaultGridBtn from "./defaultgridbtn";

const StyledImageMenuNav = styled.nav`
  grid-row: 1;
  grid-column: 1/-1;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  box-shadow: 0 5px 5px -5px #000;
  & > button {
    width: 25%;
    display: grid;
    place-items: center;
    svg {
      width: 7vh;
      height: 7vh;
      border-radius: 7px;
      &.active-btn {
        border: 1px solid var(--active-blue);
      }
      &.idle-btn {
        border: 1px solid var(--idle-lt-grey);
        box-shadow: 2px 1px 2px 0 rgba(0, 0, 0, 0.5);
      }
    }
  }
`;
const ImageMenuNav = () => {
  return (
    <StyledImageMenuNav className="img-menu-panel">
      <ImgMenuNavBG />
      <DefaultGridBtn />
      <UsrImgGridBtn />
      <PaintBtn />
    </StyledImageMenuNav>
  );
};

export default ImageMenuNav;
