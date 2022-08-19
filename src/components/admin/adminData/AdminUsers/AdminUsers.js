import { connect, useDispatch } from "react-redux";
import { AdminHeader } from "../AdminHeader";
import actionUsersFind from './../../../../redux/actions/actionUsersFind';
import UsersItem from "./usersItem/UsersItem"


const AdminUsers = (users) => {  

    const dispatch = useDispatch();
    const handleUsersFind = ()=> {dispatch(actionUsersFind())}
   

    return (
        <div className="admin-users">
            <AdminHeader name='All users' />
            <div className="admin-users-item">
                <div className="users-items">
                    
                {users.users.map(el => <UsersItem users={el} key={el._id}/>)}

                </div>
                <button className="btn btn-outline-secondary" type="button" onClick={handleUsersFind}>Search</button>
            </div>
        </div>
    )
}

const CAdminUsers = connect(state => ({users: state.promise.usersFind?.payload || [] }))(AdminUsers)

export default CAdminUsers;