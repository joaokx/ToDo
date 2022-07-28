
import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import {   Routes,  Route } from 'react-router-dom'
import Produtos from './components/Produtos'
import Produto from './components/Produto'
import Cart from './components/Cart'
import Contatos from './components/contatos'

const App = () => {
  return (
   
      
      <>
      <Navbar/>
        
       <Routes>
          <Route  path="/" exact element={<Home/>} />
          <Route  path="/produtos" exact  element={<Produtos/>}/>
          <Route path="/produtos/:id" exact   element={<Produto/>} />
          <Route path="/cart" exact  element={<Cart/>}/>
          <Route path="/contatos" exact  element={<Contatos/>}/>
          
          </Routes>
        
        
        </>
    
  )
}

export default App