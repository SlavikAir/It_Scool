import { Slides } from "../modules/Slides"
import { Route } from 'react-router-dom';
import CUserInformation from '../components/UserInformation'
import ManualSearch from "./../modules/ManualSearch";
import CUserOrders from "../modules/UserOrders";



function BannerInfo() {
    return (
        <div className="banner-info" >
            <Route path="/search" exact component={ManualSearch} />
            <Route path="/category" component={Slides} />
            <Route path="/subcategory" component={Slides} />
            <Route path="/product" component={Slides} />
            <Route path="/" exact component={Slides} />
            <Route path="/user" exact component={CUserInformation} />
            <Route path="/user/order" exact component={CUserOrders} />
        </div>
    )
}

export { BannerInfo }