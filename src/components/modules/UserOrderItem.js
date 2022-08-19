

const UserOrderItem = ({ props: { _id, total, createdAt } }) => {
    return (
        <div className="user-order-item">
            <span>{"Заказ Id  :   "}{_id}</span>
            <span>{"На сумму :   "}{total}</span>
            <span>{createdAt}</span>
        </div>
    )
}

export default UserOrderItem;