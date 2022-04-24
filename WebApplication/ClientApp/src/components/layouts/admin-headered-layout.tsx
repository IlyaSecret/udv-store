import { Outlet } from "react-router-dom"
import { AdminHeader } from "../admin-interface/admin-header/admin-header";

export const AdminHeaderedLayout = () => {
    return <>
      <AdminHeader />  
      <Outlet />
    </>
  }