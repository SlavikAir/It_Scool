
let initialState = {
    newSearchText :""
}

const searchReducer = (state=initialState ,action) => {

    if (action === "UPDATE-NEW-SEARCH-DATA") {
        
        state.newSearchText = action.text
    }
    return state
        
   
}


export default searchReducer;