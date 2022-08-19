import { connect, useDispatch } from "react-redux"
import { MyButton } from "../../helpers/MyButton"
import { actionOrderUpsert } from "../../../redux/actions/actionOrderUpsert";

const CartFooter = ({ goods }) => {

    let good = (goods.map(e => e.id)).join()
    let count = (goods.map(e => e.count)).join()


    let dispatch = useDispatch();
    let handleOrder = () => dispatch(actionOrderUpsert(+count, good))



    return (
        < MyButton onClick={handleOrder}>design</MyButton>
    )
}

const CCartFooter = connect(state => ({ goods: Object.keys(state.cart).map(e => { return { id: e, ...state.cart[e] } }) || [] }))(CartFooter)

export default CCartFooter