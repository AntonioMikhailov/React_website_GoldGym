import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ButtonRed({link, buttonStyle, buttonText}) {
  return (
   <NavLink to={link}>
     <button className={`${buttonStyle} btn-red`}>{buttonText}</button>
   </NavLink>
 
  )
}
