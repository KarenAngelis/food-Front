import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.dark.dark400}; /* Ajuste para a cor de fundo */
    color: ${({ theme }) => theme.colors.light.light100}; /* Ajuste para a cor do texto */
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.light.light100}; /* Ajuste para a cor dos links */
    cursor: pointer;
    transition: filter 0.2s;
  }

  a:hover,
  button:hover {
    filter: brightness(0.9);
  }

  input, button {
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
  }
`;
