import React, { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import Vegetable from './components/Vegetable';
import Cart from './components/cart';

const App = () => {
  //Création d'une propriété vegetables dans le state
  const [vegetables, setVegetables] =useState([]);
  //Nouvelle propriété dans le state pour stocker les éléments du panier
  const [cart, setCart] = useState({
    items :[],
    total : 0
  });

 


  const getVegetables = async () =>{
    const json = await fetch("http://localhost:1337/api/vegetables")
                    .then(response => response.json());

  //Utilisation de la fonction setVegetables mise à disposition par useState. 
  //Cette fonction nous permet de mettre à jour la propriété de notre state
  
    setVegetables(json.data);                  


}

//Utilisation du hook useEffect pour faire appel à notre API après le premier rendu du composant (équivalent à la méthode componentDidMount)
//Le deuxième paramètre de la fonction useEffect permet de réguler le moment où
//va s'exécuter la fonction de callback du useEffect
//Avec un tableau vide [] nous avons l'équivalent du componentDidMount  
useEffect(() =>{
  getVegetables();

}, []);

const addToCart = (vegetable) =>{
//On doit toujours passer par la fonction de modification de la propriété
//Qui est mise à disposition par le useState
  setCart({
    items: [...cart.items, vegetable],
  total: Math.round((cart.total + vegetable.attributes.price)*100)/100
});

}

//Préparation du rendu JSX en parcourant le tableau vegetables avec la méthode map
const listVegetables = vegetables.map(vegetable =>{
  return(
    <Vegetable 
      key={vegetable.id}
      name={vegetable.attributes.name}
      price={vegetable.attributes.price}
      image={vegetable.attributes.image}
      addToCart={()=> addToCart(vegetable)}

    
    />
  )
})

  return (
    <div className="App">
      <Header />

      <div className="App-vegetables-wrapper">
        <div className="App-vegetables">
          {listVegetables}

        </div>
      </div>
      <div className="App-cart">

        <Cart 
          items={cart.items}
          total={cart.total}
        
        />
        


      </div>

    </div>
  );
}

export default App;
