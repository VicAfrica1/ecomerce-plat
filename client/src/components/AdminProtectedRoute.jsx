import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function AdminProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return null;
  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== "admin") return <Navigate to="/" replace />;
  return children;
}
