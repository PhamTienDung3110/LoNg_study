import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <>
    <div>header</div>
    <Outlet />
    <div>footer</div>
    </>
  )
}