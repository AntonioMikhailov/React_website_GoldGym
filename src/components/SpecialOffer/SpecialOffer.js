import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
 

export default function SpecialOffer() {
  const [ buttonValue, setButttonValue] = useState('оставить заявку');
  
  const [values, setValues] = useState({input: ''})  

  const location = useLocation();
useEffect(() => {
  setButttonValue('оставить заявку')
 }, [location]); // 

  function handleInput(e) { 
    setValues({input: e.target.value}) 
    console.log(values.input);
  }
  function handleSubmit(e) {
 
    e.preventDefault();
    if(values.input) {
      setButttonValue('заявка отправлена')
      setTimeout(() => {
        // можно не обновлять текст чтобы юзер знал что он уже отправил
        setButttonValue('оставить заявку')
        setValues({input: ''})  
      }, 2000);
    } else {
      setButttonValue('введите E-mail')

    }
  }
  return (
    <section className="special-offer">
    <div className="special-offer__row">
      <div className="special-offer__title title-h1">получи наше специальное предложение</div>
      <div className="special-offer__subtitle">а также абонемент на 2 пробных занятия и базовый курс тренировок</div>
      <form onSubmit={handleSubmit} className="special-offer__formRow">
        <input value={values.input} onChange={handleInput} type="text" name="user_email" className="special-offer__input" placeholder="Ваш E-mail:"/>
      <button type="submit" className="special-offer__button btn-red">{buttonValue}</button>
      </form>
      
      <div className="special-offer__bottomTitle title-h1">мы всегда на связи</div>
      <div className="special-offer__socialRow">
        <a href="#/" className="special-offer-soc__item" data-notitle>&#xe90a;</a>
        <a href="#/" className="special-offer-soc__item" data-notitle>&#xe906;</a>
        <a href="#/" className="special-offer-soc__item" data-notitle>&#xe908;</a>
        <a href="#/" className="special-offer-soc__item" data-notitle>&#xe90d;</a>
      </div>
    </div>
  </section>
  )
}
