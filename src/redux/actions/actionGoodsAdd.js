import { gql } from "../helpers/gql";
import { actionPromise } from "./actionPromise";

export const actionGoodsAdd = (name, price, description, catName, catId) => {
    actionPromise('goodsAdd', gql(`mutation addGoods($name:String, $description:String, $price:Float, $id:ID, $catName:String!) {
        GoodUpsert(good: {
            name: $name,
        description: $description,
        price: $price,
        categories:[
                    {name:$catName,
                     _id:$id}
        ]
      }){
            name
            _id
            description
            price
      }
    }`, { name: name, description: description, price: price, id: catId, catName: catName }))

}