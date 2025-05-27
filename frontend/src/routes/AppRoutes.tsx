import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dsashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProtectedRoute from './ProtectedRoute';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
