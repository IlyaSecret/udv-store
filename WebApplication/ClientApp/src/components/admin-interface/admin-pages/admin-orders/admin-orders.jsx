import { useGetOrdersQuery } from "../../../../redux/ucoin-req/ucoinRequestApi"
import { AdminOrderCard } from "../../admin-order-card/admin-order-card"
import "./admin-orders.css"

export const AdminOrders = () => {
    let {data, error} = useGetOrdersQuery()
    return (
        <div className="admin-orders">
            <div className="admin-orders__head">
                <div className="admin-orders__order-number">Номер заказа</div>
                <div className="admin-orders__name">ФИО</div>
                <div className="admin-orders__products">Заказ</div>
                <div className="admin-orders__curr-status">Текущий</div>
                <div className="admin-orders__next-status">Следующий</div>
            </div>
            <div className="admin-orders__list">
                {data?.map(order => <AdminOrderCard order={order} key={order.id}/>)}
            </div>
        </div>
    )
}