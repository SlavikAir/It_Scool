import {actionPromise} from './actionPromise';
import {gql} from '../helpers/gql';


const actionRootCats = () =>
actionPromise('rootCats', gql(`query {
    CategoryFind(query: "[{\\"parent\\":null}]"){
        _id name
    }
}`))

const actionCatById = (_id) =>  
    actionPromise('catById', gql(`query catById($q: String) {
        CategoryFindOne(query: $q) {
          _id
          name
          subCategories {
                          _id
                    name
          }
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


export {actionRootCats,actionCatById}