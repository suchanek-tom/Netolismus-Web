import React from "react";
import { useState, useEffect } from "react";

import { FaAngleUp } from 'react-icons/fa'

import { motion as m } from "framer-motion"

const ScrollToTop = () => {

    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            }
            else
            {
                setShowTopBtn(false);
            }
        });
    }, [])

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return(

        <div className=" relative">
            {" "}
            {showTopBtn && (
                <FaAngleUp className=" fixed bottom-10 right-6 z-20 h-12 w-12 fill-white cursor-pointer rounded-full bg-black hover:scale-125 duration-300"     
                            onClick={goToTop} 
                />       
            )}
            {" "}
        </div>
    )
}

export default ScrollToTop