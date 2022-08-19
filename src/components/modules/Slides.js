import { useState } from "react"
import Img1 from "../../slides/111.jpg"
import Img2 from "../../slides/222.jpg"
import Img3 from "../../slides/333.jpg"
import Img4 from "../../slides/444.jpg"
import Img5 from "../../slides/555.jpg"


let images = [Img1, Img2, Img3, Img4, Img5];


function Slides() {
    const [count, setCount] = useState(0);
    return (
        <div className="slider-container">
            <div className="slider">
                <div className="slider-line">
                    <img className="slider-line-img" src={images[count]} alt="" />
                </div>
            </div>
            <div className="slider-buttons">
                <span className="" onClick={() => setCount(count - 1 > 0 ? count - 1 :  0)}><i className="bi bi-arrow-left-circle-fill"></i></span>
                <span className="" onClick={() => setCount(count + 1 <= images.length - 1 ? count + 1 : images.length - 1)}><i className="bi bi-arrow-right-circle-fill"></i></span>

            </div>
        </div>

    )
}


export { Slides }