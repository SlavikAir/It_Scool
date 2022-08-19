


function cartReducer(state = {}, { type, good, count = 1 }) {
    if (type === 'CART_ADD') {
        return {
            ...state,
            [good._id]: { count: count + (good._id in state ? state[good._id].count : 0), good}
        }
    }
    if (type === 'CART_CHANGE') {
        return {
            ...state,
            [good._id]: { count: count, good: good }
        }
    }
    if (type === 'CART_DELETE') {
        let { [good._id]: remove, ...newState } = state;
        return newState;
    }
    if (type === 'CART_CLEAN') {
        return {}
    }
    return state
}



export {cartReducer}