import AdminData from "./adminData/AdminData";
import AdminNav from "./adminNav/AdminNav";



function Admin () {
    return (
        <div className="admin">
            <div className="container-xxl">
                <div className="admin-content">
                    <AdminNav />
                    <AdminData />
                </div>
            </div>
        </div>
    )
}
export default Admin;