import car from "../../logo/support/car.png"
import gift from "../../logo/support/gift-box.png"
import money from "../../logo/support/money.png"
import support from "../../logo/support/support.png"


function Support() {
    return (
        <nav className="support">
            <div className="container-xxl">
                <ul className="nav support-nav">
                    <li className="nav-item nav-item-container">
                        <a href="#">
                            < img src={car} alt="#"/>
                        </a>
                        <div className="nav-item-text">
                            <a className="nav-link nav-link-a text-dark" aria-current="page" href="#">Free Shipping</a>
                            <span className="nav-link-text">Orders over $100</span>
                        </div>
                    </li>
                    <li className="nav-item nav-item-container">
                        <a className="nav-img" href="#">
                            < img src={gift} alt="#" />
                        </a>
                        <div className="nav-item-text">
                            <a className="nav-link nav-link text-dark" href="#">Smart Gift Card</a>
                            <span className="nav-link-text">Buy $1000 to get card</span>
                        </div>
                    </li>
                    <li className="nav-item nav-item-container">
                        <a className="nav-img" href="#">
                            < img src={money} alt="#" />
                        </a>
                        <div className="nav-item-text">
                            <a className="nav-link text-dark" href="#">Quick Payment</a>
                            <span className="nav-link-text">100% secure payment</span>
                        </div>
                    </li>
                    <li className="nav-item nav-item-container">
                        <a className="nav-img" href="#">
                            <img src={support} alt="#"/>
                        </a>
                        <div className="nav-item-text">
                            <a className="nav-link text-dark" href="#">24/7 Support</a>
                            <span className="nav-link-text">Quick Support</span>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Support;