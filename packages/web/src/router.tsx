import React, { useContext } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'

import AccessDenied from './pages/AccessDenied'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import AdminDashboard from './pages/AdminDashboard'
import UserDashboard from './pages/UserDashboard'

import { AuthContext } from './contexts/auth'
import { Roles } from './Roles/roles'
import AdminProfile from './pages/AdminProfile'
import Spinner from './components/molecules/Spinner'
import Login from './pages/Login'
import UserProfile from './pages/UserProfile'

type PrivateData = {
  children: JSX.Element
  roles: Array<Roles>
}

const PrivateRoute = ({ children, roles }: PrivateData) => {
  const location = useLocation()

  const { isAuthenticated, loading, user } = useContext(AuthContext)

  const userHasRequiredRole = !!(user && roles.includes(user.role))

  if (loading) {
    return <Spinner />
  }

  if (isAuthenticated && !userHasRequiredRole) {
    return <AccessDenied />
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return children
}

const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route
        path="admin-dashboard"
        element={
          <PrivateRoute roles={[Roles.Admin]}>
            <AdminDashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="admin-profile"
        element={
          <PrivateRoute roles={[Roles.Admin]}>
            <AdminProfile />
          </PrivateRoute>
        }
      />

      <Route
        path="user-dashboard"
        element={
          <PrivateRoute roles={[Roles.User]}>
            <UserDashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="user-profile"
        element={
          <PrivateRoute roles={[Roles.User]}>
            <UserProfile />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export { MainRoutes }
