import {gql} from '../helpers/gql';
import { actionPromise } from './actionPromise';

const actionAddRootCategory = (catName) =>
    actionPromise('categoryUpsert', gql(`mutation categoryUpsert($catName:String!){
        CategoryUpsert(category:{
          name:$catName
        }) {
          _id
          createdAt
          name
        }
      }`, { catName: catName  }))


export default actionAddRootCategory;