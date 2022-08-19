import { InformationElement } from "../modules/InformationElement";
import { AllCollections } from "../modules/AllCollections"


function Information() {
    return (
        <div className="information">
            <div className=" container-xxl">
                <div className="information-item">
                <AllCollections />
                <ul className="information-list ">
                    <InformationElement name={'HOME'} />
                    <InformationElement name={'SHOP'} />
                    <InformationElement name={'BLOG'} />
                    <InformationElement name={'ABOUT'} />
                    <InformationElement name={'CONTACT US'} />
                </ul>
            </div>
            </div>
        </div>
    )
}

export { Information }