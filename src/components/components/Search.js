import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
// import {actionUpdateSearch} from './../../redux/actions/actionUpdateSearch';
import { actionManualSearch, actionOnInputSearch } from "../../redux/actions/actionSearch";
import COnInputSearchItems from './../modules/OnInputSearchItems'

function Search() {

    let dispatch = useDispatch();
    let handlesSearch = () => { dispatch(actionManualSearch(input)) }
    let onInputSearch = () => { dispatch(actionOnInputSearch(input)) }

    const [input, setInput] = useState('');



    return (
        
        <div className="search"> 
        <div className="input-group">
            <input value={input}
                onInput={onInputSearch}
                onChange={e => setInput(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2" />
            <NavLink to="/search" >
                <button onClick={handlesSearch} className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
            </NavLink>
        </div>
        <div className="on-input-search-block">
            {input ? <COnInputSearchItems /> : ""}
        </div>


        </div>
    
    )
}

// const CSearch = connect(state => ({text: state.search.newSearchText}))(Search)

export default Search 