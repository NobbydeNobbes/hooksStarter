import React from 'react'

const Vegetable = ({name, price, image, addToCart }) => {
  return (
    <div className="App-vegetable" onClick={addToCart}>
        <img src={image} alt="" />
        <span>{name}</span>
        <span>{price}€</span>

    </div>
  )
}

export default Vegetable