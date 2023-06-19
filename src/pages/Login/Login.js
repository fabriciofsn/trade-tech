import React from "react";
import { DivLogin } from "./styledLogin";
import Button from "../../components/Button/Button";
import { SlUser } from "react-icons/sl";
import { BiLockAlt } from "react-icons/bi";

const Login = () => {
  const fields = [
    {
      type: "text",
      label: "email",
      example: "seuemail@domain.com",
      icon: <SlUser size={20} />,
    },
    {
      type: "password",
      label: "senha",
      example: "••••••••••••",
      icon: <BiLockAlt size={25} />,
    },
  ];

  return (
    <DivLogin>
      <div className="flex">
        <form action="">
          <div className="title">
            <h1>Login</h1>
          </div>
          {fields.map(({ type, label, example, icon }) => {
            return (
              <div key={label} className="campos">
                <label htmlFor={label}>{label}</label>
                <div className="input">
                  {icon}
                  <input
                    type={type}
                    id={label}
                    placeholder={example}
                    required
                  />
                </div>
              </div>
            );
          })}
          <div className="forgotPass">
            <label htmlFor="remember">
              <input type="checkbox" id="remember" />
              Lembrar Dados
            </label>
            <a href="#">
              <b>
                <i>Esqueceu a senha?</i>
              </b>
            </a>
            
          </div>
          <Button nome="Entrar" />
        </form>
      </div>
    </DivLogin>
  );
};

export default Login;
