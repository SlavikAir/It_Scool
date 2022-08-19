import { useState } from "react"
import Img1 from "../../slides/111.jpg"
import Img2 from "../../slides/222.jpg"
import Img3 from "../../slides/333.jpg"
import Img4 from "../../slides/444.jpg"
import Img5 from "../../slides/555.jpg"
import left from "../../slides/arrow/left.png"
import right from "../../slides/arrow/right.png"


let images = [Img1, Img2, Img3, Img4, Img5];


function Slides() {
    const [count, setCount] = useState(0);

    let inc = () => {
        if (count === images.length-1) {
            setCount(count - (images.length -1))
        } else {
            setCount(count +1)
        }
    }

    let dec = ()=> {
        if (count === 0 ) {
            setCount(count + (images.length -1))
        }else {
            setCount(count -1)
        }
    }

    return (
        <div className="slider-container">
            <div className="slider">
                <div className="slider-line">
                    <img className="slider-line-img" src={images[count]} alt="#" />
                </div>
            </div>
            <div className="slider-buttons">
                <span className="" onClick={dec}><img src={left} alt="#"/></span>
                <span className="" onClick={inc}><img src={right} alt="#"/></span>

            </div>
        </div>

    )
}


export { Slides }