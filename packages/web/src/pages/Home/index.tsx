import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth'
import * as S from './styles'

const Home: React.FC = () => {
  const { signIn } = useContext(AuthContext)
  const navigate = useNavigate()
  const login = async () => {
    await signIn()
    navigate('admin-dashboard')
  }
  return (
    <S.Container>
      <h1>Bem vindo ao PetLife</h1>
      <button onClick={login}>Logar</button>
      <Link to="admin-dashboard">Entrar sem logar</Link>
    </S.Container>
  )
}

export default Home
