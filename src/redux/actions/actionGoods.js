import {actionPromise} from './actionPromise';
import {gql} from '../helpers/gql';



const actionGoodById = (_id) =>
    actionPromise('goodById', gql(`query goodById($q: String) {
        GoodFindOne(query: $q) {
             _id
            name
            price
            description 
            images {
                 url
            }
        }
    }`, { q: JSON.stringify([{ _id }]) }))


export {actionGoodById}