import React from 'react'
import img from '../../../../data/images'
import ButtonRed from '../../../../components/ButtonRed/ButtonRed'

 

export default function S1() {
  return (
    <section className="h-one"> 
    <div className="h-one__backgroundImage"><img src={img.section_home_1} alt="фото"/></div>
    <div className="h-one__row">
      <div className="h-one__titleRow">
        <div className="h-one__subtitle__title title-h2">Будьте сильнее вместе с</div>
        <div className="h-one__subtitleLine line"></div>
      </div>
      <div className="h-one__title">GOLD<span>GYM</span> </div>
      <div className="h-one__subHeader title-h2">присоединяйтесь сегодня!</div>
      <div className="h-one__text text-body">Дряблые мышцы, обвисшая кожа, заплывший живот – не сделают Вас
        привлекательными.
        Лишний вес добавляет возраст и ухудшает здоровье. А мы не хотим, чтобы Ваше здоровье ухудшалось! Подтянутый
        живот, тугая кожа, налитые мышцы, никакого целлюлита - вот Ваша цель!
      </div>
      <ButtonRed
      link={'/sections'}
      buttonStyle={'h-one__button'}
      buttonText={'начать занятия'}
      />
   
    </div>
  </section>
  )
}
