import { actionPromise } from "./actionPromise";
import { gql } from "../helpers/gql";


export const actionManualSearch = (search) => 
    actionPromise('search', gql(`
    query gf($query: String){
        GoodFind(query: $query){
            _id, name, description, price, images{
                _id, url
            }
        }
    }`, {query: JSON.stringify([
                {
                    $or: [{name: `/${search}/`}] //регулярки пишутся в строках
                },
                {
                    sort: [{title: 1}]} //сортируем по title алфавитно
                ])
    }))


    export const actionOnInputSearch = (search) => 
    actionPromise('onInputSearch', gql(`
    query gf($query: String){
        GoodFind(query: $query){
            _id, name, description, price, images{
                _id, url
            }
        }
    }`, {query: JSON.stringify([
                {
                    $or: [{name: `/${search}/`}] //регулярки пишутся в строках
                },
                {
                    sort: [{title: 1}]} //сортируем по title алфавитно
                ])
    }))

