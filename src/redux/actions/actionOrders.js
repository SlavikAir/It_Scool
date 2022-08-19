
import { actionPromise } from './actionPromise';
import { gql } from '../helpers/gql';



export const actionOrders = () =>
    actionPromise('orders', gql(`query Order {
        OrderFind(query:"[{}]"){
            total
        _id
        createdAt  
        }
    }`))


