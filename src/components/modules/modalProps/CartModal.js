import { connect, useDispatch } from 'react-redux';
import { actionCartChange, actionCartDelete } from '../../../redux/actions/actionCart';

const backendURL = 'http://shop-roles.node.ed.asmer.org.ua';

const CartItem = function ({ cart: { count, good } }) {
    const dispatch = useDispatch();
    const handleChange = (e) => dispatch(actionCartChange(good, e.currentTarget.value))
    const handleDelete = (e) => dispatch(actionCartDelete(good, e.currentTarget.value))


    return (
        <div className='cart-item-block'>
            <img alt='#' className='CartItemImg img-max-h ' src={`${backendURL}/${good.images}`} />
            <h2>{good.name}</h2>
            <span className='CartItemPrice'>Price {good.price}</span>
            <input className='cart-item-input' type="number" value={count} onChange={handleChange} />
            <button onClick={handleDelete}>delete</button>
        </div>
    )
}

let CartGoods = function ({ carts } ) {
    return (
        <div>
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Cart</h5>
            </div>

            <div >
                {carts.map(cart => <CartItem cart={cart} key={cart.good._id}/>)}
            </div>
        </div>
    )
}

const CCart = connect(state => ({ carts: Object.keys(state.cart).map(key => { return { id: key, ...state.cart[key] } }) || [] }))(CartGoods)

export default CCart;
