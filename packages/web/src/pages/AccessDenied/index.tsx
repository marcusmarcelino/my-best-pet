import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'

const AccessDenied: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 7000)
    // eslint-disable-next-line
  }, []);

  return (
    <S.Container>
      <h1>Desculpe, seu perfil de usuário não possui acesso a esta rota!</h1>
    </S.Container>
  )
}

export default AccessDenied
