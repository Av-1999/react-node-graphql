import type { JSX } from 'react'
import { Navigate } from 'react-router-dom'

interface Props {
  children: JSX.Element
}

const isAuthenticated = () => {
  // Replace this with real auth logic (Redux, Context, etc.)
  return localStorage.getItem('token') !== null
}

export default function ProtectedRoute({ children }: Props) {
  return isAuthenticated() ? children : <Navigate to="/login" replace />
}