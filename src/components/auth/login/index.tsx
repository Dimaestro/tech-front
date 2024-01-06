import React from 'react';
import style from './LoginPage.module.css';
import Greeting from "./Greeting";

const LoginPage = () => {
  const name = "Dima"
  return (
    <div>
      <h1 className={style.title}>Login page</h1>
      <Greeting name={name}/>
    </div>
  );
};

export default LoginPage;
