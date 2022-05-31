
import { OrderCard } from "../../components/order-card/order-card";
import "./orders-page.css";
import { useAddOrderMutation, useGetOrdersQuery } from "../../redux/ucoin-req/ucoinRequestApi";
import { EmptyComponent } from "../../components/empty-orders/empty-orders";

export const OrdersPage = () => {
    
    let {data, error} = useGetOrdersQuery()
    if (data?.length === 0) {
        return <EmptyComponent value="Заказов нет"></EmptyComponent>
    }
    else {
        return (
            <div className="orders-page">
                {data?.map(order => <OrderCard order={order} />) }
            </div>
        )
    }
    
}