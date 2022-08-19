import { AdminHeader } from "../AdminHeader";
import { RootCatAdd } from "./RootCat/RootCatAdd";
import { RootCatChang } from "./RootCat/RootCatСhang";



const AdminCategoriesAdd = () => {
    return (
        <div>
            < AdminHeader name="Add categories" />
            <div className="root-cat-block">
                <RootCatAdd />
                <RootCatChang />
            </div>
        </div>
    )
}



export default AdminCategoriesAdd;