import React, { createContext, useState } from 'react'
import { Roles } from '../Roles/roles'

type AuthProviderProps = {
  children: JSX.Element
}

type AuthContextData = {
  signIn: () => void
  signOut: () => void
  isAuthenticated: boolean
  loading: boolean
  user: User | null
}

type User = {
  id: string
  name: string
  email: string
  password: string
  role: Roles
}

const AuthContext = createContext({} as AuthContextData)

const AuthProvider = (props: AuthProviderProps): JSX.Element => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  const signIn = () => {
    setUser({
      id: '1',
      name: 'Marcus',
      email: 'marcus@mail.com',
      password: 'password',
      role: Roles.Admin
    })
    setLoading(true)
    setAuthenticated(true)
    setLoading(false)
  }

  const signOut = () => {
    setUser(null)
    setLoading(false)
    setAuthenticated(false)
  }

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, isAuthenticated, loading, user }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
