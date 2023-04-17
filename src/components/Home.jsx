import React from 'react'
import Slider from './Slider';
import CartItem from './cart/CartItem';

const Home = (props) => {
  return (
    <div>
      <Slider></Slider>
      <CartItem item={props.item}
      overlayItems={props.overlayItems}
      setOverlayItems={props.setOverlayItems}
      favorites={props.favorites}
      setFavorites={props.setFavorites}
      />
    </div>
  )
}

export default Home