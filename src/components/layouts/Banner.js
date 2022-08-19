import { NavCategory } from "../components/NavCategory";
import { BannerInfo } from "../components/BannerInfo";


function Banner() {
    return (
        <div className="banner">
            <div className="container-xxl">
                <div className="banner-items">
                    <NavCategory />
                    <BannerInfo />
                </div>
            </div>

        </div>
    )
}


export { Banner }