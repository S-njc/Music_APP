import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './layout'
import * as Pages from './Pages'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Pages.Home />} />
          
        <Route path='/ArtistInfo' element={<Pages.ArtistInfo />} />

        <Route path='/Discography' element={<Pages.Discography />} />

        <Route path='/shop'>
          <Route index element={<Pages.Shop />} />
          <Route path=':id' element={<Pages.ShopItem />} />
        </Route>

        <Route path='*' element={<Pages.NotFound />} />
      </Routes>
    </div>
  )
}

export default App

