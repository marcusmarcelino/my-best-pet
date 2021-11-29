import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth'

import * as S from './styles'

const Login: React.FC = () => {
  const { signIn } = useContext(AuthContext)
  return (
    <S.Container>
      <h1>Logar</h1>
      <Link to="/">voltar para home</Link>
      <button onClick={signIn}>Entrar</button>
    </S.Container>
  )
}

export default Login
