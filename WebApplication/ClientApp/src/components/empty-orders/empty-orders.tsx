import "./empty-orders.css";

export const EmptyComponent = ({value} : {value : any}) => {
    return (
        <div className="empty-orders">
            {value}
        </div>
    )
}