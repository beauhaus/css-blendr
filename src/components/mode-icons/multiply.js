import React from 'react';
import styled from 'styled-components'

const MultiplyWrapper = styled.g`
    .st2,
.st3,
.st4,
.st6,
.st8{fill:none;stroke:#000;stroke-miterlimit:10}
.st3,
.st4,
.st6,
.st8{stroke-width:2}
.st4,
.st6,
.st8{stroke:gray;stroke-width:3}
.st6,
.st8{stroke:#b3b3b3}
.st8{stroke:#fff}
    #BG {
        fill: #000; /*TODO: delete?*/
    }
`

const MultiplyIcon = () => (
    <MultiplyWrapper>
        <circle id="BG" cx="150" cy="150" r="149" />
        <g id="copy_2">
            <g id="faceparts_1_">
                <g id="face_7_">
                    <path id="faceback_5_" fill="#999" stroke="#999" d="M199.32 221.25c9.44-.58 75.14 6.18 74.63-4.91l-2.76-24.43-7.74-25.93c0-2.71-2.09-4.91-4.66-4.91h-47.81c-2.58 0-4.66 2.2-4.66 4.91l-8.16 25.18-3.5 25.18c0 2.71 2.09 4.91 4.66 4.91z" />
                    <g id="eyes_3_">
                        <ellipse cx="223.86" cy="193.19" rx="3.51" ry="2.17" transform="matrix(.4559 -.89 .89 .4559 -50.1431 304.3651)" />
                        <ellipse cx="246.9" cy="194.24" rx="3.62" ry="2.42" transform="rotate(-56.79 246.88836465 194.22685231)" />
                        <path d="M220.52 189.47c-5.06 7.67 2.97 13.43 7.89 5.66 5.06-7.67-2.97-13.43-7.89-5.66z" className="st2" />
                        <path d="M243.32 191.6c-3.68 8.49 5.19 12.65 8.72 4.09 3.68-8.49-5.2-12.65-8.72-4.09z" className="st2" />
                    </g>
                    <g id="notch_1_">
                        <path d="M217.07 184.32c.5.59 1.01 1.19 1.51 1.78" className="st2" />
                        <path d="M224.61 181.68c.05.83.1 1.66.16 2.49" className="st2" />
                        <path d="M232.26 186.14c-.4.59-.79 1.18-1.19 1.77" className="st2" />
                        <path d="M239.99 187.16c.84.23 1.58.83 2.01 1.63" className="st2" />
                        <path d="M246.55 182.74c.11.83.23 1.66.34 2.49" className="st2" />
                        <path d="M255.32 186.65c-.56.47-1.12.95-1.69 1.42" className="st2" />
                    </g>
                    <g id="brows_3_">
                        <path d="M249.24 174.56c6.42-.42 10.97 2.84 12.36 8.12" className="st3" />
                        <path d="M235.99 182.78c-2.15-7.77-6.53-10.29-11.69-7.94" className="st3" />
                    </g>
                </g>
            </g>
            <g id="blenderbody_5_">
                <g id="base_5_">
                    <path d="M201.45 228.68c3.88 1.11 7.15 3.44 9.77 6.49 19.01.8 38.02.61 57.03-.61 1.61 0 2.92-1.37 2.92-3.07 2.44-6.12-57.86-2.36-69.72-2.81z" className="st4" />
                    <path d="M271.16 218.18s-5.25 5.32-39.64 4.71c-38.98.81-38.98-10.06-41.39-.45-.25 2.2.45 5.42 2.33 5.9 1.21-.26 2.47-.39 3.76-.39 1.99 0 3.85.3 5.59.83 23.12.86 46.24.75 69.37-.37 3.97-.02 3.98-10.2-.02-10.23z" className="st4" />
                </g>
                <g id="pitcher_5_">
                    <path d="M206.45 161.44c9.06.46 54.94 3.83 57.13-2.55 0-1.41-1.57-2.56-3.5-2.56-18.07.78-35.95.8-53.64 0-4.52-.05-4.54 5.16.01 5.11z" className="st4" />
                    <path d="M203.45 140.39c-3.64 4.95 1.36 11.09 3.03 16.36 16.66.88 33.31-.88 50.8.88 1.67 0 3.33-.88 4.16-1.75 9.16-21.93 18.32-43.87 17.24-68.14-6.25.83-.02 4.11 0 0-10.58 1.46-21.4-.3-32.23.58-.83 2.63-1.67 4.39-1.67 7.9-.83 1.75-1.67 4.39-2.35 6.26" className="st4" />
                    <path d="M218.53 88.6c-1.23 9.36-6.23 17.26-6.23 26.91-3.33 5.26-4.16 12.28-6.05 18.7" className="st4" />
                    <path d="M213.44 149.52c-1.41-2.34-2.68-4.77-3.83-7.26" className="st4" />
                    <path d="M210.02 131.72h3.73" className="st4" />
                    <path d="M211.24 143.64h10.49" className="st4" />
                    <path d="M214.12 149.6h7.18" className="st4" />
                </g>
                <g id="top_4_">
                    <path d="M251.25 72.83c-.81-4.89-10.13-5.27-18.29-4.68 3.03-.13 5.94.27 8.18 1.34 2.56 1.22 4 3.57 4.76 6.39.23.2.43.45.58.76l1.04-.01c4.75.27 5.41-1.54 3.73-3.8z" className="st4" />
                    <path d="M218.78 72.94c2.78-2.36 7.39-4.05 12.01-4.61-3.7.34-6.96.83-8.77 1.09-2.08.03-3.75 1.72-3.73 3.79-.3.31-.52.6-.67.89.06.24.11.47.17.71.12-.73.42-1.4.99-1.87z" className="st4" />
                    <path d="M218.8 80.6c.25 2.63.18 5.3-.25 7.91 4.99.08 9.99.05 14.98-.04" className="st4" />
                    <path d="M278.32 81.11c.49-2.85-14.33-4.39-31.98-4.73.3.46.49 1.07.48 1.84-.02 1.66-.11 3.32-.23 4.98-.04 1.71-.19 3.41-.38 5.01 15.18-.58 28.29-1.86 32.48-3.89 0-.97.01-1.97.01-2.98-.11-.08-.24-.15-.38-.23z" className="st4" />
                </g>
            </g>
            <path d="M283 81.8l-3.54 3.45s.77 5.48 1.18 6.9c2.14-1.93 2.98-2.27 4.56-3.12" className="st4" />
            <path d="M292.05 107.98c-2.62 13.06-8.12 25.74-12.59 27.82-1.73.81-9.86 1.65-10.41 2.47-1.32 2-2.91 7-2.91 7 4.49-6.43 16.29-2.69 24.41-8.62 1.86-4.23 3.3-7.45 5.7-13" className="st4" />
        </g>
        <g id="copy_1_1_">
            <g id="faceparts_2_">
                <g id="face_8_">
                    <path fill="#b3b3b3" stroke="#b3b3b3" d="M208.13 198.64l-9.13-30.6c0-3.2-2.46-5.8-5.5-5.8h-56.42c-3.04 0-5.5 2.6-5.5 5.8l-8.59 26.49c2.67 4.94 4.14 10.78 4.34 16.32.05 1.52-.04 3.06-.23 4.61 1.13 3.45 1.77 7.09 1.9 10.6.08 2.1-.1 4.25-.5 6.37.13.3.28.58.4.88 21.06.72 83.03 5.87 82.48-5.83 0-.01-3.25-28.84-3.25-28.84z" />
                    <g id="eyes_2_">
                        <ellipse cx="155.22" cy="200.16" rx="2.56" ry="4.14" transform="matrix(.89 -.4559 .4559 .89 -74.1798 92.7679)" />
                        <ellipse cx="182.41" cy="201.39" rx="2.85" ry="4.27" transform="rotate(-31.03 182.41213242 201.38676266)" />
                        <path d="M147.72 201.09c3.56 10.36 14.3 6.14 10.55-4.15-3.56-10.36-14.3-6.13-10.55 4.15z" className="st2" />
                        <path d="M175.1 202.86c3.56 10.36 14.3 6.14 10.55-4.15-3.56-10.36-14.3-6.14-10.55 4.15z" className="st2" />
                    </g>
                    <g id="notch_2_">
                        <path d="M144.26 189.69c.6.7 1.19 1.4 1.79 2.1" className="st2" />
                        <path d="M153.16 186.57l.18 2.94" className="st2" />
                        <path d="M162.18 191.83c-.47.7-.93 1.39-1.4 2.09" className="st2" />
                        <path d="M171.31 193.04c.99.28 1.86.98 2.37 1.92" className="st2" />
                        <path d="M179.05 187.83c.13.98.27 1.96.4 2.93" className="st2" />
                        <path d="M189.41 192.44c-.66.56-1.33 1.12-1.99 1.68" className="st2" />
                    </g>
                    <g id="brows_2_">
                        <path d="M182.23 178.17c7.58-.5 12.94 3.35 14.58 9.59" className="st3" />
                        <path d="M151.32 177.67c-9.06-.26-13.33 4.02-12.68 10.97" className="st3" />
                    </g>
                    <ellipse id="mouth_6_" cx="167.16" cy="217.32" className="st3" rx="3.22" ry="6.86" />
                </g>
            </g>
            <g id="blenderbody_6_">
                <g id="base_6_">
                    <path d="M131.34 242.07c.23 1.49.38 2.98.43 4.45.03.97.01 1.94-.06 2.92 24.31 1.25 48.63 1.1 72.94-.46 1.9 0 3.44-1.62 3.44-3.62 2.62-6.53-55.24-3.54-76.75-3.29z" className="st6" />
                    <path d="M208.09 229.65s-6.19 6.28-46.79 5.56c-15.39.32-25.63-.9-32.55-2.25 1.27 2.98 2.15 6.18 2.62 9.38 25.57.82 51.14.63 76.71-.61 4.73-.03 4.73-12.05.01-12.08z" className="st6" />
                </g>
                <g id="pitcher_6_">
                    <path d="M229.72 134.55c10.83-24.61 38.71-78-8.8-63.96l-4.13 4.02s.9 6.39 1.38 8.05c30.51-27.48 9.43 45.86-1.38 50.9-2.02.94-11.5 1.92-12.13 2.89-1.54 2.33-3.4 8.17-3.4 8.17 5.24-7.52 19-3.16 28.46-10.07z" className="st6" />
                    <path d="M131.72 162.69c10.69.55 64.84 4.52 67.43-3.01 0-1.67-1.85-3.02-4.13-3.02-21.32.93-42.42.95-63.3 0-5.33-.06-5.37 6.08 0 6.03z" className="st6" />
                    <path d="M156.79 76.9c-5.35 0-10.71-.02-16.06-.19" className="st6" />
                    <path d="M127.19 140.41c-.47.05-1.12.37-1.57.51.9 2.5 2.4 5.15 2.86 7.8-.28 4.52 2.22 8.03 6.38 8.03 19.99.88 40.81 2.63 60.8 0 13.33-25.44 22.49-52.64 22.76-81.47-1.52 2.8-1.3 6.4-.8 9.46.79-3.08.65-6.3.8-9.46-14.8 2.27-29.84.16-44.66 2.17" className="st6" />
                    <path d="M131.87 130.46c-.72-2.07-1.41-4.15-2.1-6.23" className="st6" />
                    <path d="M139.98 148.62c-1.71-2.83-3.19-5.8-4.52-8.84" className="st6" />
                    <path d="M131.2 119.58h4.57" className="st6" />
                    <path d="M137.38 141.69h12.39" className="st6" />
                    <path d="M140.79 148.72h8.46" className="st6" />
                </g>
                <g id="top_5_">
                    <path d="M184.6 58.11c-1.49-9-27.4-5.05-34.49-4.03-1.44.02-2.69.72-3.49 1.78.1-.01.21-.02.31-.02.96 0 1.75.33 2.38.85.68-.79 1.62-1.29 2.83-1.29 1.14 0 2.04.46 2.7 1.18.24-.01.48-.03.72-.04.41-.16.86-.26 1.36-.26.39 0 .74.07 1.07.18.7-.01 1.4-.03 2.08-.02.5 0 1.01.03 1.51.08.04 0 .08-.01.13-.01.39 0 .76.06 1.09.16 2.03.32 4 1.03 5.62 2.42.08.07.15.15.22.22 1.17.87 2.14 1.98 2.81 3.38l8.74-.1c5.61.32 6.39-1.81 4.41-4.48z" className="st6" />
                    <path d="M157.61 69.56c-.62-.69-1.02-1.51-1.21-2.38-.23.04-.47.07-.73.07-1.25 0-2.21-.54-2.9-1.38-.21.04-.42.06-.64.06-.97 0-1.76-.33-2.39-.86-.68.79-1.61 1.3-2.82 1.3-.14 0-.27-.01-.41-.02-.6 1.3-1.65 2.26-3.16 2.41-.5.67-1.1 1.24-1.82 1.63-.34.18-.66.3-.97.37-.2.75-.43 1.5-.68 2.29-.37 1.16-.54 2.29-.63 3.42 5.83.16 12.02.24 18.3.22.03-.62.14-1.25.32-1.84-.03-.61.08-1.17.29-1.65-.05-1.3-.22-2.53-.55-3.64z" className="st6" />
                    <path d="M216.55 67.89c.64-3.77-21.34-5.59-45.32-5.66.6 1.1 1.01 2.41 1.19 3.93.74 3.27.6 6.91-.02 10.31 28.74-.78 53.78-3.57 44.15-8.58z" className="st6" />
                </g>
            </g>
        </g>
        <g id="orig">
            <g id="faceparts">
                <g id="face_2_">
                    <path fill="#fff" stroke="#fff" d="M128.11 206.32l-10.5-35.21c0-3.68-2.83-6.67-6.33-6.67H46.37c-3.5 0-6.33 2.99-6.33 6.67L28.95 205.3l-3.97 25.55c3.42 3.63 8.49 10.64 11.3 14.69.1.15 1.24 1.35 1.4 1.59 21.65.48 94.82 6.27 94.17-7.64l-3.74-33.17z" />
                    <g id="eyes_1_">
                        <ellipse cx="67.24" cy="208.07" rx="2.95" ry="4.77" transform="matrix(.89 -.4559 .4559 .89 -87.458 53.5303)" />
                        <ellipse cx="98.52" cy="209.48" rx="3.28" ry="4.92" transform="rotate(-31.03 98.52463022 209.48045506)" />
                        <path d="M58.61 209.14c4.1 11.92 16.45 7.06 12.14-4.77-4.1-11.92-16.45-7.06-12.14 4.77z" className="st2" />
                        <path d="M90.12 211.17c4.1 11.92 16.45 7.06 12.14-4.77-4.11-11.92-16.46-7.06-12.14 4.77z" className="st2" />
                    </g>
                    <g id="notch">
                        <path d="M54.63 196.02c.69.8 1.37 1.61 2.06 2.41" className="st2" />
                        <path d="M64.87 192.43c.07 1.13.14 2.25.21 3.38" className="st2" />
                        <path d="M75.25 198.49c-.54.8-1.07 1.6-1.61 2.41" className="st2" />
                        <path d="M85.75 199.87c1.14.32 2.14 1.13 2.73 2.21" className="st2" />
                        <path d="M94.65 193.88c.15 1.13.31 2.25.46 3.38" className="st2" />
                        <path d="M106.57 199.18c-.76.64-1.53 1.29-2.29 1.93" className="st2" />
                    </g>
                    <g id="brows_1_">
                        <path d="M98.32 182.76c8.72-.57 14.89 3.86 16.78 11.03" className="st3" />
                        <path d="M62.75 182.2c-10.43-.3-15.33 4.62-14.59 12.62" className="st3" />
                    </g>
                    <ellipse id="mouth_3_" cx="80.98" cy="227.81" className="st3" rx="3.71" ry="7.9" />
                </g>
            </g>
            <g id="blenderbody_1_">
                <g id="base_1_">
                    <path d="M56 265.33c23.37.75 44.74.41 68.12-1.09 2.19 0 3.96-4.87 3.96-7.17" className="st8" />
                    <path d="M46.87 256.7c28.07.8 53.13.55 81.2-.81 5.42-.03 5.43-13.87 0-13.9 0 0-7.12 7.23-53.83 6.39-19.84.41-29.24-.4-37.17-2.15" className="st8" />
                </g>
                <g id="pitcher_1_">
                    <path d="M152.96 132.59c12.46-28.31 44.53-89.74-10.13-73.59l-4.75 4.62s1.04 7.36 1.58 9.26c35.11-31.61 10.85 52.76-1.58 58.55-2.32 1.08-13.23 2.21-13.96 3.32-1.77 2.69-3.91 9.4-3.91 9.4 6.03-8.63 21.86-3.61 32.75-11.56z" className="st8" />
                    <path d="M40.21 164.95c12.3.63 74.59 5.2 77.57-3.47 0-1.92-2.13-3.47-4.75-3.47-24.53 1.07-48.81 1.09-72.82 0-6.14-.06-6.18 7.01 0 6.94z" className="st8" />
                    <path d="M17.21 80.88c2.22 19.28 14.37 57.09 23 77.14l72.82 1.16c15.45-31.55 25.12-63.14 26.91-94.79 0 2.06-77.85 2.29-113.63 1.03" className="st8" />
                    <path d="M49.71 148.77c-7.36-12.11-19.55-49.01-20.58-63.58" className="st8" />
                    <path d="M28.33 85.19h19.79" className="st8" />
                    <path d="M30.47 96.87h9.74" className="st8" />
                    <path d="M33.92 106.12h9.73" className="st8" />
                    <path d="M36.94 115.36h7.92" className="st8" />
                    <path d="M40.39 124.61h9.73" className="st8" />
                    <path d="M43.28 131.55h6.33" className="st8" />
                    <path d="M46.72 140.79h14.25" className="st8" />
                    <path d="M50.64 148.89h9.73" className="st8" />
                </g>
                <g id="top_1_">
                    <path d="M61.46 50.19l34.51-.4c6.44.38 7.35-2.08 5.06-5.15-1.72-10.36-31.52-5.81-39.68-4.63-2.82.03-5.09 2.34-5.06 5.15-3.12 3.27-.24 5.44 5.17 5.03z" className="st8" />
                    <path d="M26.79 64.61c38.82 3.34 129.31.8 111.01-8.72 1.21-7.07-66.77-8.21-101.07-4.32" className="st8" />
                </g>
            </g>
        </g>
        <path d="M225.2 204.56c6.27 2.49 18.81 1.35 25.82-.88 0 0-5.83 13.16-15.82 13.16-10 0-10-12.28-10-12.28z" className="st3" />
    </MultiplyWrapper>)

export default MultiplyIcon;
