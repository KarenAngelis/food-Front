import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25rem; /* 20px para rem */

  > label {
    margin-bottom: 0.5rem; /* 8px para rem */
    font-size: 1rem; /* 16px para rem */
    color: ${({ theme }) => theme.colors.light.light400};
    line-height: 100%; 
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.dark.dark900};
    border: transparent; // Ajuste conforme necessário
    border-radius: 0.3125rem; /* 5px para rem */
    padding: 0.75rem 0.875rem; /* 12px 14px para rem */
    color: white;
    width: 21.75rem; /* 348px para rem */
    height: 3rem; /* 48px para rem */
    justify-content: center;

    svg {
      margin-right: 0.625rem; /* 10px para rem */
    }

    input {
      flex: 1;
      border: none;
      outline: none;
      padding: 0.625rem; /* 10px para rem */
      font-size: 1rem; /* 16px para rem */
      background-color: ${({ theme }) => theme.colors.dark.dark900};
    }
  }

  
`;