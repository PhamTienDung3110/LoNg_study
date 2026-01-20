import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layout/DashboardLayout";
import RequireAuth from "./RequireAuth";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    
      <Route path="/dashboard" element={
        <RequireAuth>
          <DashboardLayout />
        </RequireAuth>}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<div>Profile</div>} />
      </Route>

      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}
