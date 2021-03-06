import React from 'react';
import styled from 'styled-components'

const HardLightWrapper = styled.g`
transform: translate(-7%, -3%);
 #motionlines {
transform: translate(0, -20%);
}
#rock {
  transform: translate(-13%, -8%);
}
.st3{fill:none;stroke:#000; stroke-width:1.5}
.st4{fill:#94de7a}
.st5{fill:#82ca6b}
.st6{fill:#5d9c4e}
.st7{fill:none;stroke:#1a1a1a;stroke-width:2;}
.st10{fill:#4faae4}
.st11{fill:#f0f0f0}
.st13,
.st16,
.st17{}
.st13{stroke-width:4;fill:none;stroke:#000}
.st16,
.st17{fill:#ccc;stroke:#000}
.st17{fill:#fff}
.st20{opacity:.66;fill:#e6e6e3}
.st22{fill:#e6bf00}
`


const HardLightIcon = () => (
  <HardLightWrapper>
    <filter id="rock-blur">
      <feGaussianBlur stdDeviation="10"></feGaussianBlur>
    </filter>
    <linearGradient id="hat-grad" x1="113.2655" x2="186.4479" y1="95.1173" y2="183.401" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#fffbe6" />
      <stop offset=".0953" stopColor="#fae2c0" />
      <stop offset=".2711" stopColor="#f2b780" />
      <stop offset=".3996" stopColor="#ed9c58" />
      <stop offset=".466" stopColor="#eb9249" />
    </linearGradient>

    <linearGradient id="sky_2_" x1="171.4391" x2="169.8707" y1="27.0126" y2="292.8799" gradientTransform="matrix(-1 0 0 1 341.3187 0)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#009dd6" />
      <stop offset=".1222" stopColor="#0ea2d8" />
      <stop offset=".3536" stopColor="#33aedf" />
      <stop offset=".6699" stopColor="#6fc3e9" />
      <stop offset="1" stopColor="#b5daf5" />
    </linearGradient>
    <circle id="sky_1_" cx="170.66" cy="159.19" r="150" fill="url(#sky_2_)" />
    <linearGradient id="lawn_2_" x1="168.7341" x2="168.7341" y1="310.1952" y2="220.5979" gradientTransform="matrix(-1 0 0 1 341.3187 0)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#4d8a37" />
      <stop offset=".3203" stopColor="#599843" />
      <stop offset=".9247" stopColor="#79bd61" />
      <stop offset="1" stopColor="#7dc265" />
    </linearGradient>
    <path id="lawn_1_" fill="url(#lawn_2_)" stroke="#006837" d="M48 236.6c3.05-1.07 6.43-1.44 9.7-1.07-.27-.24-.54-.49-.81-.73 11.91-2.65 24.59-2.79 36.59-.41-1.71-2.85-5.06-4.96-8.78-5.54 3.95-.31 8.02 1.54 9.91 4.5.11-6.05-5.59-11.8-12.65-12.76 3.6.12 7.11 1.46 9.6 3.66 2.48 2.2 3.9 5.24 3.86 8.29 1.61-.58 1.71-2.87.16-3.56.99.36 1.66 1.26 1.61 2.17.54-.76 1.09-1.52 1.63-2.28-.19.52-.39 1.05-.58 1.57.24-.2.56-.34.91-.33.83.01 1.51.8 1.26 1.47-1.17-.62-2.66.79-2.28 1.91.38 1.12 1.75 1.77 3.03 2.21 3.81 1.29 8.62 2.32 12.52 1.25 12.94-3.57 26.77-4.79 40.3-3.57 21.43-.05 42.86-.1 64.28-.15 10.05.67 20.11 1.34 30.16 2.01.15-.63-.68-1.25-1.4-1.05 1.14-.63 2.58-.86 3.91-.62-1.36-.88-2.72-1.76-4.07-2.63 2.18-2.41 5.77-3.85 9.35-3.76-1.88 1.36-3.77 2.72-5.65 4.08 7.52.18 15.05.35 22.57.53 2.08.05 4.23.09 6.13-.61 1.9-.7 3.49-2.36 3.17-4.1-.11-.63-.56-1.19-1.16-1.58 1.67.54 3.08 1.74 3.45 3.23l.66-1.71c-.07.61-.14 1.22-.22 1.83.54-.6 1.08-1.2 1.62-1.81-.09.33.3.8.7.74-1.28.43-2.19 1.55-2.18 2.72 5.71.31 11.43.44 17.15.4-2.98 5.46-6.3 10.71-9.91 15.74-.63.53-1.1 1.17-1.4 1.91-27.33 36.8-71.11 60.65-120.48 60.65-54.13 0-101.56-28.67-127.93-71.66 1.75-.32 3.51-.63 5.27-.94z" />
    <path id="grass3_1_" d="M290.94 247.18c-5.11-.17-10.21-.34-15.32-.51l13.5-5.4c-4.44.6-8.81 1.7-13.01 3.25 2.23-1.61 4.45-3.21 6.68-4.82-3.26.97-6.17 2.92-8.39 5.48 1.46-2.36 2.92-4.73 4.38-7.09-2.34 2.52-4.67 5.04-7.01 7.56.65-3.09 1.31-6.18 1.96-9.27-.43 3.63-1.63 7.16-3.56 10.26-.19-2.64-.39-5.27-.58-7.91 0 2.55.01 5.11.01 7.66-1.91-2.75-3.82-5.51-5.72-8.26 2.01 2.53 3.13 5.73 3.23 8.96-2.13-3.07-5.33-5.4-8.98-6.28 2.75.53 4.72 3.16 4.95 5.88-4.25-1.01-8.67-1.3-13.02-.82.56.56 1.12 1.13 1.69 1.69-2.99.13-5.89 1.23-8.27 3.03" className="st3" />
    <path id="grass2_1_" d="M103.66 245.46c-8.45 3.2-17.89.92-25.06-6.06 1.06.21 1.94 1.57 1.99 3.06l-4.98-3.27c1.26 1.4 2.21 3.33 2.71 5.46-1.52-1.15-3.05-2.3-4.57-3.45 1 1.4 2.01 2.81 3.01 4.21-1.66-.82-3.31-1.63-4.97-2.45.87 1.08 1.73 2.16 2.6 3.24-1.42-1.16-2.84-2.31-4.26-3.47.7 1.46 1.39 2.93 2.09 4.39-2.51.2-5.03.4-7.54.6.71.52 1.43 1.03 2.14 1.55-4.65.04-9.27 2.02-13.12 5.63" className="st3" />
    <g id="grass_4_">
      <path d="M136.48 265.21s-20.67-17.84-26.63-17.62c-5.96.22-9.74 2.01-9.74 2.01s9.14-.67 12.72 1.78c3.58 2.46 23.65 13.83 23.65 13.83z" className="st4" />
      <path d="M118.29 231.09s8.14 7.36 12.49 16.28c3.22 6.61 3.01 14.68 2.68 18.42-.69 0-1.37 0-2.04.01-1.69-9.15-12.04-29.8-12.04-29.8s-5.97 8.25-6.24 5.57 5.15-10.48 5.15-10.48z" className="st5" />
      <path d="M118.84 233.54s4.89 4.91 9.23 13.82c3.22 6.61 4.5 14.68 4.95 18.42h-1.59c-1.69-9.15-12.04-29.8-12.04-29.8l-5.7 6.02 5.15-8.46z" className="st6" />
      <path d="M133.61 265.79c1.55-3.91 7.46-18.26 10.75-18.65 3.8-.45 23.62 14.49 23.62 14.49l-21.72-10.26-8.45 14.41c-1.32.01-2.76.01-4.2.01z" className="st5" />
      <path d="M134.68 265.79c2.51-4.8 8.37-15.4 11.3-15.75 3.8-.45 21.99 11.6 21.99 11.6l-21.72-10.26-8.45 14.41h-3.12z" className="st6" />
      <path d="M131.32 265.21l-13.84-7.81v7.81l3.53-2.9z" className="st5" />
      <path d="M131.32 264.98l-11.67-4.45-2.17 4.45 3.53-2.89z" className="st6" />
    </g>

    <g id="hl_pitcher">
      <path d="M203.68 204.12c-14.15 2.16-85.62 14.56-90.09 5.67-.22-2.05 2.05-3.96 5.08-4.28 28.48-1.83 56.56-4.73 84.19-8.8 7.09-.81 7.97 6.73.82 7.41z" className="st7" />
      <path d="M116.34 187.01c3.59 1.21 87.05 8.14 86.52 9.7l-84.05 10.03c-3.72-5.48-7.22-10.98-10.53-16.51.57-.34 6.93-2.87 8.06-3.22z" className="st7" />
    </g>

    <g id="hl_hat">
      <path fill="url(#hat-grad)" stroke="#000" d="M84.67 142.73c3.39-33.08 29.01-58.61 60.86-63.85 2.12-.35 2.05-6.48 4.22-6.65 4.4-.33 27.24 2.07 31.76 3.44 1.71.52 1.43 6.54 3.08 7.17 30.22 11.55 50.2 41.8 46.8 74.94-.45 4.38-1.29 8.63-2.48 12.72-.6 2.06 6.7 4.8 5.21 6.51-3.9 4.45-23.21 22.17-23.21 22.17L96.09 187.7s-14.4-20.21-17.88-25.34c-1.59-2.34 6.53-3.88 6.32-6.48-.35-4.3-.32-8.7.14-13.15z" />    <path d="M189.9 148.74l-4.97-65.52" stroke="#000" fill="none" />
      <path fill="none" stroke="#666" d="M127.67 142.76l18.16-63.74" />
      <path d="M194.98 94.9c11.33 17.08 15.87 33.06 15.99 48.34" stroke="#000" fill="none" />
      <path fill="none" stroke="gray" d="M133.31 90.39c-14.89 11.96-22.76 26.49-24.43 43.29" />
      <path d="M220.12 163.29c-48.67 10.12-90.08 5.1-125-13.44" className="st3" />
      <g id="hl_logo">
        <path fill="#3d8ac5" stroke="#000" d="M140.75 118.46c13.39.47 27.64 2.21 41.31 3.09-1.98 11.17-3.93 22.34-5.94 33.5-.39 1.37-.24 3.16-.89 4.33-4 .71-7.99 1.45-11.99 2.15-3.31.79-5.98 1.2-9.12-.42-4.07-1.72-9.25-2.65-12.77-4.8-.17-12.62-.36-25.26-.6-37.85zm19.22 19.37c-1.76.07-4.07-.7-5.57-.24-.44 6.19-.11 3.86 5.21 4.72-.21 2.18-.28 4.42-.56 6.58-1.53-.74-3.46-1.15-4.8-2.07-.1-.83.37-2.09-.06-2.7-1.42-.11-2.84-.22-4.27-.34-.42-.03-.42-.03-.43.4-.04 1.87-.09 3.75-.14 5.62 2.86 1.51 6.31 2.47 9.35 3.82.03 1.68-.65 3.97-.25 5.34 4.51-.81 9.03-1.63 13.54-2.44 2.14-9.46 3.45-19.52 5.28-29.18.14-.82.26-1.64.45-2.44.06-.25.03-.28-.23-.3-5.38-.43-10.75-.86-16.13-1.29-.25-.02-.25-.02-.27.23-.14 1.77-.28 3.55-.42 5.32-3.67-.27-7.34-.58-11.01-.87-.36 1.17-.04 2.91-.11 4.27 3.08.93 7.32.58 10.77 1.1-.11 1.49-.23 2.98-.35 4.47z" />
        <path d="M160.69 128.87c.14-1.77.28-3.55.42-5.32.02-.25.02-.25.27-.23 5.38.43 10.75.86 16.13 1.29.25.02.29.05.23.3-.19.81-.31 1.63-.45 2.44-1.83 9.66-3.14 19.73-5.28 29.19-4.51.81-9.03 1.63-13.54 2.44-.4-1.38.28-3.67.25-5.35 3.23-.77 6.73-1.27 9.84-2.25.71-4.41 1.25-8.86 1.97-13.27.14-2.67 1.35-6.01.99-8.35-3.61-.28-7.22-.6-10.83-.85-.01-.03-.01-.04 0-.04z" className="st10" />
        <path d="M158.71 153.62c-3.04-1.34-6.49-2.31-9.35-3.81.04-1.87.09-3.75.14-5.62.01-.43 0-.43.43-.4 1.42.11 2.84.23 4.27.34.43.61-.04 1.87.06 2.7 1.35.93 3.3 1.32 4.84 2.1-.14 1.56-.27 3.13-.39 4.69zM160.33 133.37c-3.45-.53-7.7-.17-10.77-1.1.07-1.35-.24-3.1.11-4.27 3.67.29 7.34.6 11.02.87-.13 1.5-.25 3-.36 4.5z" className="st11" />
        <path d="M159.09 148.92c-.01-.01-.03-.02-.04-.03.29-2.17.35-4.4.57-6.59 1.65.35 4.02-.06 5.33.64-.74 5.85-.32 4.71-5.86 5.98zM159.97 137.83c.12-1.49.24-2.99.35-4.48 1.86.36 4.37-.01 5.93.68-.22 1.36-.42 2.72-.66 4.08-1.61.38-3.82-.31-5.63-.26l.01-.02z" className="st10" />
        <path d="M159.61 142.32c-5.33-.87-5.64 1.47-5.21-4.72 1.5-.46 3.81.3 5.57.24-.12 1.48-.24 2.98-.36 4.48z" className="st11" />
        <path fill="#fefefe" d="M159.62 142.3c.12-1.49.24-2.97.35-4.46 1.8-.04 4.02.64 5.63.27.24-1.36.45-2.72.66-4.08-1.56-.68-4.07-.31-5.93-.68.12-1.49.24-2.97.36-4.46 3.61.25 7.22.57 10.83.85.36 2.34-.85 5.68-.99 8.35-.72 4.42-1.26 8.86-1.97 13.27-3.11.98-6.61 1.48-9.84 2.25.13-1.56.25-3.13.38-4.69 5.55-1.28 5.12-.13 5.86-5.98-1.33-.7-3.69-.29-5.34-.64z" />
      </g>
    </g>

    <g id="arms_1_">
      <path d="M216.96 226.71s30.92-18 30.48-21.57-9.65-23.21-9.65-23.21M134.84 230.5s-35.73-14.45-36.67-17c-.59-1.59-2.63-13.41-3.86-22.92" className="st13" />
      <path d="M98 173l-9 3v8l-3 8h17l-6-8zM231 168v5l-1 3 4 6v6l11-6-5-3-1-9z" fill="#fff899" strokeWidth=".5" stroke="#000" />
    </g>

    <g id="blenderbody_1_">
      <path id="hl_body" fill="#f0db96" stroke="#000" d="M109.45 258.63l7.99-38.85c-.43-3.93 2.49-7.46 6.53-7.88l75.04-7.84c4.04-.42 7.67 2.42 8.11 6.36l16.84 35.16 6.74 25.45c-5.11 1.26-10.53 3.16-14.05 5.89-2.24.26-5.85.81-9.78 1.72-1.05-.31-2.11-.56-3.18-.79-3.58-1.05-7.33-1.62-11.11-1.62-2.98 0-5.84.35-8.58.93-1.18-.11-2.36-.17-3.55-.17-2.05 0-4.04.18-5.97.47-4.56-.37-9.14-.58-13.7-.58-.56 0-1.25.01-2 .02-11.59-2.18-23.45-3.52-35.24-3.52-3.02 0-9.14.11-14.29 1.46.11-8.36.2-16.21.2-16.21z" />
      <g id="hl_mouth">
        <path fill="#fff" stroke="#000" d="M191.08 256.66c-19.7-12.68-39.38-14.97-59.04-9.29-1.2 1.19-1.67 2.43-1.28 3.74-.36 4.7.91 9.41 2.97 14.12 0 0 1.11 2.05 4.21 2.39 3.47.39 18.81-6.9 27.64-7.27 8.41-.35 15.72 5.76 16.02 4.77 0 0 5.57 1.99 7.6-.02 2.02-2.01 1.88-8.44 1.88-8.44z" />
        <path d="M172.06 255.3s11.7 1.35 17.8 5.61M147.52 255.03l-16.35 2.34M174.36 270.1c-3.46-1.89-6.75-3.44-9.34-3.53-.53-.49-6.52.03-10.06 3.04" className="st16" />
      </g>

      <g id="eyeLt_1_">
        <path d="M169.44 230.87c8.1-5.77 16.59-9.51 25.66-10.33M204.27 226.82c-11.22-.06-21.92 1.76-32.1 5.46M197.64 236.09c-7.75-2.33-15.85-3.59-24.27-3.84" className="st3" />
      </g>
      <g id="hl_eyeRt">
        <path d="M149.99 228.16c2.68 11.82-14.63 15.06-17 3.18-2.68-11.82 14.63-15.06 17-3.18z" className="st17" />
        <path stroke="#000" d="M137.11 230.06c.97 4.95 9.63 3.33 8.5-1.59-.45-2.1-5.8-9.71-5.8-9.71s-3.15 9.2-2.7 11.3z" />
        <path d="M152.28 219.19c-1.21.42-2.22 1.29-2.74 2.35M140.72 214.79c-.05 1.06-.1 2.12-.16 3.18M129.56 220.92c.9.51 1.79 1.02 2.69 1.53" className="st17" />
      </g>
    </g>

    <path fill="none" stroke="#603813"  strokeWidth="5" d="M230.48 271.39l-16.52 6.69-9.86.3-10.87-2.8-20.17 2.8-16.68-1.1-19.78-3.38-15.37.38-11.97.56" />

    <path d="M127.74 278.25c-7.93-.42-15.87-.85-23.8-1.27 3.38-1.82 6.22-4.66 8.07-8.05-3.16 1.28-5.96 3.45-8 6.21.94-2.03 1.88-4.06 2.81-6.08-.6 2.57-2.27 4.86-4.52 6.18 2.61-6.67.26-15-5.45-19.23 2.74 5.54 3.97 11.84 3.52 18.02-.25-2.96-1.9-5.77-4.34-7.41 1.18 2.65 2.36 5.3 3.55 7.95-3.26-.18-6.52-.35-9.78-.53.78.29 1.55.59 2.33.88-5.04.45-10.09.89-15.13 1.34.54.23 1.09.46 1.63.69" className="st3" />
    <g id="grass">
      <path fill="#94de7a" d="M219.21 269.98c1.08.34 1.99.74 2.79 1.16-.55.41-1.01.89-1.37 1.42-1.72-.21-3.56-.18-4.94.48-3.48 1.67-22.17 8.78-22.17 8.78s21.41-13.17 25.69-11.84z" />
      <path d="M218.86 252.62s-8.55 5.51-14.88 13.22c-4.69 5.71-7.38 13.47-8.47 17.1.5.13 1 .26 1.49.39 4.47-8.43 19.33-26.22 19.33-26.22s1.45 9 2.59 6.5c1.15-2.51-.06-10.99-.06-10.99z" fill="#82ca6b" />
      <path d="M217.6 254.87s-5.3 3.77-11.63 11.48c-4.69 5.71-8.47 13.19-10.12 16.68.39.1.78.2 1.16.3 4.47-8.43 19.33-26.22 19.33-26.22l2.04 6.82-.78-9.06z" fill="#5d9c4e" />
      <path d="M195.41 282.92c.25-4.02.99-18.85-1.27-19.83-2.62-1.14-22.38 9.42-22.38 9.42l19.5-5.73 1.08 15.36c.96.23 2.02.5 3.07.78z" fill="#82ca6b" />
      <path d="M194.63 282.71c-.14-5.05-.67-16.29-2.7-17.17-2.62-1.14-20.17 6.96-20.17 6.96l19.5-5.73 1.08 15.36c.72.18 1.5.38 2.29.58z" fill="#5d9c4e" />
      <path d="M197.28 282.79l12.88-4.87-2.76 7.46-1.55-3.43z" fill="#82ca6b" />
      <path d="M197.36 282.57l10.11-2.07.01 4.67-1.55-3.43z" fill="#5d9c4e" />
    </g>
    
    <g id="motionlines" opacity=".9" fill="#e6e6e6">
      <path d="M224.12 0c-21.78 3.84-70.69 74.84-67.04 118.99-14.35-49.24-69.43-39.47-74.66-30.4 4-1.18 5.19 19.58 5.19 19.58 21.99-38.13 69.96 14.88 71.83 22.89C157.2 108.98 202.34 12 240.56 6.38c-7.43-1.84-18.95.79-16.44-6.38z" />
      <path d="M100.91 98.18c18.91-6.85 39.24 7.12 55.79 32.32-15.77-17.03-34.82-33.8-55.79-32.32z" />    
    </g>
    
    <g id="rock">
      <path fill="#fff" d="M95.81 36.57l25.11 32.74-16.28 36.11-61.3-22.2 10.63-38.35z"/>
      <path d="M95.04 36.8c-2.03 3.9-4.12 7.88-6.31 11.98-2.76 3.89-5.42 9.7-8.05 15.9-6.34 2.07-12.88 3.48-19.58 4.36-.32-1.77-.67-3.66-.22-5.66-1.09-3.92-2.04-8.57-3.05-13.5l-2.39-5.01c8.28-2.98 16.98-5.58 26.17-7.72 5.25-.74 9.75-.87 13.43-.35z"  fill="#e6bf00"/>
      <path fill="#c9a800" d="M54.2 46.62l2.14 4.04 3.21 13.41-.21 5.75-.64 1.49-15.64 10.21-3-12.56c3.38-10.18 7.45-18.94 14.14-22.34z"/>
      <path d="M78.76 66.64L60.7 73.62 45.05 83.88l26.62 23.53 8.96 3.82 22.1-7.81"  fill="#e6bf00"/>
      <path fill="#ffd400" d="M118.87 71.3l-13.83-6.7s-2.66-.93-5.27-.81c-2.61.11-19.54 2.32-19.54 2.32l25.38 36.05-1.96-14.74 15.22-16.12z"/>
      <path d="M120.47 73.38l-15.61 15.39.89 15.61z"  fill="#e6bf00"/>
      <path fill="#edc500" d="M120.92 69.94s.67-6.97-2.23-12.04c-2.9-5.07-22.08-21.33-22.08-21.33l-3.57 9.08 12.71 16.05 15.17 8.24z"/>
      <path fill="#ffe569" d="M91.64 47.63l-9.78 15.59 20.18-1.85s.21-.41 0-1.03-10.4-12.71-10.4-12.71z"/>
      <path id="rockblur4_1_" filter="url(#rock-blur)" fill="#fffbe6" d="M111.05 0H83.77l-56.5 17.53-13.63 15.59L0 64.29l7.79 31.17 52.6 44.81 19.49 9.74 50.65-13.64 31.17-64.29-1.95-25.32z" opacity=".6"/>    
      </g>
    <linearGradient id="reflection_2_" x1="105.2607" x2="127.1359" y1="115.1893" y2="141.7885" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#fffbe6" />
      <stop offset="1" stopColor="#fffbe6" stopOpacity="0" />
    </linearGradient>
  </HardLightWrapper>)

