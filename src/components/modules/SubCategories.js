import { connect } from 'react-redux';
import { Link } from 'react-router-dom';







const SubCategoriesItem = ({ subCat: { _id, name } }) =>
    <li className='sub-categories-item btn btn-outline-secondary'>
        <Link className='sub-categories-link' to={`/subcategory/${_id}`}>{name}</Link>
    </li>

const SubCategories = ({ subCategories }) =>
    <div className='container-xxl'>
        <ul className='sub-categories'>
            {subCategories.map(subCat => <SubCategoriesItem subCat={subCat} key={subCat._id}/>)}
        </ul>
    </div>


const CSubCategories = connect(state => ({ subCategories: state.promise.catById?.payload?.subCategories || [] }))(SubCategories)

export { CSubCategories }