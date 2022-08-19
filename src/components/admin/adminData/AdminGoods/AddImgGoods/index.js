import { useState } from "react"
import { useDispatch } from "react-redux";
import { actionImgAdd } from "../../../../../redux/actions/actionImgAdd";
import { MyInput } from "../../../../helpers/MyInput";
import { MyButton } from "../../../../helpers/MyButton"


export const AddImgGoods = () => {
    const [goodId, setGoodId] = useState();
    const [imgId, setImgId] = useState();
    console.log(goodId, imgId)

    let dispatch = useDispatch();
    let handelImgAdd = () => { dispatch(actionImgAdd(goodId, imgId)); }

    return (
        <div className="add-img-goods">
            <hr />
            <div className="add-goods-item">
                <MyInput value={goodId} name='goods Id :' type="text" onChange={(e) => setGoodId(e.target.value)} />
                <MyInput value={imgId} name="Img Id :" type="text" onChange={(e) => setImgId(e.target.value)} />
                <MyButton onClick={handelImgAdd} children="add IMG" />
            </div>
        </div>
    )
}