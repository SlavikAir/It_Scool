import { connect, useDispatch } from "react-redux"
import { actionOrders } from "../../redux/actions/actionOrders";
import { MyButton } from "../helpers/MyButton"
import UserOrderItem from "./UserOrderItem"



const UserOrders = ({ orders }) => {

    let dispatch = useDispatch();
    let handleOrder = () => dispatch(actionOrders())

    return (
        <div className="user-orders">
            <div className="user-orders-item">
                {orders.map(e => <UserOrderItem props={e} key={e._id} />)}
            </div>
            <MyButton onClick={handleOrder} children='show my orders' />
        </div>
    )
}

const CUserOrders = connect(state => ({ orders: state.promise.orders?.payload || [] }))(UserOrders)

export default CUserOrders