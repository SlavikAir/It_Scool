import { connect, useDispatch } from "react-redux";
import { actionAllCats } from "./../../../../redux/actions/actionAllCats";
import AllCategoriesItem from './AllCategoriesItem/AllCategoriesItem'

const AdminCategories = (categories) => {

    let dispatch = useDispatch();
    let handlesAllCategory = () => { dispatch(actionAllCats()) }

    return (
        <div className="admin-categories">
            <div className="admin-categories-item">
                <h3>All Category : </h3>
                <hr />
                {categories.categories.map(el => <AllCategoriesItem categories={el} />)}
            </div>
            <div className="admin-categories-button">
                <button className="btn btn-outline-secondary" type="button" onClick={handlesAllCategory}>All Category</button>
            </div>

        </div>
    )
}

const CAdminCategories = connect(state => ({ categories: state.promise.allCats?.payload || [] }))(AdminCategories)

export default CAdminCategories;