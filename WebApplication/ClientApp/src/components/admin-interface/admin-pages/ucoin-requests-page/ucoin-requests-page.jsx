import { useGetRequestsQuery } from "../../../../redux/ucoin-req/ucoinRequestApi";
import { useEffect} from "react";
import { UcoinRequestsCard } from "../../ucoin-requests-card/ucoin-requests-card";
import "./ucoin-requests-page.css";
import { getAllUsers } from "../../../../redux/user/all-users-reducer";
import { useDispatch} from 'react-redux';
import { EmptyComponent } from "../../../empty-orders/empty-orders";

export const UcoinRequestPage = () => {
    const disppatch = useDispatch();
    useEffect(() => {
        disppatch(getAllUsers());
    }, [disppatch]);
    let {data, error} = useGetRequestsQuery();
    if (data?.length === 0) {
        return <EmptyComponent value="Заявок нет"></EmptyComponent>
    }
    else {
        return (
            <div className="ucoin-requests-page">
                {data?.map(request => <UcoinRequestsCard request={request} key={request.id}/>)}
            </div>
        )
    }
    
}