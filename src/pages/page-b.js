import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';


const PageBWrapper = styled.div`
box-shadow: inset 0 0 0 4px slategrey;


 a {
  color: navy;
}
.st0 {
        stroke:#000000;
  }
    .st1 {
      fill:#FFED1C;
      stroke:#000000;
      stroke-width: 0.5;
    }
    .st2 {
      fill:#FFDB73;
      stroke:#000000;
      stroke-width: 0.5;
    }
    .st3 {
      fill:#FFFFFF;
      stroke:#000000;
    }
    .st6 {
      fill:none;
      stroke:#FFFFFF;
      stroke-width:4;
    }
    .st7 {
      fill:none;
      stroke:#FFFFFF;
      stroke-width:5;
    }
    .st8 {
      fill:none;
      stroke:#000000;
    }
    .st9 {
      fill:none;
      stroke:#FFFFFF;
      stroke-width:3;
    }
    .st10 {
      fill:none;
      stroke:#FFFFFF;
      stroke-width:2;
    }
    .st11 {
      fill:none;
      stroke:#000000;
      stroke-width:2;
    }
`
const PageB = (props) => {
  // console.log("p> B: ", props)
  return(
  <PageBWrapper className="page-b-wrapper">
    <h1 className="title">BBBB</h1>
    <Link to="/page-a">GOTO A</Link>
    <Link to="/page-c">GOTO C</Link>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 320">
    <description>Overlay</description>
    <path id="bg_2_" d="M.5.5h360v320H.5z" className="st0" />
    <g id="banana_1_">
      <path d="M314.32 239.65c-49.82 11.85-104.82 9.85-154.1-7.39-6.16-2.47-12.16-5.38-17.95-8.78-15.18-8.93-29-21.34-40.75-37.65-.7.06-1.38.08-2.01.08-1.84 0-4.07-.24-6.35-.76-.13 0-.27.01-.4.01-1.01 0-2.14-.07-3.33-.23 2.98 16.8 10.66 33.15 23.08 45.57 9 9.6 19.32 17.64 30.5 24.02 5.59 3.19 11.39 5.97 17.35 8.32 54.16 23.65 112.16.65 161.77-21.21 5.07-1.52-4.33-2.59-7.81-1.98z" className="st1" />
      <path d="M309.48 240.21c-47.98 6.29-97.98 12.29-143.87-5.61-6.79-2.56-13.34-5.57-19.64-9.15-16.38-9.31-31.07-22.53-43.1-39.76-1.2.15-2.34.22-3.37.22-1.33 0-2.86-.13-4.46-.39 9.47 19.79 22.93 35.06 38.88 46.1 6.02 4.16 12.38 7.73 19.02 10.72 53.56 20.16 114.56 17.16 167.5-3.28-3.63.47-7.27.85-10.96 1.15z" className="st2" />
      <path d="M288.94 291.51c-42.44-8.01-86.44-8.01-124.04-30.75-6.6-3.5-12.96-7.35-19.05-11.56-23.31-16.1-42.61-37.4-54.75-64.1-2.26-.15-4.88-.61-7.38-1.45-4.44 42.75 14.33 83.18 46.79 110.99 4.04 3.45 8.33 6.54 12.81 9.32 26.93 16.68 60.85 22.71 91.64 14.65 5.82-1.31 11.59-3.07 17.24-5.28 5.65-2.21 11.19-4.87 16.55-7.99 3.99-1.29 8.02-2.54 12.15-3.61 4.14-1.06 8.38-1.93 12.8-2.45 5.67.03-1.26-7.06-4.76-7.77z" className="st1" />
      <path d="M284.3 290.13c-3.8-1.63-7.8-4.63-11.8-4.63-39 0-78-8-111.99-27.37-6.46-3.63-12.69-7.61-18.66-11.94-21.76-15.8-40.02-36.29-52.78-61.3-.66-.09-1.34-.21-2.03-.35 12.97 54.2 53.78 102.61 107.72 117.68 6.51 1.34 13.34 2.07 20.51 2.13 6.79.36 13.68.03 20.61-1.09 6.93-1.11 13.91-3 20.88-5.76 3.86-1 8.05-1.75 12.31-2.39 8.42-2.61 17.42-1.61 25.53-1.45-3.46-1.09-6.89-2.26-10.3-3.53z" className="st2" />
      <g>
        <path d="M310.35 256.49c-53.85 5.01-109.85 2.01-159.99-21.08-5.83-3-11.44-6.42-16.79-10.27-13.8-9.94-25.88-22.84-35.51-39.27-1.51-.09-3.19-.32-4.89-.72-.13 0-.28.01-.41.01-1.49 0-3.22-.16-5.03-.49 2.72 43.13 33.64 77.73 72.78 96.83 21.5 10.5 44.75 13.75 67.38 10.5 5.66-.81 11.29-2.03 16.94-3.63 25.68-5.87 45.68-25.87 72.51-28.35 5.42-.7-3.39-3.58-6.99-3.53z" className="st1" />
        <path d="M305.4 256.33c-50.9.17-103.9 5.17-150.56-17.9-6.28-3.07-12.3-6.62-18.01-10.65-14.83-10.49-27.52-24.33-37.09-41.87h-.25c-1.84 0-4.06-.24-6.33-.76-.07 0-.15.01-.22.01 8.42 23.9 23.69 43.78 42.96 58.53 5.32 4.07 10.95 7.76 16.82 11.03 50.77 31.79 109.77 13.79 163.8 2.19-3.69-.15-7.39-.34-11.12-.58z" className="st2" />
      </g>

      <g id="banana-face">
        <path d="M134.84 293.98c14.58-35.62 47.32-29.32 47.32-29.32-5.77 3.77-26.84 12.18-47.32 29.32z" className="st0" />
        <path d="M129.09 250.3c5.32 5.9 5.18 14.76-.41 19.4-5.59 4.64-14.53 3.15-19.93-3.08-5.31-5.9-4.91-13.97.79-18.24 5.7-4.28 14.38-3.56 19.55 1.92zM133.86 250.24c8.29 9.48 20.88 12.86 27.99 6.94 7.11-5.92 6.06-18.78-2.11-27.74-7.68-7.64-19.37-8.77-26.72-3.48-7.33 5.31-7.13 15.86.84 24.28z" className="st3" />
        <path d="M127.31 250.08c3.53 2.8 5.62 7.15 2.03 10.15-6.3 5.24-17.68-6.6-12.83-13.01 2.59-1.94 7.4-.71 10.8 2.86zM156.48 227.61c3.4 2.96 5.49 7.31 1.89 10.3-5.25 2.84-17.98-3.31-12.47-12.58 2.61-1.92 7.27-1.01 10.58 2.28z" fill="#000" />
      </g>
    </g>
    <g id="over_1_">
      <g id="faceparts_1_">
        <g id="face_2_">
          <path id="faceback_2_" fill="#DDD" stroke="#FFF" strokeMiterlimit="10" d="M234.2 231.57c3.51-12.22 43.64-91.45 27.28-96.69l-36.78-9.51-41.25-4.03c-3.94-1.44-8.1.02-9.29 3.27l-22.05 60.27c-1.19 3.25 1.05 7.05 4.99 8.49l32.83 23.68 34.98 17.8c3.95 1.43 8.1-.03 9.29-3.28z" />
        </g>
        <ellipse cx="224.3" cy="183.81" fill="#4D4D4D" stroke="#000" strokeMiterlimit="10" rx="9.34" ry="17.46" transform="matrix(.5251 -.851 .851 .5251 -49.9141 278.1727)" />
        <path id="arm_3_" d="M232.77 128.03s38.37-20.56 46.82-13.54c8.88 7.38-44.65 51.38-50.72 57.01-2.18 2.02-4.91 3.46-5.65 6.39-.79 3.1.69 8.12.98 11.31" className="st6" />
        <path id="arm_2_" d="M179.63 208.22c-17.02 1.71-37.57 5.66-52.64 12.26 1.76-.77 2.29-17.96-1.37-29.37-.82-.7-1.8-1.36-2.98-1.91" className="st7" />
        <path id="eyelay" d="M200.12 160.55c1.23 1.21 3.95 3.84 4.2 4.33.74 1.49-1.2-.53 4.68-7.73 4.02-4.92 6.88-6.28 7.91-6.88 1.03-.6-1.94-2.18-5.22-4.07-11.78-6.8-21.65 4.87-11.57 14.35z" className="st8" />
      </g>
      <g id="blenderbody_1_">
        <g id="base_1_">
          <path d="M253.61 238.49c12.72-28.13 23.29-57.04 31.73-86.73.74-2.03-.65-4.41-3.12-5.31-8.51-6.96-34.6 87.68-37.54 88.77-1.81 4.71 7.26 8.08 8.93 3.27z" className="st9" />
          <path d="M241.73 243.31c13.83-32.16 25.84-64.99 36.03-98.49 1.81-5.05-13-10.47-14.88-5.44 0 0 5.32 9.44-11.44 52.48-16.79 49.57-32.6 43.79-19.74 51.95 3.4 1.62 9.11 2.48 10.03-.5z" className="st9" />
        </g>
        <g id="pitcher_1_">
          <path d="M154.22 73.43C128.14 50.77 73.29-3.06 72.01 54.01l3.34 6.22s8.23 1.92 10.45 2.15c-21.91-44.98 60.15 10.59 62.14 24.4.37 2.58-2.13 13.15-1.19 14.26 2.28 2.69 8.73 7.31 8.73 7.31-7.2-8.96 3.55-21.7-1.26-34.92zM150.57 190.79c4.85-11.18 30.9-67.23 22.64-73.39-2.05-.75-4.44.62-5.33 3.05-7.19 23.19-15.41 45.75-24.74 67.62-2.15 5.68 5.4 8.48 7.43 2.72z" className="st9" />
          <path d="M143.14 188.07l25.97-67.17c-28.52-26.7-59.06-48.05-92.32-62.11 2.68.98-36.78 108.21-44.1 120.54-6.08 12.78 12.22-2.28 18.34-.58 20.63 5.77 67.05 9.49 92.11 9.32zM136.47 175.63c-15.46 2.09-59.1-1.04-75.04-5.79M61.16 170.58l6.72-18.37M74.38 173.17l3.31-9.04M85.45 173.59l3.3-9.04M96.37 174.4l2.69-7.35M107.44 174.83l3.31-9.04M115.85 174.86l2.15-5.88M126.92 175.29l4.84-13.23M136.91 174.82l3.31-9.04" className="st9" />
        </g>
        <g id="top_2_">
          <path d="M34.94 126.12l11.3-32.2c2.59-5.84.27-7.64-3.79-6.71-11.67-2.46-16.93 26.99-18.44 35.03-.92 2.64.78 5.64 3.79 6.71 2.44 4.18 5.74 2.35 7.14-2.83z" className="st9" />
          <path d="M66.98 57.47c-9.61-5.22-50.13 109.52-39.4 112.3-3.92 49.1 62.75-131.17 39.4-112.3z" className="st9" />
        </g>
      </g>
      <path d="M173.67 78.21c7.61-6.71 15.22-13.43 22.83-20.14-.5 13.81-1.01 27.61-1.51 41.42 5.14-6.56 10.92-12.5 17.28-17.75M212.99 53.14c4.21-2.58 8.43-5.16 12.64-7.74-.87 7.55-1.74 15.09-2.62 22.64 3.44-2.56 6.87-5.12 10.31-7.67M239.58 41l9.45-5.1c-.93 5.42-1.86 10.85-2.79 16.27 2.59-1.71 5.17-3.43 7.76-5.14" className="st10" />
      <path d="M265.38 210.67c8.37 7.5 16.74 15 25.1 22.51 2.9 2.6 5.95 5.28 9.72 6.26 10.74 2.78 20.4-9.21 31.47-8.64 1.29 2.88 2.58 5.76 3.86 8.63M278.34 175.69l38.88-32.91c3.55 20.5 7.1 40.99 10.65 61.49 2.62-.58 4.76-.7 7.39-1.27" className="st7" />

      <path d="M190.46 157.3c1.01-.9 2.34-1.34 3.61-1.2M191.33 144.69c1.03.59 2.06 1.19 3.09 1.78M203.51 136.59c.03 1.17.07 2.33.1 3.5" className="st8" />
      <path d="M176.77 142.73c7.83-1.16 15.16-6.36 19.4-13.75M159.71 172.26c5.04 6.6 7.66 15.4 7.16 24.11" className="st11" />


      <path id="eyelay" d="M203.19 168.9c2.95-9.74 10.44-17.77 19.38-20.79M191.93 177.79c1.61.46 5.13 1.5 5.65 1.46 1.56-.14-1.06-.8-3.47 8.44-1.65 6.32-1.15 9.65-1.06 10.91.09 1.26-2.75-.58-6-2.53-11.68-6.99-7.96-22.28 4.88-18.28zM184.16 170.79c-.15 1.4.23 2.85 1.03 3.93M174.82 178.43c1.02.61 2.04 1.23 3.06 1.84M175.14 193.88c.92-.6 1.85-1.21 2.77-1.81M200.09 176.05c-5.97 7.96-8.15 19.12-5.65 28.87" className="st8" />
    </g>
  </svg>
  </PageBWrapper>
)};

export default PageB;