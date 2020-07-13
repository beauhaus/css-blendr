import React from 'react';
import styled from 'styled-components'

const LuminosityWrapper = styled.g`
   
   .st2,
    .st4,
    .st5{fill:none;stroke:#fff;stroke-width:3;}
    .st4,
    .st5{stroke:#000;stroke-width:2}
    .st5{stroke:#fff;stroke-width:5}
 
    #cover {
  mix-blend-mode: overlay;
  opacity: .8;
}
#rays {
  transform-origin: 50% 50%;
  transform: translate(21%, 32%) scale( 2, 2);
}
`

const LuminosityIcon = () => (
    <LuminosityWrapper>
        <filter id="lightFilter" >
            <feDiffuseLighting surfaceScale="3" diffuseConstant="5" lightingColor="#fff" x="0%" y="0%" width="100%" height="100%" result="diffuseLighting3">
                <fePointLight id="light" x="144" y="190" z="10" />
            </feDiffuseLighting>
        </filter>
        <filter id="flare-blur">
            <feGaussianBlur stdDeviation="3"></feGaussianBlur>
        </filter>
        <clipPath id="clipPath">
            <circle cx="150" cy="150" r="150" />
        </clipPath>
        <g clipPath="url(#clipPath)">
            <circle className="icon-bg" cx="150" cy="150" r="150" filter="url(#lightFilter)" />
            <path id="rays" fill="none" stroke="#fff" strokeWidth="0.5" d="M116.56 115.75l43.25 106.02-43.25-106.02L73.3 9.73l43.26 106.02-106.02 43.26 106.02-43.26 106.01-43.26-106.01 43.26 67.21 92.7-67.21-92.7-67.21-92.7 67.21 92.7-92.71 67.21 92.71-67.21 92.7-67.21-92.7 67.21 107.94 38.19-107.94-38.19L8.61 77.56l107.95 38.19-38.2 107.94 38.2-107.94L154.75 7.81l-38.19 107.94 38.79 107.73-38.79-107.73L77.76 8.02l38.8 107.73-107.73 38.8 107.73-38.8 107.72-38.8-107.72 38.8 1.86 114.49-1.86-114.49-1.87-114.49 1.87 114.49-114.49 1.86 114.49-1.86 114.48-1.86-114.48 1.86 94.03 65.33-94.03-65.33-94.04-65.33 94.04 65.33-65.34 94.03 65.34-94.03 65.33-94.03-65.33 94.03 36 108.69-36-108.69L80.55 7.06l36.01 108.69-108.7 36.01 108.7-36.01 108.69-36.01-108.69 36.01 9.36 114.12-9.36-114.12-9.37-114.12 9.37 114.12-114.12 9.36 114.12-9.36 114.11-9.36-114.11 9.36 30.63 110.33-30.63-110.33L85.93 5.42l30.63 110.33L6.23 146.38l110.33-30.63 110.32-30.63-110.32 30.63.68 114.5-.68-114.5-.69-114.5.69 114.5-114.5.69 114.5-.69 114.5-.69-114.5.69 94.04 65.32-94.04-65.32-94.05-65.32 94.05 65.32-65.32 94.04 65.32-94.04 65.31-94.04-65.31 94.04 112.16 23.02-112.16-23.02L4.39 92.73l112.17 23.02-23.02 112.16 23.02-112.16L139.57 3.59l-23.01 112.16 114.26 7.3-114.26-7.3-114.27-7.3 114.27 7.3-7.31 114.27 7.31-114.27 7.3-114.27-7.3 114.27 107.06 40.58-107.06-40.58L9.49 75.17l107.07 40.58-40.59 107.07 40.59-107.07L157.14 8.68l-40.58 107.07 114.47 2.62-114.47-2.62-114.48-2.62 114.48 2.62-2.63 114.47 2.63-114.47 2.62-114.47-2.62 114.47 87.07 74.35-87.07-74.35L29.48 41.4l87.08 74.35-74.35 87.08 74.35-87.08 74.35-87.08-74.35 87.08 12.27 113.84-12.27-113.84L104.28 1.91l12.28 113.84L2.71 128.03l113.85-12.28 113.84-12.28" opacity=".1" />

            <circle id="cover" cx="150" cy="150" r="150" fill="#000" />
            <g id="blenderbody_1_">
                <g id="base_1_">
                    <path d="M89.03 236.5c28.26 8.68 56.97 15.45 86.12 20.32 2.02.48 4.07-.91 4.58-3.1 5.41-7.86-87.41-22.72-88.84-25.15-4.69-1.18-6.63 6.88-1.86 7.93z" className="st2" />
                    <path d="M82.87 226.68c32.22 9.31 64.82 17.01 97.8 23.08 5.01 1.15 8.12-12 3.12-13.21 0 0-8.19 5.32-51.06-5.64-49.04-10.47-45.74-24.5-51.69-12.8-1.08 3.04-1.11 8.01 1.83 8.57z" className="st2" />
                </g>
                <g id="pitcher_1_">
                    <path d="M231.27 137.98c17.84-24.2 61.19-75.6 7.17-72.15l-5.42 3.36s-.69 7.22-.62 9.14c39.46-22.41-1.83 52.5-14.59 55.31-2.38.52-12.69-.78-13.62.12-2.23 2.17-5.71 8.08-5.71 8.08 7.5-6.89 20.97 1.32 32.79-3.86zM192.36 157.79c.43-1.82-1.18-3.76-3.6-4.33-22.86-4.33-45.25-9.59-67.15-15.85-5.65-1.4-7.27 5.31-1.56 6.59" className="st2" />
                    <path d="M121.61 137.61l66.89 16.95c21.32-26.63 37.32-54.55 46.08-84.23-.56 2.38-107.08-22.95-119.7-28.25-12.88-4.2 3.81 10.31 3.03 15.7-2.63 18.17.15 58.32 3.7 79.83zM132.44 130.89c-4.07-13.11-7.04-50.83-4.72-64.91M127 65.81l18.24 4.31M126.35 77.37l8.97 2.12M127.45 86.91l8.98 2.12M128.17 96.36l7.29 1.72M129.27 105.9l8.97 2.12M130.37 113.12l5.84 1.38M131.48 122.66l13.13 3.1M133.27 131.2l8.98 2.12" className="st2" />
                </g>
                <g id="top_1_">
                    <path d="M162.32 39.89l32 7.78c5.87 1.88 7.29-.24 5.91-3.68.89-10.21-27.74-12.95-35.56-13.76-2.62-.63-5.26 1.01-5.91 3.68-3.68 2.35-1.54 5.09 3.56 5.98z" className="st2" />
                    <path d="M231.52 63.32c3.77-8.6-110.27-36.54-111.57-27.12-47.15-.38 132.39 46.11 111.57 27.12z" className="st2" />
                </g>
            </g>
            <g id="face_1_">
                <path id="faceback_1_" fill="#fff" stroke="#fff" d="M90.9 219.24c12 2.04 92.19 30.17 94.92 15.71l3.99-32.35-1.79-35.75c.83-3.5-1.12-6.96-4.34-7.72l-59.85-14.12c-3.22-.76-6.51 1.46-7.33 4.96l-17.89 30.08-12.05 31.46c-.83 3.52 1.12 6.97 4.34 7.73z" />
                <path d="M120.04 174.49s13.46-13.46 16.82 4.2M153.67 183.03s14.84-11.91 16.26 6.01M125.08 195.51s5.05 20.18 22.71 7.57" className="st4" />
            </g>
            <path d="M98.59 179.96L76.73 166.5H70M74.89 158.61l2.1 7.39M189.42 202.66l31.12.84 5.88 4.21M223.06 197.62l-2.52 5.88" className="st5" />

            <radialGradient id="top-left-grad" >
                <stop offset=".24" stopOpacity="0.5" />
                <stop offset=".6996" stopColor="red" stopOpacity="1" />
                <stop offset=".8204" stopColor="#38d1f0" stopOpacity="0.4" />
                <stop offset=".8345" stopColor="#3cbbf3" />
                <stop offset=".8479" stopColor="#3eaef4" stopOpacity="0.5" />
                <stop offset=".9474" stopColor="#3eaef4" stopOpacity="0" />
            </radialGradient>

            <circle fill="url(#top-left-grad)" cx="30" cy="52" r="94" opacity=".4" />
            <g filter="url(#flare-blur)">
                <path fill="yellow" opacity=".2" d="M95.29 144.54l-26.01 12.97-24.24-16.05 1.78-29.01 26.02-12.97 24.23 16.05z" />
                <path fill="fuchsia" opacity=".2" d="M229.51 285.65l-49.3-25.96-3.07-55.63 46.22-29.67 49.29 25.97 3.08 55.63z" />
                <path fill="lightgreen" opacity=".3" d="M74.25 105.9l-15.24 7.59-14.19-9.4 1.04-16.99 15.24-7.6 14.19 9.4z" />
            </g>
        </g>
    </LuminosityWrapper>
)

export default LuminosityIcon;
