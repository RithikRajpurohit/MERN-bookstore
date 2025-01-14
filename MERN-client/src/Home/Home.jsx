import React from 'react'
import Banner from '../Components/Banner'
import FavoriteBook from './FavoriteBook'
import FavBook from '../Components/FavBook'
import PromoBanner from './PromoBanner'
import OtherBook from './OtherBook'
import Review from './Review'

const Home = () => {
  return (
    <div >
      <Banner/>
      <FavoriteBook/>
      <FavBook/>
      <PromoBanner/>
      <OtherBook/>
      <Review/>
    </div>
  )
}

export default Home
