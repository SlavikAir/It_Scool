
import { gql } from "../helpers/gql";
import store from '../../redux/store';
import { actionPromise } from "./actionPromise";


const actionAuthLogin = token => ({ type: "AUTH_LOGIN", token });
const actionAuthLogout = () => ({ type: "AUTH_LOGOUT" });
export const actionAboutMe = (id) => {
        actionPromise('aboutMe', gql(`query aboutMe($userId: String){
                UserFindOne(query: $userId) {
                        _id login nick avatar {
                                url
            }
          }
        } `, { userId: JSON.stringify([{ id }]) }))
}



const actionLogin = (login, password) =>
        async () => {
                let token = await gql(`query login ($login:String, $password:String)
                          {login(login:$login, password:$password)}`, { login: login, password: password }
                )
                await store.dispatch(actionAuthLogin(token))
                const userId = store.auth?.payload?.sub.id
                await store.dispatch(actionAboutMe(userId))
        }




export { actionLogin, actionAuthLogin, actionAuthLogout }


