import { gql } from "../helpers/gql";
import { actionPromise } from "./actionPromise";



export const actionCatChang = (catName, id) =>
    actionPromise('categoryChange', gql(`mutation categoryUpsert($catName:String!,$id:ID){
        CategoryUpsert(category:{
        _id: $id,
        name:$catName
        }) {
            _id
            createdAt
            name
    }
  }`, { catName: catName, id: id }))



