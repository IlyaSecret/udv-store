import { Link, Outlet } from "react-router-dom"
import { Header } from "../header/header"
import { useSelector, RootStateOrAny } from 'react-redux';

export const HeaderedLayout = () => {
  const user = useSelector((state : RootStateOrAny) => state.user);
  const normal = <>
  <Header />  
  <Outlet />
</>
    const not = <>Сначала <Link to="/sign-in" className="green" style={{}}>авторизуйтесь</Link></> ;
  if (user.status == "succes") {
    return normal;
  }
  else {
    return not
  }
  }