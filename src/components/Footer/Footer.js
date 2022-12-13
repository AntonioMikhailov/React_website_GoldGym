import React from 'react'
import { NavLink } from 'react-router-dom'
 
export default function Footer() {
  const LinksItem = [
    { link: '/', text: 'Главная'},
    { link: '/sections', text: 'Секции'},
    { link: '/coaches', text: 'Тренеры'},
    { link: '/blogs', text: 'Блоги'},
    { link: '/contacts', text: 'Контакты'},

  ]
 return (
  
 
 <section className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-i__one">
            <div className="footer-i-one__title footerTitle">GOLD<span>GYM</span> </div>
            <div className="footer-i-one__text footerText">Независимо от того, какая у вас сейчас форма, после посещения
              наших тренировок по кроссфиту вы будете на пике своей физической формы! </div>
</div>
<div className="footer-i__two">
<div className="footer-i-two__title footerTitle">навигация</div>

<nav className="footer-i-two__linksRow">
{
  LinksItem.map((item, i)=> { 
   return ( 
    <NavLink key={i} to={item.link} end className={({isActive})=> isActive ? "footer-i-two__link footerNav__active footerText" : 'footer-i-two__link footerText'}>{item.text}</NavLink>
    )})  
}
 

</nav>
</div>
          <div className="footer-i__three">
            <div className="footer-i-three__title footerTitle">Контакты</div>
            <div className="footer-i-three__adress footerText">г.Москва, <br/> Кутузовский пр.,48 <br/> тел. (495)123-456-78
            </div>
            <a href="Email:goldgym@goldgym.ru" className="footer-i-three__email" data-notitle>goldgym@goldgym.ru</a>
          </div>
          <div className="footer-i__four">
            <div className="footer-i-four__title footerTitle">режим&nbsp;работы</div>
            <div className="footer-i-four__worktime footerText">
              <span>пнд - птн</span> <br/>
              с 6 до 23 часов <br/>
              <span>суб - вск</span> <br/>
              с 8 до 21 часов
            </div>


          </div>

        </div>
        <a href="email:zakaz@tochka-focusa.ru" className="footer-copyright" data-notitle>Все права защищены. Студия дизайна
          "Точка-Фокуса" 2021г.</a>
      </div>
    </section>
 
 
)
}
