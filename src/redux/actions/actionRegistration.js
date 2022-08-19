import { gql } from "../helpers/gql";
// import store  from '../../redux/store';
// import {actionAuthLogin, actionAboutMe} from './actionLogin';
import {actionPromise} from './../actions/actionPromise'



const actionRegistration = (login, password) =>

                actionPromise('registration', gql(`mutation reg($login:String, $password:String){
                    UserUpsert(user: {login:$login, password:$password}){
                        _id
                    }
                 }`, { login: login, password: password }
                ))
               
export default actionRegistration;