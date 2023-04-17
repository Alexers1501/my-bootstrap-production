import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Favourites from './components/favorites/Favourites';
import Form from './components/Form';
import { set } from 'react-hook-form';
import Basket from './components/basket/Basket';
import React from 'react';
import Description from './components/Description';

export const AppContext = React.createContext()

function App() {
  // хранение данных туров
  const [tyrs, setTyrs] = useState([]);
  // для избранных туров
  const [favorites, setFavorites] = useState([]);
  //для корзины
  const [overlayItems, setOverlayItems] = useState([]);

  // благодаря useEffect данные отображаются при ервичной отрисовке
  useEffect (() => {

    async function axiosData(){
      const tyrsData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/tyrs')
      const favoritesData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites')
      const cartData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/cart')

      setTyrs(tyrsData.data)
      setFavorites(favoritesData.data)
      setOverlayItems(cartData.data)
    }
    axiosData()
  }, [])

  const deleteItems=(id)=>{
    axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/cart/${id}`)
    // обновляем корзину
    setOverlayItems(objDelete=>objDelete.filter(item=>item.id!==id))
  }

  const isAdded=(myId)=>{
    return overlayItems.some((objIsAdded)=>objIsAdded.myId === myId)
  }

  const isFav=(myId)=>{
    return favorites.some((objIsFav)=>objIsFav.myId === myId)
  }


  return (
    <AppContext.Provider
    value={
      {
        tyrs,
        setTyrs,
        overlayItems,
        setOverlayItems,
        favorites,
        setFavorites,
        isAdded,
        isFav
      }
    }>
      <div>
        <Router>

          <Header></Header>
          <Routes>
            <Route path='/favourites' element={
                <Favourites 
                favorites={favorites}
                setFavorites={setFavorites}
                item={tyrs}
                overlayItems={overlayItems}
                setOverlayItems={setOverlayItems}
                />
            }
            />
            <Route path='/description' element={
                <Description 
                />
            }
            />
            <Route path='/' element={
                <Home 
                item={tyrs}
                favorites={favorites}
                setFavorites={setFavorites}
                overlayItems={overlayItems}
                setOverlayItems={setOverlayItems}/>
            }
            />

            <Route path='/form' element={
                <Form/>
            }
            />
            <Route path='/cart' element={
                <Basket
                totalPrice={
                  overlayItems.reduce((element = overlayItems.length, obj)=>
                  element+obj.price, 0)
                }
                overlayItems={overlayItems}
                deleteItems={deleteItems}
                />
            }
            />
            
          </Routes>

        </Router>
        <Footer></Footer>
      </div>
    </AppContext.Provider>
  );
}

export default App;
