import { AdminHeader } from "../AdminHeader"
import  CAddGoods  from "./AddGoods/AddGoods"
import { AddImgGoods } from "./AddImgGoods/index"


const AdminGoods = () => {
    return (
        <div className="admin-goods">
            <AdminHeader name='Add goods' />
            <div className="admin-goods-items">
                <CAddGoods />
                <AddImgGoods />
            </div>
        </div>
    )
}

export default AdminGoods