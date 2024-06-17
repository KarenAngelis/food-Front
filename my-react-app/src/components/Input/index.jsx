import React from 'react';
import { Container } from './styles';

const Input = ({ label, name, placeholder, type, icon: Icon, ...rest }) => {
  return (
    <Container>
      {label && <label htmlFor={name}>{label}</label>}
      <div className="input-wrapper">
        {Icon && <Icon size={20} />}
        <input 
          id={name}
          name={name}
          placeholder={placeholder}
          type={type}
          {...rest}
        />
      </div>
    </Container>
  );
};

export default Input;
