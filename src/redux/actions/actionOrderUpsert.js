
import { gql } from "../helpers/gql";
import { actionPromise } from "./actionPromise";


export const actionOrderUpsert = (count,good) => {
    actionPromise('orderUpsert', gql(`mutation orderUpsert($count:Int!, $goodId:ID) {
        OrderUpsert (order: {
                orderGoods: [
            { count: $count
                good:{
                _id: $goodId
              }}
          ]
      }) {
            _id
        total
      }
        }
    `, {count: count, goodId:good}))

}