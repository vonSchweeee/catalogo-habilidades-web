import React from 'react';
import './styles.scss';

const AuthPage: React.FC = () => {
  return (
    <div className="auth-page auth-page-container">
      <div className="login-container">
        <h1 className="txt-login">Login</h1>
        <input className="input" type="text" placeholder="E-mail" />
        <input className="input" type="text" placeholder="Senha" />
        <button className="btn">Enviar</button>
      </div>
    </div>
  );
};

export default AuthPage;