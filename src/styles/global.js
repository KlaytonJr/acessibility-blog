import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    * {
        margin: 0,
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #fff;
    }

    h2 {
        font-size: ${props => props.theme.fonts.h2.fontSize};
        font-weight: bolder;
    }

    p {
        font-size: ${props => props.theme.fonts.p.fontSize}
    }
`;