import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import icon from '../../data/icons'
import MobileMenu from './MobileMenu/MobileMenu'
 

export default function Header() {
  const menuRow = [
    // Одна база для Header и для Мобильного меню
  {link: '/', title: 'Главная'},
  {link: '/sections', title: 'секции'},
  {link: '/coaches', title: 'тренеры'},
  {link: '/blogs', title: 'блоги'},
  {link: '/contacts', title: 'Контакты'},
  ]
  const [activeMobile, setActiveMobile] = useState(false)
  const [activeSearchField, setActiveSearchField] = useState(false)
const searchHeaderInput = useRef()

function ResetInput() { 
 searchHeaderInput.current.value = ''
}
 
  return (
<>
<section className="header">
      <div className="header-row" id="toUp">

        <div className="header-Top">
          <div className="container">
            <div className="header-Top__row">
              <div className="header-row-Top-left">
                <a href="tel:495123456789" className="header-row-Top-left__phone" target='blank'>(495)123-456-78</a>
                <a href="https://goo.gl/maps/dX8HDqsUhA6zhN4s6" className="header-row-Top-left__adress" target='blank'>Кутузовский
                  пр.,48</a>
              </div>
              <div className="header-row-Top-right">

                <div className={activeSearchField ?  "header-row-Top-searchField header-searchField__active" :"header-row-Top-searchField"}>
                  <input ref={searchHeaderInput} type="text" className="header-row-Top-input" placeholder=" Поиск..." autoFocus/>
                  <div onClick={ResetInput} className="header-row-Top-searchInputIcon"><img src={icon.search_icon} alt="icon"/></div>
                </div>
                <div onClick={()=>setActiveSearchField(prev => !prev)} 
                 
      
      className={activeSearchField ? "header-row-Top-right__searchIcon headerSearchIcon__active" : "header-row-Top-right__searchIcon "}></div>
    </div>
  </div>
          </div>
        </div>

        <div className="header-Bottom">
          <div className="container">
            <div className="header-Bottom__row">
              <NavLink to="/" className="header-logo"><img src={icon.goldgym} alt="logo"/></NavLink>
              <nav className="header-menu">
                {
                  menuRow.map((item, i)=> { 
                   return ( 
                    <NavLink key={i} to={item.link} end className={({isActive})=> isActive ? "header-menu__item header-active " : 'header-menu__item'}>{item.title}</NavLink>
                    )})  
                }
       
              </nav>
              <div className="header-Bottom__socialRow">
                <a href="#/ " className="header-social__item" data-notitle>&#xe90a;</a>
                <a href="#/ " className=" header-social__item" data-notitle>&#xe906;</a>
                <a href="#/ " className=" header-social__item" data-notitle>&#xe908;</a>
                <a href="#/ " className=" header-social__item" data-notitle>&#xe90d;</a>
              </div>
            </div>
          </div>
        </div>

        <div onClick={()=>setActiveMobile(prev => !prev)} className={activeMobile ? "burger-btn burger-btn-active" : "burger-btn"}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
    {/* Мобилка */}
    <MobileMenu
activeMobile={activeMobile}
setActiveMobile={setActiveMobile}
menuRow={menuRow}
/>

</>
  )
}
