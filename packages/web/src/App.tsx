import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './contexts/auth'
import { MainRoutes } from './router'

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <MainRoutes />
      </AuthProvider>
    </Router>
  )
}

export default App
