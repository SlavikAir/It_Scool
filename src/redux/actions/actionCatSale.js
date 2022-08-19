import {actionPromise} from './actionPromise';
import {gql} from '../helpers/gql';



export const actionCatSale = (_id) =>  
actionPromise('catSale', gql(`query catById($q: String) {
    CategoryFindOne(query: $q) {
      goods {
        _id
        name
        price
        images {
          url
        }
      }
    }
  }`, { q: JSON.stringify([{ _id }]) }))
