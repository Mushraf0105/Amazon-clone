import React from 'react'
import './sign.css'
const Sign = () => {
    return (
        <div className='title'>
            <div className='title-text'>See personalized recommendations</div>

            <button className='sing'>Sign in</button>

            <div className="new-customer">
                New customer?
                <a href="/register" className="start-here-link">Start here.</a>
            </div>



        </div>

    )
}

export default Sign
