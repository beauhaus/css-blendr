import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../pages/application'
import PaintIcon from './icon-components/painticon'

const StyledPaintBtn = styled.button`
    position: relative;
    z-index: 3;
    border-radius: 4px;
    width: 25%;
    height: 100%;
    color: #fff;
    background: transparent;
    border-radius: 8px;
    ${'' /* border: 1px dashed #fff; */}
`

const PaintBtn = (props) => {
    const {
        setUsrImgMode,
        setPaintMode,
        paintMode,
        setGridMode
    } = useContext(AppContext);

    const paintImgBtnHandler = () => {
        setPaintMode(true)
        setUsrImgMode(false)
        setGridMode(false)
    }
    return (
        <StyledPaintBtn className="paint-img-grid-btn" onClick={paintImgBtnHandler}>
            <PaintIcon toggle={paintMode} />
        </StyledPaintBtn>
    )
};


export default PaintBtn; 