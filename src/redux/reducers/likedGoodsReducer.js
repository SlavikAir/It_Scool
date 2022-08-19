

function likedGoodsReducer (state = {}, { type, good}) {
    if (type === 'PRODUCTS_ADD') {
        return {
            ...state,
            [good._id]:  good 
        }
    }
    if (type === 'PRODUCTS_DELETE') {
        let { [good._id]: remove, ...newState } = state;
        return newState;
    }
    return state
}





export {likedGoodsReducer}