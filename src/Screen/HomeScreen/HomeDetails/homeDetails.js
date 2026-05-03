import React, { useRef } from 'react'
import './homeDetails.css'
import homeDetail from '../../../homeDetail.json';
const HomeDetails = () => {
  const rowRefs = useRef([]);

  const scroll = (index, direction) => {
    if (rowRefs.current[index]) {
      const scrollAmount = 300; 
      rowRefs.current[index].scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='homeDetails'>
      {homeDetail.map((item, index) => (
        <div className='homeDetailLongCard' key={index}>

          <div className='homeDetailLongCardTitle'>
            {item.title}
            <a href="#" className='link'>{item.linkText}</a>
          </div>

          <div className='homeDetailLongCardItems'>

            <button
              className='scrollBtn left'
              onClick={() => scroll(index, -1)}
            >
              &#10094; 
            </button>

            
            <div
              className='scrollDiv'
              ref={el => rowRefs.current[index] = el}
            >
              {item.imgs.map((imgUrl, imgIndex) => (
                <div className='homeDetailLongCardItem' key={imgIndex}>
                  <img
                    className='homeDetailLongCardItemImg'
                    src={imgUrl}
                    alt="product"
                  />
                </div>
              ))}
            </div>

            
            <button
              className='scrollBtn right'
              onClick={() => scroll(index, 1)}
            >
              &#10095; 
            </button>

          </div>
        </div>
      ))}
    </div>
  )
}

export default HomeDetails
