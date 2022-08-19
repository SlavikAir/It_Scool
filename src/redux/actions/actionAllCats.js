import { gql } from "../helpers/gql";
import { actionPromise } from "./actionPromise";



export const actionAllCats = () =>
actionPromise('allCats', gql(`query cats{
  CategoryFind(query: "[{\\"parent\\": null}]"){
    _id
    name,
    subCategories{
      name,
      subCategories{
        name,
        _id
      }
    }
  }
}
`))
