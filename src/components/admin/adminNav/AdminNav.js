import AdminNavItem from "./adminNavItem/AdminNavItem";


const AdminNav = () => {
    return (
        <div className="admin-nav">
            <div className="admin-nav-item">
                < AdminNavItem name="all users" road="/admin/users"/>
                < AdminNavItem name="categories" road="/admin/categories"/>
                < AdminNavItem name="add categories" road="/admin/addCategories"/>
                < AdminNavItem name="goods" road="/admin/goods"/>
                < AdminNavItem name="orders" road="/admin/orders"/>
                < AdminNavItem name="sale" road="/admin/sale"/>
            </div>
        </div>
    )
}
export default AdminNav;