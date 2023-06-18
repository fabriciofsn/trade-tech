import React from 'react'
import { ButtonStyled } from './ButtonStyled';

const Button = (props) => {
  return (
    <ButtonStyled>{props.nome}</ButtonStyled>
  )
}

export default Button