import React from "react";
import { OrderItem } from "../order-item/order-item";
import "./order-card.css";
import { statuses } from '../../utils/statuses';
import { useGetProductsQuery } from "../../redux/ucoin-req/ucoinRequestApi";

export const OrderCard = ({order} : {order:any}) => {
    
    let {data, error} = useGetProductsQuery(order.id);
    console.log(data);
    
    return (
        <div className="order-card">
            <div className="order-card__info">
                <div className="order-card__info__id">
                    Заказ № {order.id}
                </div>
                <div className="order-card__info__status">
                    {statuses[order.orderStatus]}
                </div>
            </div>
            <div className="order-card__orders">
                {data?.map((product : any) => <OrderItem order={product}/>)}
            </div>
        </div>
    )
}