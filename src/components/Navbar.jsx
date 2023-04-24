import React from 'react'
import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/aboutUs"}>About Us</NavLink>

    </nav>
  )
}
