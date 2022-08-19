import { useState } from "react";
import { useDispatch } from "react-redux";
import actionAddRootCategory from './../../../../../redux/actions/actionAddRootCategory' 




export const RootCatAdd = () => {

    const [catName, setCatName] = useState("");
    
    const dispatch = useDispatch();
    const handlesAddRoot = () => dispatch(actionAddRootCategory(catName));

    return (
        <div className="root-cat-add">
            <div className="cat-add-block">
                <span>Categories name:</span>
                <input className="categories-name"
                    type="text"
                    value={catName}
                    onChange={event => setCatName(event.target.value)} />
            </div>
            <button className="btn btn-outline-secondary" onClick={handlesAddRoot}>add root categories</button>
        </div>
    )
}