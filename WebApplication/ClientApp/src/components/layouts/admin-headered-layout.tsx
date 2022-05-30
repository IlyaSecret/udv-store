import { RootStateOrAny, useSelector } from "react-redux";
import { Outlet } from "react-router-dom"
import { AdminHeader } from "../admin-interface/admin-header/admin-header";

export const AdminHeaderedLayout = () => {
  const user = useSelector((state : RootStateOrAny) => state.user);
  const normal = <>
    <AdminHeader />  
      <Outlet />
</>
  const not = <>Для отображения содержимого нужно зайти в аккаунт администратора</>

  if (user.status == "succes" && user.user.fio === "admin") {
    return normal;
  }
  else {
    return not
  }
  }