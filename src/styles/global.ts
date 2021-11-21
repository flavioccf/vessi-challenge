import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --v-light-gray: #E6E6E6;
    --v-dark-blue: #015964;
    --v-light-blue: #67979D;
    --v-gray: #E5E5E5;
    --v-white: #ffffff;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--v-white);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Metropolis-Regular';
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  @keyframes swing-in-top-fwd {
        0% {
            transform: rotateX(-100deg);
            transform-origin: top;
            opacity: 0;
        }
        100% {
            transform: rotateX(0deg);
            transform-origin: top;
            opacity: 1;
        }
  }
`;
