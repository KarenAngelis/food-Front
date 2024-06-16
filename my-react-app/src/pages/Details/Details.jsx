import React from 'react';
import { Container } from './styles'; // Certifique-se de que está importando Container corretamente
import Button from '../../components/Button'; // Certifique-se de que está importando Button corretamente

export function Details() {
  return (
    <Container>
      <h1>Hello World</h1>
      <Button>Hello World</Button> {/* Corrigindo o uso do componente Button */}
    </Container>
  );
}
