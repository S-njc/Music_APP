import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './layout'
import * as Pages from './Pages'
import './App.css'

const App = () => {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Pages.Home />} />
        </Route>
        
        <Route path='/about' element={<Pages.ArtistInfo />} />

        <Route path='shop' >
          <Route index element={<Pages.Shop />} />
          <Route path='/shop/:id' element={<Pages.ShopItem />} />
        </Route>

        <Route path='*' element={<Pages.NotFound />} />
      </Routes>
    </div>
  )
}

export default App
