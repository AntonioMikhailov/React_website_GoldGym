import React from 'react'
import BreadCrumbsNav from '../../components/BreadCrumbsNav/BreadCrumbsNav'
import CoachesComponent from '../../components/CoachesComponent/CoachesComponent'
import H2 from '../../components/H2/H2'
import img from '../../data/images'

export default function Coaches() {
  return (
    <>
    <BreadCrumbsNav
   prevPage={'тренеры'}
   currentPage={'тренеры'}
   />
  
 <section className="c-one">
        <div className="container">
          <div className="c-one__row">
          <H2
 Title={'наши тренеры'}
 TitleStyles={''}
 lineStyles={''}
 /> 
            
            <div className="c-one__image"><img src={img.section_1} alt="фото"/></div>
            <div className="c-one__titleTwo title-h1">наша команда</div>
            <div className="c-one__line line"></div>
            <div className="c-one__text text-body">
              Постоянные посетители зала тренируются самостоятельно. Новичкам желательно заручиться поддержкой
              «проводника» в мир спорта. Физические нагрузки для неподготовленного человека травмоопасны. Тренер сможет
              подсказать, как заниматься на тренажере без риска для здоровья, подберет нужное оборудование, рассчитает
              возможную нагрузку.
              Иногда самостоятельные занятия не дают ожидаемого эффекта.
              В автономном тренажерном зале работают тренеры-партнеры, которые могут провести персональную тренировку.
              <p></p>
              Профессионал объяснит, в чем причина неудач, скорректирует программу, выявит проблемные зоны, даст
              рекомендации по питанию. Индивидуальные тренировки дисциплинируют, заставляют заниматься с полной отдачей.
              Результат не заставит себя ждать. Тренер поможет одержать первую победу – победу над собой, изменит
              отношение к спорту.
              <p></p>
              Тренировки в «GOLDGYM« могут проводить только тренеры-партнеры нашего зала. О точной стоимости
              персональных занятий и других условиях Вы договариваетесь непосредственно с выбранным тренером.
              Контакты каждого тренера Вы найдете на его страничке

              <p></p>
              Мы рассматриваем кроссфит как развивающееся путешествие тела и разума! На наш взгляд, тренировки CrossFit
              помогают соединить разум, тело и дух. <p></p>
              <span> Это фитнес-путешествие ведет к открытию цели в жизни, к лучшему образу жизни ...</span>
            </div>
          </div>
        </div>
      </section>

      <section className="h-three">
      <div className="container">
      <H2
 Title={'выбери своего тренера'}
 TitleStyles={''}
 lineStyles={''}
 /> 
<div className="h-three__row">
            
<CoachesComponent
link={
  ['/coache-one', '/coache-two','/coache-three','/coache-four',]
}
/> 
             
            </div>

      </div>
      </section>



    </>
  )
}
