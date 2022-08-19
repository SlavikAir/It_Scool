import { CSale } from '../modules/Goods';
import TrendingNav from '../modules/trendingItem/TrendingNav'

function Trending() {


    return (

        <div className="trending-products">
            <div className="container-xxl">
                <div className="trending-products-item">
                    <h2 className="trending-name"> TRENDING </h2>
                    <TrendingNav first='Top Products'
                        second='New Arrivals'
                        third='Best Sellers' />
                    <div className='trending-goods'>
                        <CSale />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Trending;