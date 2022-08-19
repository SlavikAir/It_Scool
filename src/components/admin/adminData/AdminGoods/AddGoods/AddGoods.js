import { useState } from "react"
import { connect, useDispatch } from "react-redux";
import { actionGoodsAdd } from "../../../../../redux/actions/actionGoodsAdd";
import InputItem from './InputItem/index'
import OptionCat from "./OptionCat";


const AddGoods = ({ categories }) => {
    let [name, setName] = useState();
    let [price, setPrice] = useState();
    let [description, setDescription] = useState();



    let [catName, setCatName] = useState();
    let [catId, setCatId] = useState();

    console.log(catId)


    let dispatch = useDispatch()
    let handAdd = () => { dispatch(actionGoodsAdd(name, +price, description, catName, catId)) }

    return (
        <div className="add-goods">
            <div className="add-goods-attribute">
                <InputItem value={name} children='goods name:' onChange={event => setName(event.target.value)} />
                <InputItem value={price} children='price' onChange={event => setPrice(event.target.value)} />
                <InputItem value={description} children='description' onChange={event => setDescription(event.target.value)} />
            </div>
            <div className="add-categories-attribute">
                <h3>what category to add : </h3>
                <select onChange={e => { setCatId(e.target.value) }}>
                    {categories.map(category => <OptionCat props={category} />)}
                </select>
                <div className="add-goods-item">
                    <span>Categories name:</span>
                    <input value={catName} onChange={event => setCatName(event.target.value)}></input>
                </div>
                <button className="btn btn-outline-secondary" onClick={handAdd}> Add goods</button>
            </div>
        </div>
    )
}

const CAddGoods = connect(state => ({ categories: state.promise.rootCats?.payload || [] }))(AddGoods)
export default CAddGoods