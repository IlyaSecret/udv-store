
import { OrderCard } from "../../components/order-card/order-card";
import { useGetOrdersQuery } from "../../redux/orders/ordersApi";
import "./orders-page.css";

export const OrdersPage = () => {
    let {data, error} = useGetOrdersQuery()
    return (
        <div className="orders-page">
            {data.map(order => <OrderCard order={order} />) }
        </div>
    )
}