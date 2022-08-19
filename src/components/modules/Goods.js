import store from '../../redux/store';
import { actionCartAdd } from '../../redux/actions/actionCart';
import { actionGoodById } from '../../redux/actions/actionGoods';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const backendURL = 'http://shop-roles.node.ed.asmer.org.ua';

const GoodsItem = ({ good: { _id, name, price, images } = {} }) =>
    <div className='goods-item-card card ' >
        <div className='card-img'>
            <img className='card-img-content' alt="" src={`${backendURL}/${images ? images[0].url : []}`} />
        </div>
        <div className="card-body d-flex flex-column">
            <h2 className='card-title'>{name}</h2>
            <span className='card-text'>{price} Price</span>
            <div className='card-button-section'>
                <button className='btn btn-outline-secondary' data={_id} onClick={() => store.dispatch(actionCartAdd({ _id: _id, name: name, price: price, images: images[0].url }))}>ADD CARD</button>
                <div className=" link btn btn-outline-secondary" onClick={() => store.dispatch(actionGoodById(_id))} >
                    <Link to={`/product/${_id}`}>about the product</Link>
                    {/* <button className="btn btn-outline-secondary" onClick={() => store.dispatch(actionGoodById(_id))}>about the product </button></Link> */}
                </div>

            </div>
        </div>
    </div>

export const Goods = ({ goods }) =>
    <div className='row mb-3'>

        {goods.length !== 0
            ?
            goods.map(good =>
                <div className='col-4 mt-3'>
                    <GoodsItem good={good} key={good._id} />
                </div>)
            :
            <h3>....................
                no products found</h3>}

    </div>

const CGood = connect(state => ({ goods: state.promise.catById?.payload?.goods || [] }))(Goods);
const CSearch = connect(state => ({ goods: state.promise.search?.payload || [] }))(Goods)
const CSale = connect(state => ({ goods: state.promise.catSale?.payload?.goods || [] }))(Goods)




export { CGood, CSearch, CSale }