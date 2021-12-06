import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --blue: #2196F3;
    --background: #d7d7d7;
    --gray-100: #E0E0E0;
    --gray-200: #9E9E9E;
    --black: #000000;
    --shape: #ffffff;
  }

  body{
    background: var(--background);
  }

  body, button, input, textarea{
    -webkit-font-smoothing: antialised;
    font-family: Roboto;
  }

  html{
    @media(max-width:1080px){
      font-size: 93.75%;
    }
    @media(max-width:720px){
      font-size: 87.5%;
    }
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    cursor: not-allowed;
    opacity: 0.5;
  }

  .react-overlay-transaction{
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;

    background: rgba(0,0,0,0.5);

    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .react-modal-transaction{
    width: 100%;
    max-width: 576px;
    position: relative;
    padding: 3rem;
    border-radius: 0.3rem;
    background: var(--gray-100);
  }
`