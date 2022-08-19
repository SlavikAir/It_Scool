
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';




const CategoryItem = ({ category: { _id, name } = {} }) =>
    <li className="list-group-item category-item ">
        <Link to={`/category/${_id}`}>{name}</Link>
    </li>


const Categories = ({ categories }) =>
    <ul className="list-group  categories for-ul">

        {categories.map(el => <CategoryItem category={el} key={el._id}/>)}

    </ul>

const CRootCategories = connect(state => ({ categories: state.promise.rootCats?.payload || [] }))(Categories)

export {CRootCategories}
