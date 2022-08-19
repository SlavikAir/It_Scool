import React, { useState } from 'react';
import { actionLogin } from '../../../redux/actions/actionLogin';
import { useDispatch } from 'react-redux';
import actionRegistration from './../../../redux/actions/actionRegistration'





function LoginModal(props) {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();
    const handleLogin = () => { dispatch(actionLogin(login, password))
                                props.onLogin()}
    const handleRegistration = () => { dispatch (actionRegistration(login,password))
                                props.onLogin()}


    return (
        <>
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Login or Sign up</h5>
            </div>
            <div className="modal-body">
                <div className="row" >
                    <div className='col-6'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Login...</label>
                        <input value={login} onChange={e => setLogin(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>
                    <div className='col-6'>
                        <label htmlFor="exampleFormControlInput2" className="form-label">Password...</label>
                        <input value={password} onChange={e => setPassword(e.target.value)} type="text" className="form-control" id="exampleFormControlInput2" placeholder="" />
                    </div>

                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary"
                    disabled={login.length < 3 && password.length < 5}
                    onClick={handleLogin}>User Login...</button>
                <button type="button" className="btn btn-primary" 
                        disabled={login.length < 3 && password.length < 5}
                        onClick={handleRegistration}>User Registration...</button>
            </div>
        </>
    )
}

export default LoginModal;