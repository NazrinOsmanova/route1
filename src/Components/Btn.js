import React from 'react'
import { useState } from 'react';

const Btn = () => {
    const [a, setA] = useState(0);
    const funk = () => {
        setA(a + 1);
        if (a % 2 == 0) {
            document.querySelector("nav").style.height = "100px";
        }
        else {
            document.querySelector("nav").style.height = "0px";
        }
    }
    return (
        <div>
            <div className="open">
                <p>Navigation</p>
                <button onClick={funk}><i className="fa-solid fa-bars"></i></button>
            </div>
        </div>
    )
}

export default Btn