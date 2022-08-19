
import CModulesGreetings from '../modules/modulesGreetings'


function Header(props) {
    return (
        <header className="header">
            <div className='container-xxl'>
                <div className="header-content">
                    <span className="text-light">Welcome to our online shop</span>
                    <CModulesGreetings/>
                    <span className="text-light header-link" onClick={props.onModalOpen}>Login or Sign up</span>
                </div>
            </div>
        </header>
    )
}

export { Header }