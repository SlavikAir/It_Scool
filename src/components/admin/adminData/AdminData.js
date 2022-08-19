import { Route } from "react-router-dom";
import ButtonHome from "./buttonHome/Home";
import CAdminUsers from "./AdminUsers/AdminUsers"
import CAdminCategories from "./AdminCategories/AdminCategories";
import AdminCategoriesAdd from './AdminCategoriesAdd/AdminCategoriesAdd';
import AdminGoods from "./AdminGoods/AdminGoods";


const AdminData = () => {
    return (
        <div className="admin-data">
            <div className="admin-data-item">
                <div className="admin-name">
                    <h2>admin panel</h2>
                    <ButtonHome />
                </div>
                <Route path="/admin/users" exact component={CAdminUsers} />
                <Route path="/admin/categories" exact component={CAdminCategories} />
                <Route path="/admin/addCategories" component={AdminCategoriesAdd} />
                <Route path="/admin/goods" component={AdminGoods} />
                <Route path="/admin/orders" component={CAdminUsers} />
                <Route path="/admin/sale" component={CAdminUsers} />
            </div>
        </div>
    )
}
export default AdminData;