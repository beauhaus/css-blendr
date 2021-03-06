import React from 'react';
import styled from 'styled-components'

const ExclusionWrapper = styled.g`


.st1,
    .st3{fill:none;stroke-width:3}
    .st1{;stroke:#b3b3b3}
    .st3{stroke:#ccc}
    .st3,
    .st4,
    .st6{}
    .st4{stroke:#ccc;fill:#ccc}
    .st6{fill:none}
    .st6,
    .st7{display:inline;stroke:#ccc}
    .st11,
    .st12,
    .st7,
    .st8{}
    .st8{display:inline;fill:none;stroke-width:2;stroke:#ccc}
    .st11,
    .st12{stroke:#fff}
    .st11{fill:none;stroke-width:3}
    .st12{stroke-width:4}
    .st12,
    .st14{fill:none}
    .st14,
    .st15,
    .st16,
    .st17{stroke:#000;}
    .st16,
    .st17{fill:none}
    .st16{stroke-width:3}
    .st17{display:none}

    #back3 {
        filter: url(#exclusionBlur);
    }
`

const ExclusionIcon = () => (
  <ExclusionWrapper>
    <filter id="exclusionBlur" y="-5" x="-10" height="40" width="60">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
    </filter>
    <circle className="icon-bg" cx="150" cy="150" r="150" />


    <g id="back3">
      <g id="blenderbody_4_">
        <g id="base_4_">
          <path d="M210.34 161.29c-.15-.84-.23-1.7-.27-2.56-7.72-.39-18.51-.16-27.68.09-.05.56-.15 1.12-.33 1.65.99 1.25 1.24 2.78.94 4.24 9.4.19 18.79.04 28.19-.43-.37-.83-.64-1.82-.85-2.99z" className="st1" />
          <path d="M210.34 153.49c-4.63.65-11.33 1.1-21 .92-3.01.07-5.72.03-8.16-.06 1.12 1.45 1.46 3.45 1.1 5.28 9.28.12 18.55.01 27.83-.3-.14-1.92-.04-3.88.23-5.84z" className="st1" />
        </g>
      </g>
      <g id="pitcher_4_">
        <path d="M237.09 48.63c1.77.03 3.49.26 5.24.39.23-.05.43-.06.64-.05.17-.05.34-.09.5-.09.56 0 1.02.12 1.41.31.11-.03.22-.06.33-.06.45 0 .82.09 1.16.21.24-8.04-3.94-12.74-17.68-8.49l-2.72 2.77s.6 4.41.91 5.55c6.48-6.12 9.43-4.98 10.21-.54zM210.73 101.69c-.08-.47-.14-.95-.19-1.42-10.4.48-11.04.55-21.91.23-.17 1.26-1.62 3.96-1.68 4.25 9.6.56 19.71 1.33 24.55-.25-.34-.8-.58-1.73-.77-2.81z" className="st1" />
        <path d="M152.57 44.07c-8.17-.69 3.68 5.62 3.97 8.96.29 3.39 1.16 7.91 2.36 12.9.63-.23 8.23-1.1 8.68-1.1 1.08 0 5.44 1.01 6.33 1.64 2.08.26 5.6 4.86 5.84 5.98.69 1 12.06 2.22 12.1 3.45 1.21 3.46-3.15 23.95-3.2 24.45l21.97.54c-.2-1.54-7.94-26.39-7.11-29.03 1.05-3.35-8.35-4.85-6.33-7.74.75-1.07 2.39-4.78 4.21-4.78.7 0 18.55-3.47 18.57-3.48.43-.27 2.79-.28 2.91-.33.44-.76.91-1.5 1.4-2.2.37-.53 1.22-1.73 2.2-2.78.25-2.15.46-4.31.58-6.46-.02 1.49-66.31 1.37-74.48-.02z" className="st1" />
      </g>
      <g id="top_4_">
        <path d="M180.23 36.08l19.93.14c3.72.3 4.26-1.17 2.97-3.03-.89-6.23-18.15-3.82-22.87-3.21-1.63-.01-2.96 1.35-2.97 3.03-1.84 1.92-.2 3.25 2.94 3.07z" className="st1" />
        <path d="M224.25 40.32c1.02-5.67-70.06-6.29-69.51-.47-27.83 6.42 84.43 8.88 69.51.47z" className="st1" />
      </g>
      <path fill="#b3b3b3" stroke="#b3b3b3" d="M217.98 125.72l-4.96-17.39c0-2.21-1.63-4-3.63-4 0 0-22.97 2.16-23.68 3 .04.56-8.34 25.81-8.81 26.12 0 0 4.6 22.05 6.61 22.05 4.4-.28 17.18.79 26.64-.23.36-4.32 1.64-8.69 2.81-12.68.77-2.63 1.76-5.34 2.91-8.01.47-3.01 1.29-6.02 2.11-8.86z" />

      <g>
        <g id="blenderbody_3_">
          <g id="base_3_">
            <path d="M130.69 188.64c.02.32 2.71 3.33 3.05 5.06 16.57.95 33.14.89 49.72-.23 1.25 0 2.27-1.12 2.27-2.5 1.97-5.13-47.98-1.73-55.04-2.33z" className="st3" />
            <path d="M185.73 180.13s-4.09 4.33-30.87 3.83c-14.05.31-21.6-1.42-25.84-2.6.44 1.17.54 2.47.3 3.7.84 1.02 1.3 2.32 1.38 3.65 18.34.75 36.69.67 55.03-.26 3.11 0 3.11-8.3 0-8.32z" className="st3" />
          </g>
        </g>

        <g id="pitcher_3_">
          <path d="M200 114.53c7.14-16.98 25.54-53.81-5.81-44.13l-2.72 2.77s.6 4.41.91 5.55c20.14-18.95 6.22 31.63-.91 35.11-1.33.65-7.59 1.32-8.01 1.99-1.01 1.61-2.24 5.63-2.24 5.63 3.45-5.16 12.53-2.16 18.78-6.92zM177.1 129.78c-3.63.16-7.24.27-10.85.35-.62 1.7-1.35 3.37-2.24 4.84 8.21-.13 15.09-.9 15.82-3.11-.01-1.15-1.23-2.08-2.73-2.08z" className="st3" />
          <path d="M180.85 75.9c1.21 3.46-3.53 26.68-4.78 28-.11 1.26-9.11 24.31-9.88 26.39l10.91.18c8.86-18.92 14.41-37.86 15.44-56.84 0 .4-11.71 1.8-11.69 2.27z" className="st3" />
        </g>
        <g id="top_3_">
          <path d="M168.64 62.74c-.89-6.23-18.15-3.83-22.87-3.21-1.63-.01-2.96 1.35-2.97 3.03-.49.52-.73.99-.76 1.4.68.11 1.35.35 1.98.69.67.21 1.28.55 1.82.98l13.73.09c.46-.11 4.27-.9 5.48-.9.46 0 .89.05 1.3.13.39-.07.79-.13 1.23-.13.54 0 1.03.06 1.49.17.38-.56.19-1.36-.43-2.25zM189.76 69.88c.33-1.82-16.08-3.58-15.85-3.42 2.08.26 5.61 4.88 5.85 6.02.39.56 13.83-.44 10-2.6z" className="st3" />
        </g>
        <path d="M184.55 159l-6.02-21.11c0-2.21-1.63-4-3.63-4h-10.28c-.67 1.28-1.44 2.45-2.36 3.42-1.85 1.96-25.95 7.97-27.19 8.19-.48.87-8.07 13.9-8.66 15.61.93 2.56 2.24 5.76-.07 7.34l-.26 1.92c.48.72 3.11 11 3.3 12.49 9.65-.12 57.71 4.78 57.32-3.97L184.55 159z" className="st4" />
        <path fill="none" stroke="#ccc" strokeWidth="2" d="M153.5 130.5h-14l-2 5 12.75-1.32z" />
      </g>

      <g>
        <g id="blenderbody_2_">
          <g id="base_2_">
            <path d="M211.89 183.63c17.86 1.2 35.72 1.2 53.57 0 1.25 0 2.27-1.12 2.27-2.5 2.1-5.46-54.67-1.25-55.84-2.5-2.93-.05-2.96 5.05 0 5z" className="st3" />
            <path d="M206.9 178.63c20.28 1.02 40.56 1.02 60.84 0 3.11-.02 3.11-8.31 0-8.33 0 0-4.09 4.33-30.87 3.83-30.35.66-30.36-8.19-32.24-.36-.22 1.97.46 4.94 2.27 4.86z" className="st3" />
          </g>
        </g>


        <g id="pitcher_2_">
          <path d="M282.32 85.95c-2.43 8.55-6.13 16.72-8.84 18.05-1.33.65-7.59 1.32-8.01 1.99-1.01 1.61-2.24 5.63-2.24 5.63 3.45-5.17 12.53-2.16 18.78-6.93 1.31-3.11 3-6.9 4.69-10.95-1.83-2.35-3.28-5-4.38-7.79zM217.34 124.1c7.06.38 42.78 3.12 44.49-2.08 0-1.15-1.22-2.08-2.72-2.08-14.07.64-28 .65-41.77 0-3.52-.04-3.55 4.2 0 4.16z" className="st3" />
          <path d="M270.85 64.34c-14.04.9-63.75.64-70.76-.54-8.17-.69 3.68 5.62 3.97 8.96.98 11.23 8.2 34.84 13.28 47.19l41.77.69c8.19-17.48 13.52-34.97 15.1-52.5-1.25-1.16-2.37-2.43-3.36-3.8z" className="st3" />
        </g>

        <g id="top_2_">
          <path d="M227.74 55.8l19.93.14c3.72.3 4.26-1.17 2.97-3.03-.89-6.23-18.15-3.82-22.87-3.21-1.63-.01-2.96 1.35-2.97 3.03-1.83 1.92-.19 3.25 2.94 3.07z" className="st3" />
          <path d="M267.07 57.67c-15.69-3.32-65.27-2.96-64.82 1.91-23.71 5.47 54.21 8.06 68.62 3.52-1.47-1.66-2.74-3.49-3.8-5.43z" className="st3" />
        </g>
        <path id="faceback_2_" d="M210.59 173.05c7.35-.47 58.52 5.03 58.11-4l-2.15-19.89-6.02-21.11c0-2.21-1.63-4-3.63-4h-37.23c-2.01 0-3.63 1.79-3.63 4l-6.36 20.5-2.72 20.5c0 2.21 1.63 4 3.63 4z" className="st4" />
      </g>

    </g>

    <g id="front_1_">
      <g id="blenderbody_1_">
        <g id="base_1_">
          <path d="M50.05 261.64c28.56 1.89 57.12 1.89 85.68 0 2.01 0 3.63-1.77 3.63-3.94 3.35-8.62-87.43-1.97-89.31-3.95-4.69-.07-4.73 7.97 0 7.89z" className="st11" />
          <path d="M42.06 253.76c32.43 1.61 64.87 1.61 97.3 0 4.97-.03 4.98-13.11 0-13.14 0 0-6.54 6.83-49.38 6.04-48.55 1.04-48.55-12.92-51.56-.57-.33 3.11.75 7.8 3.64 7.67z" className="st11" />
        </g>
        <path d="M135.89 207.51l12.81 16.75c6.43-8.46 12.65-12.31 18.59-16.75l-1.08-3.78M172.71 206.57l-5.41.94M49.97 207.51l-12.81 16.75c-6.63-9.65-16.97-15.52-22.37-16.75M21.19 204.36l-1.22 5.36" className="st12" />
      </g>
      <g id="pitcher_1_">
        <path d="M162.19 137.16c11.43-26.77 40.85-84.86-9.29-69.58l-4.36 4.37s.95 6.96 1.45 8.75c32.2-29.89 9.95 49.88-1.45 55.37-2.13 1.02-12.14 2.09-12.81 3.14-1.62 2.54-3.58 8.88-3.58 8.88 5.53-8.15 20.05-3.41 30.04-10.93zM58.76 167.77c11.28.6 68.43 4.92 71.16-3.28 0-1.81-1.95-3.28-4.36-3.28-22.5 1.01-44.77 1.03-66.8 0-5.63-.06-5.66 6.62 0 6.56z" className="st11" />
        <path d="M58.76 161.21l66.8 1.09c14.17-29.83 23.04-59.71 24.69-89.63 0 2.37-106.01 2.19-119.09 0-13.07-1.09 5.88 8.87 6.35 14.12 1.57 17.71 13.12 54.94 21.25 74.42zM67.48 152.46c-6.75-11.45-17.94-46.34-18.88-60.12M47.87 92.34h18.15M49.83 103.38h8.93M52.99 112.13h8.93M55.77 120.87h7.26M58.93 129.62h8.93M61.58 136.18h5.81M64.73 144.92h13.08M68.33 152.57h8.93" className="st11" />
      </g>
      <g id="top_1_">
        <path d="M75.4 60.06l31.88.21c5.95.47 6.82-1.84 4.75-4.78-1.43-9.82-29.03-6.03-36.58-5.06-2.61-.02-4.74 2.12-4.75 4.78-2.93 3.04-.31 5.14 4.7 4.85z" className="st11" />
        <path d="M145.82 66.76c1.64-8.94-112.04-9.92-111.18-.74-44.51 10.12 135.03 14 111.18.74z" className="st11" />
      </g>
      <path id="faceback_1_" fill="#fff" stroke="#fff" d="M47.98 244.97c11.76-.75 93.59 7.93 92.95-6.3l-3.44-31.37-9.64-33.3c0-3.48-2.6-6.31-5.81-6.31H62.5c-3.21 0-5.81 2.82-5.81 6.31l-10.17 32.33-4.36 32.33c.01 3.48 2.61 6.31 5.82 6.31z" />
      <g id="blenderface_1_">
        <path d="M73.96 205.42c-1.57 17.23 13.16 18.67 14.46 1.42 1.57-17.23-13.16-18.67-14.46-1.42zM102.96 205.05c-1.57 17.23 13.16 18.67 14.46 1.42 1.57-17.22-13.15-18.67-14.46-1.42z" className="st14" />
        <path d="M85.13 206.02c-.36 5.1-7.72 4.38-7.23-.71.18-2.17-3.41-8.13-3.41-8.13s10.82 6.68 10.64 8.84zM114.19 204.43c-.36 5.1-7.72 4.38-7.23-.71.18-2.17 3.94-10.41 3.94-10.41s3.47 8.96 3.29 11.12z" className="st15" />
        <path d="M71.99 188.85l1.89 2.28M81.39 185.45c.06 1.06.13 2.13.19 3.19M90.91 191.18c-.49.76-.98 1.52-1.48 2.28M100.54 192.49c1.04.3 1.97 1.07 2.5 2.09M108.71 186.82c.14 1.06.28 2.13.42 3.19M119.64 191.83c-.7.61-1.4 1.22-2.1 1.82" className="st14" />
        <path d="M103.46 174.86c.84 5.55 6.91 9.73 16.21 10.36M89.18 174.76c-2.08 5.95-8.48 8.99-17.57 8.69" className="st16" />
        <path d="M75.35 224.58c-.78 2.36.81 5.29 3.35 6.19M119.37 225.43c.91 2.31-.5 5.33-2.99 6.38" className="st17" />
        <path fill="none" stroke="#000" strokeWidth="4" d="M86.32 234.42h19.36" />
      </g>
    </g>

  </ExclusionWrapper>)

export default ExclusionIcon;


/*


*/