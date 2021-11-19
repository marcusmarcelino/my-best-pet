import React from 'react'
import { Link } from 'react-router-dom'

import * as S from './styles'

const Login: React.FC = () => {
  return (
    <S.Container>
      <h1>Logar</h1>
      <Link to="/">voltar para home</Link>
      <button>Entrar</button>
    </S.Container>
  )
}

export default Login
