import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.tints.tomato100}; /* Cor de fundo vermelha do tema */
  color: ${({ theme }) => theme.colors.light.light100}; /* Cor do texto branca do tema */

  height: 3.5rem; /* 56px para rem */
  border: 0;
  padding: 0 1rem; /* 16px para rem */
  margin-top: 1rem; /* 16px para rem */
  border-radius: 0.625rem; /* 10px para rem */
  font-weight: 500;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.5;
  }

  /* Media queries para responsividade */
  @media (min-width: 576px) {
    width: 90%; /* Ajuste para telas pequenas */
  }

  @media (min-width: 768px) {
    width: 80%; /* Ajuste para tablets */
  }

  @media (min-width: 992px) {
    width: 70%; /* Ajuste para telas médias */
  }

  @media (min-width: 1200px) {
    width: 60%; /* Ajuste para telas grandes */
  }
`;