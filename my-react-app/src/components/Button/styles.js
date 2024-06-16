import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary}; /* Cor de fundo vermelha do tema */
  color: ${({ theme }) => theme.colors.light.light100}; /* Cor do texto branca do tema */

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.5;
  }
`;
