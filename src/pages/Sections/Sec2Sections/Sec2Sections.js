import React from 'react'
import img from '../../../data/images'

export default function Sec2Sections() {
  return (
    <section className="sec-one">
    <div className="container">
      <div className="sec-one__title title-h1">секция фитнес</div>
      <div className="sec-one__line line"></div>
      <div className="sec-one__row">
        <div className="sec-one__left">
          <div className="sec-one__image"><img src={img.section_3_1} alt="фото"/></div>
          <div className="sec-one-l__title title-h1">что нужно знать о фитнес</div>
          <div className="sec-one__text text-body">Что бы там не говорили ленивые и некомпетентные люди, фитнес для
            женщин играет очень важную роль. Мнение, что о том, что силовые тренировки превращают женщин в
            мужеподобных качков – ошибка. Если вы любите то, что делаете, вы с большей вероятностью будете
            придерживаться программы и добьетесь результатов.
            Для достижения цели необходимо учитывать любые мелочи, и разбираться, что правда о женском фитнесе, а
            что ложь.
            <p></p>
            <span>Распространённые мифы про фитнес для женщин</span>
            <p></p>
            Фразы типа «Я хочу избавиться только от жира на животе и больше нигде», «Я хочу укрепить только
            внутреннюю часть бедер», «Работа с отягощением сделают меня похожей на мужчину» постоянно слышатся в
            зале. У всех трёх высказываний есть одна общая черта: это почти невозможно.
            Жир можно сжечь в какой-то конкретной области
            Давайте начнем с теорий жиросжигания и приведения в тонус определенной части тела. Тонус включает в себя
            две составляющие: жировую (подкожный жир) и мышечную ткани. Для того чтобы вам выглядеть более упругой,
            необходимо снижение процента жира в организме и увеличение мышечной массы.
            Организм не может сжигать жир в каком-то одном конкретном месте, например, только в области живота. Жир
            уходит со всего тела. К сожалению, не обязательно равномерно.
            У многих есть так называемые проблемные зоны, откуда жир уходит в последнюю очередь. У женщин это, как
            правило, область живота, руки или ноги. Средств не так уж и много. Почти единственный выход – это просто
            продолжать худеть.
          </div>
          <div className="sec-one__l_priceRow">
            <div className="sec-one__priceRow__left"><img src={img.section_3_3}  alt="фото"/></div>
            <div className="sec-one__priceRow__right">
              <div className="sec-one-priceRow-r__title title-h2">Тарифы</div>
              <ul className="sec-one-priceRow-r__list">
                <li>1-4 занятий в месяц <span>500</span> </li>
                <li>5-10 занятий в месяц <span>400</span> </li>
                <li>10-30 занятий в месяц <span>300</span> </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sec-one__right">
          <div className="sec-one-r__image"><img src={img.section_3_2} alt="фото"/></div>
          <div className="sec-one-r__title title-h2">тренер по фитнес</div>
          <div className="sec-one-r__subtitle">зия урманова</div>
          <div className="sec-one-r__text text-body">Фитнес — один из самых популярных видов спортивных занятий в
            современном мире. Но, в отличие от спорта, — без акцента на бодибилдинге, — целью фитнеса является не
            достижение рекордов, а желание вести здоровый образ жизни. В статье мы расскажем об эффектах, которые
            можно достичь, занимаясь тем или иным видом фитнеса, и о том, что нужно знать новичкам.
            <p></p>
            <span> Что такое «фитнес»?</span>
            <p></p>
            Само слово фитнес происходит от английского прилагательного «fit» — «находящийся в хорошей форме,
            здоровый». Но это понятие включает в себя не только занятия физическими упражнениями. Фитнес — это и
            режим дня, включающий восстановление после занятий, отдых, и правильное питание, то есть полностью
            здоровый образ жизни.
            Комплекс фитнес-упражнений и рацион питания подбираются индивидуально — в зависимости от возраста,
            состояния здоровья, противопоказаний, целей (похудение, набор веса и проч.), строения и особенностей
            фигуры.
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}