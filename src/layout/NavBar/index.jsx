import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './style.css'


const NavBar = () => {
  const activeStyle = {
    textDecoration: "underline",
    color: "darkblue"
  }

  return (
  <>
    <nav>
      <h2>Spotify</h2>
      <ul className="nav-links">
        <li>
          <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/ArtistInfo" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Artist</NavLink>
        </li>
        <li>
          <NavLink to="/Discography" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Discography</NavLink>
        </li>
        <li>
          <NavLink to="/shop" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Shop</NavLink>
        </li>


      </ul>
    </nav>
    <Outlet/>
  </>
  );
}

export default NavBar