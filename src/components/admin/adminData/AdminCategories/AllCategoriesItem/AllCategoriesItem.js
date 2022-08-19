

const AllCategoriesItem = ({ categories: { _id, name} })=> {



    return(
        <div className="all-categories-item">
            <span>{_id}</span>
            <span>{name}</span>
        </div>
    )
}
export default AllCategoriesItem;

