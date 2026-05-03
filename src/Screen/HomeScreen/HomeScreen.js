import React from 'react'
import './HomeScreen.css'
import HomeDetails from './HomeDetails/homeDetails'
import HomeBanner from './HomeBanner/homeBanner'

const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <HomeBanner />
      <HomeDetails />

    </div>
  )
}

export default HomeScreen
