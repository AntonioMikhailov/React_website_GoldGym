import React from 'react'
import { NavLink } from 'react-router-dom'
 

export default function MobileMenu({activeMobile, setActiveMobile, menuRow}) {
  return (
   <>

       <div
       onClick={()=> setActiveMobile(false)} 
       className={activeMobile ? "background background-active " : "background "}></div>

<div className="mobile-wrapper">
  <div className={activeMobile ? "mobile-wrapper   mobile-menu-active" : "mobile-wrapper"}>
  {
       menuRow.map((item, i)=> { 
       return ( 
       <NavLink
       onClick={()=> setActiveMobile(false)}
       key={i} to={item.link} end 
       className={({isActive})=> isActive ? "mobile-menu__item mobile-active " : 'mobile-menu__item'}>{item.title}
              </NavLink>
       )})  
       }
 
  </div>
</div>
 
   </>
  )
}



 