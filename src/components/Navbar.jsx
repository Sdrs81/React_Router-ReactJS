import React from 'react'
import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className='mainNav'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/aboutUs"}>About Us</NavLink>
        <NavLink to={"/history"}>History</NavLink>

    </nav>
  )
}
