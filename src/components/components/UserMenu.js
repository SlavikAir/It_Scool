import { Link } from 'react-router-dom';
import basket from '../../logo/nav/basket.png'
import user from '../../logo/nav/user.png'
import bell from '../../logo/nav/bell.png'


function UserMenu(props) {
    return (
        <nav className="user-menu">
            <ul className='user-nav-list '>
                <li className='user-nav-item'>
                    <a className='user-nav-link' onClick={props.onModalOpen} ><img src={basket}/></a>
                </li>
                <li className='user-nav-item'>
                    <a className='user-nav-link'><img src={bell}/></a>
                </li>
                <li className='user-nav-item'>
                    <Link className='user-nav-link' to={`/user`}><img src={user}/></Link>
                </li>
            </ul>
        </nav>
    )
}

export { UserMenu }