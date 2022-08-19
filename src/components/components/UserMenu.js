import { Link } from 'react-router-dom';



function UserMenu(props) {
    return (
        <nav className="user-menu">
            <ul className='user-nav-list '>
                <li className='user-nav-item'>
                    <a className='user-nav-link' onClick={props.onModalOpen} ><i className="bi bi-cart"></i></a>
                </li>
                <li className='user-nav-item'>
                    <a className='user-nav-link'><i className="bi bi-bell"></i></a>
                </li>
                <li className='user-nav-item'>
                    <Link className='user-nav-link' to={`/user`}><i className="bi bi-person-circle"></i></Link>
                </li>
            </ul>
        </nav>
    )
}

export { UserMenu }