import React, { useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../../pages/page-b'
import CycleModeBtn from './cyclemodebtn'
import FlipImageBtn from './flipimagebtn'
// import IncrementorLights from './incrementorlights'
import { gsap, Back } from "gsap"; //  , Power4, Expo
import FlipEffectsContainer from './flipeffectscontainer';


const StyledBlendControls = styled.div`
    grid-row: 4;
    width: 96vw;
    height: 100%;
    margin:auto;
    display: flex;
    
    & button {
      margin: auto;
    }
    .cycle-btn-container {
        width: 48vw;
        height: 100%;
        margin: auto;
        display:grid;
    }
    .flip-img-btn-container {
        position: relative;
        width: 48vw;
        height: 100%;
        margin: auto;
        display:grid;
        border-radius: 22px;
        overflow: hidden;
        background: linear-gradient(90deg, #2C3021 0%, #545D49 50%, #5F6B57 100%);
    }
   
    .lines {
            fill:none;
            stroke:#7FB0E4;
            stroke-width:1;
            mix-blend-mode: overlay;
            overflow: hidden;
         }
`

const BlendControls = () => {
 
    return (
        <StyledBlendControls className="blend-controls">
            <div className="flip-img-btn-container">                
                <FlipEffectsContainer />
                <FlipImageBtn />            
            </div>
            <div className="cycle-btn-container">
                <CycleModeBtn />
            </div>
        </StyledBlendControls>
    )
};

export default BlendControls; 