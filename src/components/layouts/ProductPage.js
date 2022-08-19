import store from '../../redux/store';
import { actionCartAdd } from '../../redux/actions/actionCart';
import { actionGoodById } from '../../redux/actions/actionGoods';
import { connect} from 'react-redux';
import { useLocation } from 'react-router-dom'; 
import { useEffect } from 'react';


const backendURL = 'http://shop-roles.node.ed.asmer.org.ua';


function ProductPage({dispatch, product: { _id, name, price, images, description } = {} }) {

    const search  = useLocation();
    let pageId = search.pathname.split("/") [2];
    console.log(pageId)
    // src= {async ()=> `${backendURL}/${images[0].url}`}

    let buy = (e) => {
        e.preventDefault()
        dispatch(actionCartAdd({ _id: _id, name: name, price: price, images: images[0].url }))
    }    
    
    useEffect (
        ()=> {
            dispatch(actionGoodById(pageId))
        }, [pageId]
    )
    return (
        <div className="product-page">
            <div className="product-page-main">
                <div className='card-img-block'>
                    <img className='card-img-top img-max-h' alt="#" src={`${backendURL}/${images ? images[0].url : []}`} /> 
                </div>
                <div className="product-page-info">
                    <h2 className='card-title'>{name}</h2>
                    <span className='card-text'>{price} Price   </span>
                    <form className="product-page-form">
                        <button className='btn btn-outline-secondary' data={_id} onClick={buy}> BUY</button>
                    </form>
                </div>
            </div>
            <div className="product-page-description">
                <p>{description}</p>
            </div>

        </div>
    )
}
const CProductPage = connect(state => ({ product: state.promise.goodById?.payload || [] }))(ProductPage)

export { CProductPage }