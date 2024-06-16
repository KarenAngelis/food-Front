import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';


import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para manipular o submit do formulário
  };

  return (
    <Container>
        <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Polygon 1" d="M13.5391 0L26.5294 7.5V22.5L13.5391 30L0.548681 22.5V7.5L13.5391 0Z" fill="#065E7C"/>
        </svg>

      <h1>food explorer</h1>

      <form onSubmit={handleSubmit}>
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Senha" />
        <Button type="submit">Entrar</Button>
      </form>

    </Container>
  );
};

export default SignIn;

