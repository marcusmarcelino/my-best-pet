import React from 'react'
import { Outlet } from 'react-router-dom'

import * as S from './styles'

const UserDashboard: React.FC = () => {
  return (
    <S.Container>
      <h1>UserDashboard</h1>

      <Outlet />
    </S.Container>
  )
}

export default UserDashboard
