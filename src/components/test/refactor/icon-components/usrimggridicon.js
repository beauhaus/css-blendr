import React, { useEffect, useRef, useContext } from "react";
import styled from 'styled-components'
// import { gsap, Power4 } from "gsap";
import { AppContext } from '../../../../pages/page-b'

const StyledUsrImgGridIcon = styled.svg`
    width: 100%;
    height: 100%;
    .inner-shadow {
        opacity: .2;
    }
    .plus {
       stroke-width: 2;
       stroke: var(--idle-lt-grey-2); 
       fill: var(--idle-lt-grey-2);
    }
    ${'' /* .cloud {
        stroke-width: 0;
        fill: var(--active-lt-grey-1);
        stroke: var(--active-lt-grey-1);           
    } */}
`

const UsrImgGridIcon = () => {
    const {
        addImageMode,
        usrImgMode
    } = useContext(AppContext);

    let plusRef = useRef(null);
    let mtnRef = useRef(null);
    let cloudRef = useRef(null);

    // useEffect(() => {
    //    const tl = gsap.timeline();
    //    if (!usrImgMode) {
    //         tl
    //             .to(cloudRef, 0, { y: 0, fillOpacity: 0, ease: "Elastic.easeInOut(1.2, .5)" }, '-=0')
    //             .to(cloudRef, .5, { y: -350, ease: "Elastic.easeInOut(1.2, .5)" }, '-=0')
    //             .to(plusRef, .4, { opacity: 1 }, '-=.4')
    //             .to(plusRef, .4, { attr: { points: "280,40 320,40 320,80 360,80 360,120 320,120 320,160 280,160 280,120 240,120 240,80 280,80" }, ease: Power4.easeInOut }, '-=.4')
    //             .to(mtnRef, .4, { x: 0, y: 0, scaleX: 1, ease: Power4.easeInOut }, '-=.4')
    //     } else if (usrImgMode) {
    //         tl
    //             .to(mtnRef, .7, { x: -600, y: 400, scaleX: 2, ease: Power4.easeInOut }, '-=0')
    //             .to(plusRef, .4, { attr: { points: "200,160 200,160 240,200 280,240 280,240 240,240 240,320 160,320 160,240 120,240 120,240 160,200" }, ease: Power4.easeInOut }, '-=.5')
    //             .to(cloudRef, .4, { y: 0, ease: "Elastic.easeInOut(1.2, .5)" }, '-=.3')
    //             .to(plusRef, .3, { opacity: 0 }, '-=.1')
    //             .to(cloudRef, .2, { fillOpacity: 1 }, '-=.2')
    //     }

    // }, [usrImgMode]);

    // only executes on initial load (i.e. sets default positions)
    // useEffect(() => {
    //     const tl = gsap.timeline();
    //     gsap.set(mtnRef, { y: 0, x: 0, scaleX: 1 })
    //     gsap.set(plusRef, { attr: { points: "280,40 320,40 320,80 360,80 360,120 320,120 320,160 280,160 280,120 240,120 240,80 280,80" } })
    //     gsap.set(mtnRef, { y: 0, x: 0, scaleX: 1 })
    //     gsap.set(cloudRef, { y: -350, fillOpacity: 0 })
    // }, [])

    return (
        <StyledUsrImgGridIcon 
        className={usrImgMode ? 'active-btn': 'idle-btn'}
        viewBox="0 0 400 400"
        width="100%"
        height="100%"
        preserveAspectRatio="none">
            <filter id="upload-shadow">
                <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" />
            </filter>
            <rect fill="#000" width="100%" opacity="0.2" />
            <linearGradient id="SVGID_1_" x1="0" x2="400" y1="200" y2="200" gradientTransform="rotate(-90 200 200)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopOpacity=".5" />
                <stop offset=".1" stopOpacity="0" />
                <stop offset=".9" stopOpacity="0" />
                <stop offset="1" stopOpacity=".5" />
            </linearGradient>
            <rect width="100%" className="inner-shadow" fill="url(#SVGID_1_)" />
            <linearGradient id="SVGID_2_" x1="0" x2="400" y1="200" y2="200" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopOpacity=".5" />
                <stop offset=".1" stopOpacity="0" />
                <stop offset=".9" stopOpacity="0" />
                <stop offset="1" stopOpacity=".5" />
            </linearGradient>
            <rect className="inner-shadow" fill="url(#SVGID_2_)" width="100%" />
            <polygon
                filter="url(#upload-shadow)"
                className="plus"
                points="280,40 320,40 320,80 360,80 360,120 320,120 320,160 280,160 280,120 240,120 240,80 280,80"
                // ref={elem => (plusRef = elem)}
                fillOpacity="1"
            />
            <path
                className="mtn"
                fill="none"
                stroke="var(--idle-lt-grey-2)"
                strokeWidth="8"
                d="M1.91 207.55L101.1 90.52l138.49 179.66 80.47-72.99 82.35 112.29"
            />
        </StyledUsrImgGridIcon>
    )
}
export default UsrImgGridIcon;