import React from 'react'
import H2 from '../../../../components/H2/H2'
import icon from '../../../../data/icons'
import img from '../../../../data/images'
 

export default function S6Review() {
  return (
    <section className="h-six">
    <div className="container">
    <H2
 Title={'отзывы'}
 TitleStyles={''}
 lineStyles={''}
 />
     
      <div className="h-six__row">

        <div className="h-six-i__left"><img src={img.section_home_6} alt="фото"/></div>
        <div className="h-six-i__right">
          <div className="h-six-i__quotes"><img src={icon.quotes} alt="icon"/></div>

          <div className="h-six-i__text text-body">Три года назад я пришла в клуб GOLDGYM. Первые впечатления от занятий
            были незабываемые. Тренеры клуба, все профессионалы высокого класса. Мой вес до начала занятий был 76
            кг. <p></p> После 4 недель занятий я сбросила 12 кг. Моя сила значительно выросла. Спустя 6 месяцев мой
            жим лежа составил 70 кг. Я очень рада, что попала в клуб GOLDGYM. Спасибо. все тренерам, которые помогли
            мне обрести уверенность в&nbsp;своих силах.</div>
          <div className="h-six-i__name">анна ройтер</div>

        </div>


      </div>
    </div>
  </section>
  )
}
