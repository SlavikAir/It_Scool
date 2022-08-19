import  Search  from "../components/Search"
import { UserMenu } from "../components/UserMenu"
import { Logo } from "../modules/Logo"


function UserNav(props) {
    return (
        <div className="user-nav">
            <div className="container-xxl">
                <div className="row user-nav-block">
                    <div className="col ">
                        <Logo />
                    </div>
                    <div className="col ">
                        <Search />
                    </div>
                    <div className="col">
                        <UserMenu onModalOpen={props.onModalOpen}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { UserNav}