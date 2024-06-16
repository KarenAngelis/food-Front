import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark.dark900}; /* Cor de fundo do input */
  color: ${({ theme }) => theme.colors.light.light300}; /* Cor do texto */

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;
    padding: 12px;
    color: ${({ theme }) => theme.colors.light.light400}; /* Cor do texto do input */
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.light.light100}; /* Cor do input */
    outline: none;
    border-radius: 5px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.light.light300}; /* Cor do placeholder */
    }
  }

  > svg {
    margin-left: 16px;
  }
`;
