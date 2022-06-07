import "./admin-order-card.css";
import { statuses } from '../../../utils/statuses';
import { useChangeOrderStatusMutation, useGetProductsQuery } from "../../../redux/ucoin-req/ucoinRequestApi";

export const AdminOrderCard = ({order } : {order : any}) => {
    let {data, error} = useGetProductsQuery(order.id);
    let names = data?.map((el : any) => el.productName + ' ')
    let [changeStatus] = useChangeOrderStatusMutation();
    const clickHandler = async () => {
        await changeStatus(order.id);
    }
    return (
        <div className="admin-order-card">
            <div className="admin-orders__head" id="cards">
                <div className="admin-orders__order-number num">{order.id}</div>
                <div className="admin-orders__name name">{order.fio}</div>
                <div className="admin-orders__products prod">{names}</div>
                <div className="admin-orders__curr-status curr-stat">{statuses[order.orderStatus]}</div>
                <div className="admin-orders__next-status green" onClick={() => clickHandler()}>{statuses[order.orderStatus + 1]}</div>
            </div>
        </div>
    )
}