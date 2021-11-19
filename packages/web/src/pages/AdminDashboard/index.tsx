import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import * as S from './styles'

const AdminDashboard: React.FC = () => {
  return (
    <S.Container>
      <h1>AdminDashboard</h1>
      <Link to="/admin-profile">Profile</Link>
      <Outlet />
    </S.Container>
  )
}

export default AdminDashboard
