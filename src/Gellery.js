import React, { useState, useEffect } from "react";
import PICTURE from "./data/pictures";

function Gellary() {

    let [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(storedIndex => {
                return (storedIndex + 1) % PICTURE.length;
            })
        }, 3000);
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            <div className="Gallery">
                <img src={PICTURE[index].image} alt="" />
            </div>
        </div>
    )
}
export default Gellary;