import logo from '../../logo/logo.png'


function Logo () {
    return (
        <div className="logo">
            <a className="logo-link" href='/' >
                <img className="logo-images" alt="" src={logo} />
                <h1 className="text-dark">Market King</h1>
            </a>
        </div>
    )
}

export {Logo}