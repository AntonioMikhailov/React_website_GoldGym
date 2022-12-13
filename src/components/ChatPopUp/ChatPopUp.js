import React, { useState } from 'react'
import icon from '../../data/icons'

export default function ChatPopUp() {
  const[isChatShow, setIsChatShow] = useState(false) // для самой формы
  const[isChatAsk, setIsChatAsk] = useState(true) // Для уменьшения чата
  return (
   <>
     <section className="chat-popup">
      <div
      className={isChatAsk ? "chat-ask" : "chat-ask chat-ask-hide__active " } ><img src={icon.PopUp_image} alt="icon"/></div>
      <div
        onClick={()=> setIsChatAsk(false)}
      className={isChatAsk ? "chat-ask__cancel" : "chat-ask__cancel chat-ask-hide__active " }><img src={icon.Cancel_chatIcon} alt="icon"/></div>
      <div
      onClick={()=> setIsChatShow(true)} className="chat-ask__popUpIcon"><img src={icon.PopUp_icon} alt="icon"/></div>
    </section>
   
    <section
    className={isChatShow ? "formChat formChat__active": "formChat" }>
      <div className="formChat__row">
        <div className="formChat__header">Добро пожаловать в Чат</div>
        <div className="formChat__icon"><img src={icon.PopUp_form_icon} alt="icon"/></div>
        <div className="formChat__text">Мы рады приветствовать Вас в&nbsp;Чате клуба <span>GoldGym!</span>
          <p></p>
            Введите Ваше Имя и E-mail для начала разговора
        </div>
        <div className="formChat__inputName">Ваше имя:<span>*</span> </div>
        <input type="text" className="formChat_input" placeholder=""/>
        <div className="formChat__inputEmail">Ваш Email:<span>*</span> </div>
        <input type="text" className="formChat_input" placeholder=""/>
        <button className="formChat__button btn-red">Начать чат</button>
        <div
         onClick={()=> {setIsChatShow(false); setIsChatAsk(true) }} 
        className={isChatShow ? "formChat__cancelIcon " : "formChat__cancelIcon chat-ask-hide__active" }><img src={icon.PopUpcancel_icon} alt="icon"/></div>
      </div>
    </section>
   </>
  )
}
