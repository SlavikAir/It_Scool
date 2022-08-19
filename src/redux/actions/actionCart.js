

const actionCartAdd = (good, count = 1) => ({ type: 'CART_ADD', good, count })
const actionCartChange = (good, count = 1) => ({ type: 'CART_CHANGE', good, count })
const actionCartDelete = (good) => ({ type: 'CART_DELETE', good })
const actionCartClean = () => ({ type: 'CART_CLEAN' })


export {actionCartAdd, actionCartChange, actionCartClean, actionCartDelete}