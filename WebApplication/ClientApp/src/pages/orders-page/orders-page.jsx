
import { OrderCard } from "../../components/order-card/order-card";
import "./orders-page.css";
import { useAddOrderMutation, useGetOrdersQuery } from "../../redux/ucoin-req/ucoinRequestApi";

export const OrdersPage = () => {
    
    let {data, error} = useGetOrdersQuery()
    return (
        <div className="orders-page">
            {data?.map(order => <OrderCard order={order} />) }
        </div>
    )
}