import React from 'react'
import './backToTop.css'
const BackToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    };
    return (
        <div className="back-to-top" onClick={scrollToTop}>
            Back to top
        </div>
    )
}

export default BackToTop
