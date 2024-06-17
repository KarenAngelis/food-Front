import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Definir o tamanho da fonte do elemento raiz */
  html {
      font-size: 16px; /* 1rem = 16px */
  }

  body {
      font-family: 'Roboto', sans-serif;
      margin: 0;
      padding: 0;
  }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 6.25rem; /* 100px */

    @media (max-width: 48rem) { /* 768px */
        flex-direction: column;
        padding-top: 3.125rem; /* 50px */
    }

    .logo {
        display: flex;
        align-items: center;
        gap: 1.25rem; /* 20px */

        svg {
            width: 3.08925rem; /* 49.428px */
            height: 2.9688125rem; /* 47.501px */
        }

        h1 {
            color: var(--Light-Light-100, #FFF);
            font-family: 'Roboto';
            font-size: 2.625rem; /* 42px */
            font-weight: 700;
            padding-right: 25rem; /* 400px */
            text-align: center;

            @media (max-width: 48rem) { /* 768px */
                font-size: 2rem; /* 32px */
                padding-right: 0;
                margin-bottom: 1.25rem; /* 20px */
            }
        }
    }

    .form {
        display: inline-flex;
        padding: 4rem; /* 64px */
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 1rem; /* 16px */
        background: var(--Dark-Dark-700, #001119);
        margin-left: 1.25rem; /* 20px */
        gap: 1.25rem; /* 20px */

        @media (max-width: 48rem) { /* 768px */
            margin-left: 0;
            width: 90%;
            padding: 2rem; /* 32px */
        }

        h2, a {
            color: var(--Light-Light-100, #FFF);
            text-align: center;
            font-family: 'Poppins';
        }

        h2 {
            font-size: 2rem; /* 32px */
            font-weight: 500;
            line-height: 140%; /* 44.8px */

            @media (max-width: 48rem) { /* 768px */
                font-size: 1.5rem; /* 24px */
            }
        }

        a {
            font-size: 0.875rem; /* 14px */
            font-weight: 500;
            line-height: 1.5rem; /* 24px */
        }

        button {
            align-self: stretch;
            width: 100%;
            margin-top: -0.25rem;
        }
    }
`;