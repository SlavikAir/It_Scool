import { connect } from "react-redux"
import { Link } from "react-router-dom"



const OnInputSearchItem = ({ searchItem: { _id, name, price } = {} }) => {
    return (
        <Link to={`/product/${_id}`}>
            <div className="on-input-search-item"
                DataId={_id}
            >
                <span className="product-name">{name}</span>
                <span>{price}</span>
            </div>
        </Link>
    )
}


const OnInputSearchItems = ({ item }) => {

    return (

        <div className="on-input-search">

            {item.map(el => <OnInputSearchItem searchItem={el} />)}

        </div>
    )
}

const COnInputSearchItems = connect(state => ({ item: state.promise.onInputSearch?.payload || [] }))(OnInputSearchItems)

export default COnInputSearchItems;