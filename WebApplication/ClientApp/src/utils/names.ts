import { Console } from "console";
import { RootStateOrAny, useSelector } from "react-redux";

const user = useSelector((state:RootStateOrAny)=>state.user.user)
export const [lastName, firstName, patronymic] = user.fio?.split(' ')