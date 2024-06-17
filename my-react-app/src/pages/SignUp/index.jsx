import { Container } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn = () => {
   return (
    <Container>
    <div className="logo">
        <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Polygon 1" d="M13.5391 0L26.5294 7.5V22.5L13.5391 30L0.548681 22.5V7.5L13.5391 0Z" fill="#065E7C"/>
        </svg>
      <h1>food explorer</h1>
    </div>

    <div className="form">
        <h2>Crie sua conta</h2>

        <Input 
        label="Seu nome"
        placeholder="Exemplo: Maria da Silva" 
        type="text" />

        <Input 
        label="Email"
        placeholder="Exemplo: exemplo@exemplo.com.br" 
        type="text" />

        <Input 
        label="Senha"
        placeholder="No mínimo 6 caracteres" 
        type="password" />

        <Button>Criar conta</Button>

        <a href="/signup">Já tenho uma conta</a>
    </div>


    </Container>
  );
};

export default SignIn;