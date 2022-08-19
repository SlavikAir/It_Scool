import { useState } from "react"
import { useDispatch } from "react-redux";
import { actionCatChang } from "../../../../../redux/actions/actionCatChang";




export const RootCatChang = () => {

    const [idCat, setIdCat] = useState('');
    const [name, setName] = useState('');

    let dispatch = useDispatch();
    let handleChang = () => dispatch(actionCatChang(name,idCat))


    return (
        <div className="root-cat-chang">
            <div className="id-chang">
            <span>id categories :</span>
            <input value={idCat}
                    onChange={event => setIdCat(event.target.value)}
                    type="text"/>
            </div>
            <div className="name-chang">
            <span>name categories :</span>
            <input value={name}
                    onChange={event => setName(event.target.value)}
                    type="text"/>
            </div>
            <button className="btn btn-outline-secondary" onClick={handleChang}>chang</button>
        </div>

    )
}