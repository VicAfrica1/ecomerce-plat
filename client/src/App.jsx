import { Navigate, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import AdminProtectedRoute from './components/AdminProtectedRoute.jsx'
import ElectronicsPage from './pages/ElectronicsPage.jsx'
import { useAuth } from './context/AuthContext.jsx'

function App() {
  const { user, logout } = useAuth()
  const [open, setOpen] = useState(false)
  return (
    <>
      {user && (
        <div className="settings-corner">
          <button className="settings-btn" onClick={() => setOpen(!open)} aria-label="Settings">⚙</button>
          {open && (
            <div className="settings-dropdown">
              <button onClick={() => alert('Edit profile picture')}>Edit profile picture</button>
              <button onClick={() => alert('Edit name')}>Edit name</button>
              <button onClick={() => alert('Edit phone')}>Edit phone</button>
              <button onClick={() => alert('Edit address')}>Edit address</button>
              <button onClick={() => alert('Edit theme')}>Edit theme</button>
              <button onClick={() => { logout(); setOpen(false) }}>Log out</button>
            </div>
          )}
        </div>
      )}
      <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/admin"
        element={
          <AdminProtectedRoute>
            <AdminDashboard />
          </AdminProtectedRoute>
        }
      />
      <Route path="/electronics" element={<ProtectedRoute><ElectronicsPage /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </>
  )
}

export default App