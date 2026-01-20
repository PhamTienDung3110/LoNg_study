import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const isAuthenticated= false;
  const location = useLocation();
  if (!isAuthenticated) {
    return (
      <Navigate to="/login" replace state={{ from: location}} />
    )
  }
  return children;

}