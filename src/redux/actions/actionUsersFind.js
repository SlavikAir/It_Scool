import {gql} from '../helpers/gql';
import {actionPromise} from './actionPromise';


const actionUsersFind = () => 
    actionPromise('usersFind', gql(`query users{
        UserFind(query:"[{}]") {
          _id
          createdAt
          login
          nick
        }
      }`))

export default actionUsersFind;