import { keyframes } from "styled-components";

export const blink = keyframes`
    0%{
        opacity:1
    }
    50%{
        opacity:0
    }
    100%{
        opacity:1
    }
`;

export const sliderText = keyframes`
    0%{
        transform:translate(150%)
    }
    100%{
        transform:translate(-120%)
    }
`;
