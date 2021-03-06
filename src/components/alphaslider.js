import React, { useState, useContext } from 'react'
import styled from 'styled-components';
import ReactSlider from "react-slider";
import { AppContext } from '../pages/application'
import OpacitySliderIcon from './icon-components/opacityicon'

const trackStyles = (props) => {
    return (`
        background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,${props.containerVal / 100}) 100%);
        `
    )
}

const SliderContainer = styled.div`
    grid-column: 3;
    grid-row: 1/-1;
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
`

const StyledSlider = styled(ReactSlider)`
    height: 100%;
    width: 100%;
`;

const StyledThumb = styled.div`
padding-top:0.5vh;
padding-right: 2vw;
    width: 100%;
    height: 8vh;
    position: relative;
    cursor: grab;
    outline: none;
    display: flex;
    justify-content: flex-end;
      &:active {
        border-width: 0;
    }
    svg {
       height: 80%;
       width: 50%;
       margin-top: 2%;
    }
`;

const Thumb = (props, state) => {
    return (
        <StyledThumb  {...props}>
            <OpacitySliderIcon />
        </StyledThumb>
    )
};

const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    right: 4vw;
    width: 8vw;
    transform: translateY(8vh);
    &.trackA-0 {
        ${props => trackStyles(props)}
        animation: fadeIn 300ms ease-in forwards;
    }
    &.trackB-0 {
        top: 20vh;
        ${props => trackStyles(props)}
        animation: fadeOut 1s ease-in forwards;
    }
`;

const Track = (props, state) => {
    return (
        <StyledTrack
            {...props}
            index={state.index}
            containerVal={state.value}
        />
    )
};

const AlphaSlider = () => {
    const { topAlphaVal,
        setTopAlphaVal,
        alphaModifyMode,
        setAlphaModifyMode,
        tapMode,
        addImageMode
    } = useContext(AppContext);

    const [sliderOpenToggle, setSliderOpenToggle] = useState(false);


    const handleSliderClick = () => {
        setSliderOpenToggle(!sliderOpenToggle)
    }

    //necessary for feeding new values to parent container
    const handleChange = (val) => {
        setTopAlphaVal(val)
    }
    const handleBefore = (val) => {
        setAlphaModifyMode(true)
    }
    const handleAfter = (val) => {
        setAlphaModifyMode(false)
    }

    return (
        <>
            {(tapMode && !addImageMode) ?
                <SliderContainer className="slider-container"
                    onTouchStart={handleBefore}
                    onClick={handleSliderClick}
                >
                    <StyledSlider
                        defaultValue={[topAlphaVal]}
                        trackClassName={alphaModifyMode ? "trackA" : "trackB"}
                        renderTrack={Track}
                        renderThumb={Thumb}
                        onBeforeChange={(val) => handleBefore(val)}
                        onChange={handleChange}
                        onAfterChange={(val) => handleAfter(val)}
                        orientation="vertical"
                        invert
                        topAlphaVal={topAlphaVal}
                    />
                </SliderContainer> :
                ''}
        </>
    )
}

export default AlphaSlider;
