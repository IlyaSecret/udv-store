import { useGetRequestsQuery } from "../../../../redux/ucoin-req/ucoinRequestApi";
import { UcoinRequestsCard } from "../../ucoin-requests-card/ucoin-requests-card";
import "./ucoin-requests-page.css";

export const UcoinRequestPage = () => {

    let {data, error} = useGetRequestsQuery();
    console.log(error);
    return (
        <div className="ucoin-requests-page">
            {data?.map(request => <UcoinRequestsCard request={request} key={request.id}/>)}
        </div>
    )
}