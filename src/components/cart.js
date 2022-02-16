import React from 'react'

const Cart = ({ items, total }) => {
    
    
    const cartItems = items.map(item => {
           return (
               <div>{item.attributes.name} - {item.attributes.price} €</div>
           ) 

    }) 
  return (
    <div>
        {cartItems}
        <div className="App-total">
            Soit un total de {total}€
        </div>
    </div>
  )
}

export default Cart
