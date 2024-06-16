import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8rem;
  background-color: ${({ theme }) => theme.colors.dark.dark900};

  svg {
    width: 27px;
    height: 30px;
  }

  h1 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.light.light100};
    font-family: ${({ theme }) => theme.fonts.headings};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  form {
    background-color: ${({ theme }) => theme.colors.dark.dark600};
    padding: 2rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    h2 {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.light.light100};
      margin-bottom: 1rem;
      font-family: ${({ theme }) => theme.fonts.headings};
    }

    input {
      width: 100%;
      padding: 1rem;
      border-radius: 5px;
      border: 1px solid ${({ theme }) => theme.colors.light.light300};
      background-color: ${({ theme }) => theme.colors.dark.dark900};
      color: ${({ theme }) => theme.colors.light.light100};
      font-family: ${({ theme }) => theme.fonts.main};

      &::placeholder {
        color: ${({ theme }) => theme.colors.light.light300};
      }
    }

    button {
      width: 100%;
      padding: 1rem;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.light.light100};
      border: none;
      font-weight: bold;
      font-family: ${({ theme }) => theme.fonts.main};
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: ${({ theme }) => theme.colors.primaryDark};
      }
    }

    a {
      margin-top: 1rem;
      color: ${({ theme }) => theme.colors.light.light100};
      text-decoration: none;
      font-family: ${({ theme }) => theme.fonts.main};
      transition: color 0.3s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.light.light200};
      }
    }
  }
`;