export default HardLightIcon;

/*
<svg xmlns="http://www.w3.org/2000/svg" overflow="visible" viewBox="0 0 300 300">
  <defs/>
  <style>
    .st2{fill:none;stroke:#000;stroke-miterlimit:10}.st6{fill:#4faae4}.st7{fill:#f0f0f0}
  </style>
  <path fill="#ffbaff" d="M300 300l-300-1e-8 1e-8-300 300 1e-8z"/>
  <g id="hat_1_">
    <linearGradient id="SVGID_1_" x1="113.2655" x2="186.4479" y1="95.1173" y2="183.401" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#fffbe6"/>
      <stop offset=".0953" stopColor="#fae2c0"/>
      <stop offset=".2711" stopColor="#f2b780"/>
      <stop offset=".3996" stopColor="#ed9c58"/>
      <stop offset=".466" stopColor="#eb9249"/>
    </linearGradient>
    <path fill="url(#SVGID_1_)" stroke="#000"  d="M84.67 142.73c3.39-33.08 29.01-58.61 60.86-63.85 2.12-.35 2.05-6.48 4.22-6.65 4.4-.33 27.24 2.07 31.76 3.44 1.71.52 1.43 6.54 3.08 7.17 30.22 11.55 50.2 41.8 46.8 74.94-.45 4.38-1.29 8.63-2.48 12.72-.6 2.06 6.7 4.8 5.21 6.51-3.9 4.45-23.21 22.17-23.21 22.17L96.09 187.7s-14.4-20.21-17.88-25.34c-1.59-2.34 6.53-3.88 6.32-6.48-.35-4.3-.32-8.7.14-13.15z"/>
    <path d="M189.9 148.74l-4.97-65.52" class="st2"/>
    <path fill="none" stroke="#666"  d="M127.67 142.76l18.16-63.74"/>
    <path d="M194.98 94.9c11.33 17.08 15.87 33.06 15.99 48.34" class="st2"/>
    <path fill="none" stroke="gray"  d="M133.31 90.39c-14.89 11.96-22.76 26.49-24.43 43.29"/>
    <path d="M220.12 163.29c-48.67 10.12-90.08 5.1-125-13.44" class="st2"/>
    <g id="logo_1_">
      <path fill="#3d8ac5" stroke="#000"  d="M140.75 118.46c13.39.47 27.64 2.21 41.31 3.09-1.98 11.17-3.93 22.34-5.94 33.5-.39 1.37-.24 3.16-.89 4.33-4 .71-7.99 1.45-11.99 2.15-3.31.79-5.98 1.2-9.12-.42-4.07-1.72-9.25-2.65-12.77-4.8-.17-12.62-.36-25.26-.6-37.85zm19.22 19.37c-1.76.07-4.07-.7-5.57-.24-.44 6.19-.11 3.86 5.21 4.72-.21 2.18-.28 4.42-.56 6.58-1.53-.74-3.46-1.15-4.8-2.07-.1-.83.37-2.09-.06-2.7-1.42-.11-2.84-.22-4.27-.34-.42-.03-.42-.03-.43.4-.04 1.87-.09 3.75-.14 5.62 2.86 1.51 6.31 2.47 9.35 3.82.03 1.68-.65 3.97-.25 5.34 4.51-.81 9.03-1.63 13.54-2.44 2.14-9.46 3.45-19.52 5.28-29.18.14-.82.26-1.64.45-2.44.06-.25.03-.28-.23-.3-5.38-.43-10.75-.86-16.13-1.29-.25-.02-.25-.02-.27.23-.14 1.77-.28 3.55-.42 5.32-3.67-.27-7.34-.58-11.01-.87-.36 1.17-.04 2.91-.11 4.27 3.08.93 7.32.58 10.77 1.1-.11 1.49-.23 2.98-.35 4.47z"/>
      <path d="M160.69 128.87c.14-1.77.28-3.55.42-5.32.02-.25.02-.25.27-.23 5.38.43 10.75.86 16.13 1.29.25.02.29.05.23.3-.19.81-.31 1.63-.45 2.44-1.83 9.66-3.14 19.73-5.28 29.19-4.51.81-9.03 1.63-13.54 2.44-.4-1.38.28-3.67.25-5.35 3.23-.77 6.73-1.27 9.84-2.25.71-4.41 1.25-8.86 1.97-13.27.14-2.67 1.35-6.01.99-8.35-3.61-.28-7.22-.6-10.83-.85-.01-.03-.01-.04 0-.04z" class="st6"/>
      <path d="M158.71 153.62c-3.04-1.34-6.49-2.31-9.35-3.81.04-1.87.09-3.75.14-5.62.01-.43 0-.43.43-.4 1.42.11 2.84.23 4.27.34.43.61-.04 1.87.06 2.7 1.35.93 3.3 1.32 4.84 2.1-.14 1.56-.27 3.13-.39 4.69zM160.33 133.37c-3.45-.53-7.7-.17-10.77-1.1.07-1.35-.24-3.1.11-4.27 3.67.29 7.34.6 11.02.87-.13 1.5-.25 3-.36 4.5z" class="st7"/>
      <path d="M159.09 148.92c-.01-.01-.03-.02-.04-.03.29-2.17.35-4.4.57-6.59 1.65.35 4.02-.06 5.33.64-.74 5.85-.32 4.71-5.86 5.98zM159.97 137.83c.12-1.49.24-2.99.35-4.48 1.86.36 4.37-.01 5.93.68-.22 1.36-.42 2.72-.66 4.08-1.61.38-3.82-.31-5.63-.26l.01-.02z" class="st6"/>
      <path d="M159.61 142.32c-5.33-.87-5.64 1.47-5.21-4.72 1.5-.46 3.81.3 5.57.24-.12 1.48-.24 2.98-.36 4.48z" class="st7"/>
      <path fill="#fefefe" d="M159.62 142.3c.12-1.49.24-2.97.35-4.46 1.8-.04 4.02.64 5.63.27.24-1.36.45-2.72.66-4.08-1.56-.68-4.07-.31-5.93-.68.12-1.49.24-2.97.36-4.46 3.61.25 7.22.57 10.83.85.36 2.34-.85 5.68-.99 8.35-.72 4.42-1.26 8.86-1.97 13.27-3.11.98-6.61 1.48-9.84 2.25.13-1.56.25-3.13.38-4.69 5.55-1.28 5.12-.13 5.86-5.98-1.33-.7-3.69-.29-5.34-.64z"/>
    </g>
  </g>
</svg>
*/