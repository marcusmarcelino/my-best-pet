import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './contexts/auth'
import { MainRoutes } from './router'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <MainRoutes />
      </Router>
    </AuthProvider>
  )
}

export default App
