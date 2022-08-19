import Main from '../../setImg/Rectangle35.png';
import Small1 from '../../setImg/Rectangle33.png';
import Small2 from '../../setImg/Rectangle34.png';

function Set() {
    return (
        <div className="set">
            <div className="container-xxl">
                <div className="set-item">
                    <div className="set-main">
                        <div className="set-main-container">
                            <img alt="#" src={Main} />
                            <ul>
                                <li className='fs-3'>Modern Furniture Collections</li>
                                <li className='fs-4 primaryColor'>Starting from $500</li>
                                <li className='fs-5 smallColor'>Read more</li>
                            </ul>
                        </div>
                    </div>
                    <div className="set-small ">
                        <div className="set-small-container set-margin-bottom">
                            <img alt='#' src={Small1} />
                            <ul>
                                <li className='fs-3'>Geometric Bookcase</li>
                                <li className='fs-4 primaryColor'>Up to 20% discount</li>
                                <li className='fs-5 smallColor'>Read more</li>
                            </ul>
                        </div>
                        <div className="set-small-container ">
                            <img alt="#" src={Small2} />
                            <ul>
                                <li className='fs-3'>Minimal Sofa collections </li>
                                <li className='fs-4 primaryColor'>Sale upto 40% discount</li>
                                <li className='fs-5 smallColor'>Read more</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Set;