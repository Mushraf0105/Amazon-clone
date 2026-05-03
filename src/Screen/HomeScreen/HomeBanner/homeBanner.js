import React from 'react'
import './homeBanner.css'
import homeBannerItemProduct from '../../../homeProduct.json';

const HomeBanner = () => {
  return (
    <div className="homebanner">
      <img className="homebannerimg" src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2025/ridha/GW_Unrec/D323819370_DesktopHero_3000x1200._CB778388200_.jpg' alt="Home Banner" />
      <div className='grayBackgroundHomeBanner'></div>

      <div className="homeBannerItemDiv">

        {
          homeBannerItemProduct.product.map((item, ind) => {
            return (
              <div className="homeBannerItemDivCard">
                <div className="homeBannerItemDivCardTitle">{item.itemTitle}</div>
                <div className="imgHomeBannerItemDivCard">
                  {
                    item.imgs.map((it, ind) => {
                      return (

                        <div className="imgBannerHomeDiv">
                          <img className="imgBannerHomeDivImg" src={it.url} alt={it.name} />
                          <div className='imgBannerImgName'>{it.name}</div>
                        </div>
                      );
                    })
                  }
                </div>

                <a href="/" className="card-link">{item.linkText}</a>

              </div>



            );
          })
        }







      </div>

    </div>
  )
}

export default HomeBanner
