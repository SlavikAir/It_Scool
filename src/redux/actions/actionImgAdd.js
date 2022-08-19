import { gql } from "../helpers/gql";
import { actionPromise } from "./actionPromise";

export const actionImgAdd = (goodId,imgId) => 
    actionPromise('ImgAdd', gql(`mutation goodImg ($img:ID, $id:ID) {
        GoodUpsert (good: {
            _id: $id
        images: [
        { _id: $img}
      ]
        
      }){
        name
      }
    }`, { img: imgId, id:goodId}))

