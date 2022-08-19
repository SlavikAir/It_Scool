import { connect, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { actionAuthLogout } from '../../redux/actions/actionLogin'




function UserInformation(props) {
    const dispatch = useDispatch();
    const handleLogout = () => dispatch(actionAuthLogout())
    return (
        <div className="user-information">
            <div className="container-md">
                <div className="user-information-item">
                    <img className="item-avatar" src=""></img>
                    <div className="item-text">
                        <span>ID User -----------{props.user.id}</span>
                        <hr />
                        <span>Login User ---------- {props.user.login}</span>
                        <hr />
                    </div>
                    <button className=" link btn btn-outline-secondary ">
                        <Link to={'/user/order'}>Show my orders</Link>
                    </button>
                    <button className="btn btn-outline-secondary" onClick={handleLogout}>Logout...</button>
                    <hr />
                    <button className="link btn btn-outline-secondary">
                        <Link to={`/admin`}>To admin panel</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

const CUserInformation = connect(state => ({ user: state.auth.payload?.sub || [] }))(UserInformation)

export default CUserInformation;