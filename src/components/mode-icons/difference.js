import React from 'react';
import styled from 'styled-components'

const DifferenceWrapper = styled.g`    
    .st2,
    .st3{stroke:#fff;}
    .st2{fill:none;stroke-width:3}
    .st3{stroke-width:5}
    .st3,
    .st5{fill:none}
    .st5,
    .st6,
    .st7,
    .st8{stroke:#000;}
    .st7,
    .st8{fill:none;stroke-width:2}
    .st8{stroke:#999;stroke-width:5}
    .st12{fill:#999}
    .st15,
    .st16{fill:gray;stroke:#000;}
    .st16{fill:none;stroke:#999;stroke-width:2}
   
    #BG {
        fill: #ddc4a5;
    }
`
/*TODO: drop-shadow?*/
const DifferenceIcon = () => (
    <DifferenceWrapper>

        {/* <circle id="BG" cx="150" cy="150" r="149" fill="#e3ab69" /> */}
  {/* <path fill="#ffbaff" d="M0 0h300v300H0z"/>
  <path fill="#e3ab69" d="M150 1C67.71 1 1 67.71 1 150c0 49.11 23.76 92.66 60.4 119.8 2.08 1.09 4.05 2.64 5.81 4.1C90.9 289.75 119.37 299 150 299c82.29 0 149-66.71 149-149S232.29 1 150 1z"/> */}
  <g id="blenderLt">
    <g id="blenderbody_13_">
      <g id="base_13_">
        <path d="M46.62 228.24c25.59 6.48 51.49 11.17 77.69 14.07 1.82.33 3.58-1.07 3.93-3.13 4.43-7.6-78.96-16.22-80.35-18.4-4.23-.84-5.57 6.76-1.27 7.46z"  className="st2"/>
        <path d="M40.65 219.47c29.15 6.85 58.56 12.17 88.23 15.97 4.52.79 6.63-11.59 2.12-12.44 0 0-7.03 5.39-45.75-2.39-44.19-6.98-41.94-20.19-46.66-9.01-.8 2.9-.58 7.52 2.06 7.87z"  className="st2"/>
      </g>
      <path d="M130.9 192.85c7.74 5.45 15.13 11.52 22.1 18.15-5.15 4.81-11.72 9.76-16.87 14.57 1.77 2.68 5.33 3.15 5.33 3.15"  className="st3"/>
      <path d="M57.76 175.96c-9.19 1.66-18.3 4.05-27.24 7.13 2.83 6.6 6.9 13.92 9.73 20.52-2.66 1.69-6.09.6-6.09.6"  className="st3"/>
    </g>
    <g id="pitcher_13_">
      <path d="M158.95 125.58c-2.09.62-14.32-.02-15.09.87-1.88 2.14-4.67 7.82-4.67 7.82 6.31-6.81 11.69 1.06 21.94-4.41"  className="st2"/>
      <path d="M69.59 140.84c10.12 2.42 61.13 15.89 64.93 8.58.29-1.72-1.24-3.43-3.42-3.82-20.52-2.74-40.68-6.38-60.45-10.97-5.09-.98-6.2 5.34-1.06 6.21z"  className="st2"/>
      <path d="M154.72 64.71C128.04 60.8 68.8 49.57 59.93 46.32c-11.65-3.18 3.9 9.36 3.47 14.41-1.44 17.02 3.03 54.14 7.24 73.91l60.28 12c9.15-13.45 17.02-27.15 23.34-41.13"  className="st2"/>
      <path d="M79.94 127.79C75.67 115.85 71.17 81 72.53 67.8"  className="st2"/>
      <path d="M71.88 67.68l16.43 2.98"  className="st2"/>
      <path d="M71.87 78.45l8.09 1.46"  className="st2"/>
      <path d="M73.33 87.24l8.08 1.47"  className="st2"/>
      <path d="M74.43 95.97L81 97.16"  className="st2"/>
      <path d="M75.88 104.76l8.08 1.47"  className="st2"/>
      <path d="M77.22 111.41l5.26.95"  className="st2"/>
      <path d="M78.67 120.2l11.83 2.14"  className="st2"/>
      <path d="M80.69 128.03l8.09 1.47"  className="st2"/>
    </g>
    <path id="faceback_10_" fill="#fff" stroke="#fff"   d="M47.4 212.12c10.76 1.22 83.42 22.87 85.13 9.3l1.94-30.25-3.36-33.09c.56-3.3-1.34-6.39-4.24-6.92l-53.89-9.78c-2.9-.53-5.71 1.72-6.27 5.01l-14.4 28.92-9.15 29.88c-.56 3.3 1.34 6.4 4.24 6.93z"/>
    <g id="blenderface_1_">
      <path d="M77.28 178.96c-4.19 16.04 8.9 19.83 12.86 3.72 4.19-16.04-8.9-19.83-12.86-3.72z"  className="st5"/>
      <path d="M103.59 183.38c-4.19 16.04 8.9 19.83 12.86 3.72 4.19-16.05-8.91-19.83-12.86-3.72z"  className="st5"/>
      <path d="M90.38 178.32c-1.14 4.77-7.69 2.87-6.43-1.86.51-2.02-1.77-8.25-1.77-8.25s8.72 8.09 8.2 10.11z"  className="st6"/>
      <path d="M116.38 181.13c2.04 4.25-4.02 7.99-5.95 3.68-.85-1.82-1.67-10.55-1.67-10.55s6.77 5.05 7.62 6.87z"  className="st6"/>
      <path d="M78.17 162.96c.45.82.89 1.65 1.34 2.47"  className="st5"/>
      <path d="M87.22 161.29c-.11 1.02-.23 2.04-.34 3.05"  className="st5"/>
      <path d="M94.91 168.27c-.57.64-1.13 1.27-1.7 1.91"  className="st5"/>
      <path d="M103.42 171.09c.9.45 1.61 1.33 1.93 2.39"  className="st5"/>
      <path d="M111.72 167.07c-.04 1.03-.09 2.06-.13 3.09"  className="st5"/>
      <path d="M120.81 173.61l-2.19 1.38"  className="st5"/>
      <path d="M105.72 160.33c6-7.21 13.41-6.31 19.48-.06"  className="st7"/>
      <path d="M94.09 159.25c-6.91-5.3-14.02-5.65-19.3.46"  className="st7"/>
      <path d="M81.13 195.99c-2.27-.28-4.63 1.77-4.98 4.34"  className="st5"/>
      <path d="M80.19 200.04s18.02 5.58 27.6 5.01c1.2-.07 5.21-.96 5.01-.09-.92 3.91-3.76 11.18-14.8 9.85-12.61-1.52-17.81-14.77-17.81-14.77z"  className="st5"/>
    </g>
  </g>
  <g id="blenderRt">
    <path d="M244.26 171.93c11.25.23 22.44 1.27 33.47 3.11-3.06 7.79-7.58 16.6-10.64 24.39 3.32 1.4 7.43-.41 7.43-.41"  className="st8"/>
    <path d="M166.01 193.6c-9.53 5.98-18.59 12.63-27.1 19.88 6.63 5.11 15.04 10.33 21.67 15.44-2.13 2.91-6.58 3.47-6.58 3.47"  className="st8"/>
    <path fill="none" stroke="#999"   strokeWidth="3" d="M219.99 161.78l-34.75 9.62c-6.36 1.76-13.01-2-14.77-8.36l-21.64-78.17c-1.76-6.36 2-13.01 8.36-14.77l34.75-9.62c6.36-1.76 13.01 2 14.77 8.36l21.64 78.17c1.77 6.37-2 13.01-8.36 14.77z"/>
    <path fill="#999" stroke="#999"   strokeWidth="2.99994" d="M168.365126 231.379918l96.94822-26.85014 2.204594 7.960162-96.94822 26.85014z"/>
    <path fill="#b3b3b3" stroke="#f2f2f2"   strokeWidth="3" d="M260.29 205.16L173 229.33c-5.76 1.6-10.92-1.97-11.45-7.73l-3.27-35.53c-.4-4.34 3.19-8.86 7.97-10.19l72.35-20.04c4.78-1.32 10.18.71 12.07 4.64l15.47 32.15c2.5 5.22-.09 10.93-5.85 12.53z"/>
    <path d="M186.71 243.06l-12.59 3.49-1.91-6.88 17.73-4.91z"  className="st12"/>
    <path d="M255.95 223.89l12.59-3.49-1.9-6.87-17.73 4.91z"  className="st12"/>
    <path d="M203.69 60.74l-55.71 15.43c-2.59.72-5.29-.81-6.01-3.4-.72-2.59.81-5.29 3.4-6.01l55.71-15.43c2.59-.72 5.29.81 6.01 3.4.71 2.59-.82 5.3-3.4 6.01z"  className="st12"/>
    <path d="M179.58 58.07l-12.3 3.41c-2.59.72-5.29-.81-6.01-3.4-.72-2.59.81-5.29 3.4-6.01l12.3-3.41c2.59-.72 5.29.81 6.01 3.4.71 2.59-.82 5.29-3.4 6.01z"  className="st12"/>
    <circle cx="210.2" cy="185.53" r="8.63" fill="#e6e6e6" stroke="#000"   strokeWidth="2"/>
    <path d="M196.59 182.81c1.44.46 2.87.93 4.31 1.39"  className="st7"/>
    <path d="M199.68 179.47c.81.52 1.62 1.04 2.43 1.55"  className="st7"/>
    <path d="M203.08 175.94c.9.57 1.69 1.31 2.32 2.18"  className="st7"/>
    <path d="M207.5 172.64c.39 1.42.79 2.85 1.18 4.27"  className="st7"/>
    <path d="M212.85 173.56c-.17 1.15-.45 2.29-.83 3.39"  className="st7"/>
    <path d="M216.97 175.45c-.57 1.03-1.14 2.07-1.7 3.1"  className="st7"/>
    <path d="M220.43 176.07c-.69 1.67-1.53 3.25-2.51 4.74"  className="st7"/>
    <path fill="#4d4d4d" stroke="#000"   strokeWidth="2" d="M208.33 183.3c.53 1.16-.42 3.85-2.11 4.64-1.68.79-3.69.07-4.48-1.61-.79-1.68-.07-3.69 1.61-4.48 1.69-.79 4.44.27 4.98 1.45z"/>
    <path d="M194.3 202.94h3.17v8.23h-3.17z"  className="st15" transform="rotate(-15.485 195.83317906 207.04475234)"/>
    <path d="M200.41 201.25h3.17v8.23h-3.17z"  className="st15" transform="rotate(-15.485 201.93743979 205.3552981)"/>
    <path d="M206.51 199.56h3.17v8.23h-3.17z"  className="st15" transform="rotate(-15.485 208.04133265 203.66579384)"/>
    <path d="M212.62 197.87h3.17v8.23h-3.17z"  className="st15" transform="rotate(-15.485 214.14559338 201.9763396)"/>
    <path d="M218.72 196.18h3.17v8.23h-3.17z"  className="st15" transform="rotate(-23.153 220.2896918 200.2811455)"/>
    <path d="M224.25 193.33h3.17v7.28h-3.17z"  className="st15" transform="matrix(.8625 -.506 .506 .8625 -68.6263 141.3617)"/>
    <path d="M228.88 188.81h3.17v7.58h-3.17z"  className="st15" transform="rotate(-50.625 230.47428444 192.6038789)"/>
    <path d="M231.66 184.33h3.17v6.62h-3.17z"  className="st15" transform="rotate(-66.778 233.24861043 187.64046065)"/>
    <path d="M208.43 165.28c9.26-2.41 19.04 4.72 17.24 10.9"  className="st7"/>
    <path d="M233.08 179.23h3.17v5.17h-3.17z"  className="st15" transform="rotate(-86.864 234.67309435 181.81129302)"/>
    <path d="M230.5 123.82c-3.98 1.1-8.14-1.25-9.24-5.23l-11.62-41.97c-1.1-3.98 1.25-8.14 5.23-9.24 3.98-1.1 8.14 1.25 9.24 5.23l11.62 41.97c1.1 3.98-1.25 8.14-5.23 9.24z"  className="st8"/>
  </g>
  <path fill="none" stroke="#fff"  strokeWidth="5" d="M153 211c-5.15 4.81-11.72 9.76-16.87 14.57 1.77 2.68 5.33 3.15 5.33 3.15"/>

  <path d="M191 89l20 67"  className="st16"/>
  <path d="M180 92l11-3"  className="st16"/>
  <path d="M200 159l11-3"  className="st16"/>
  <path d="M193 139l11-3"  className="st16"/>
  <path d="M186 116l11-3"  className="st16"/>
  <path d="M185.35 98.04L193 96"  className="st16"/>
  <path d="M187.43 106.02l7.65-2.04"  className="st16"/>
  <path d="M192.35 122.04L200 120"  className="st16"/>
  <path d="M194.43 130.02l7.65-2.04"  className="st16"/>
  <path d="M198.62 143.97l7.64-2.06"  className="st16"/>
  <path d="M200.44 151.03l7.64-2.05"  className="st16"/>



    </DifferenceWrapper>)

export default DifferenceIcon;
