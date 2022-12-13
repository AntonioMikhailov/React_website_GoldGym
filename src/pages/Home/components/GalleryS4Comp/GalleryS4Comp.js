import React, { useState } from 'react'
import icon from '../../../../data/icons'
import img from '../../../../data/images'

export default function GalleryS4() {

  const GalleryS4 = [
    { img: img.section_home_4_1, title: <>GOLD<span>GYM</span></>, subtitle: <>мы — профессионалы</>, text: <>Мы превыше всего ценим командную работу и
    взаимопомощь! Наши тренеры с радостью помогут вам улучшить физическую форму на индивидуальных
    занятиях, но вы также всегда найдете поддержку со стороны товарищей, поскольку наши групповые
    тренировки рассчитаны только на 10 человек ...</>  },
    { img: img.section_home_4_2, title: <>GOLD<span>GYM</span> </>, subtitle: 'мы ждем тебя в зале', text: <>Наш центр предлагает обширное место для занятий
    кроссфитом и фитнесом. В нашем тренажерном зале площадью 20 000 кв. Футов у вас наверняка будет
    более чем достаточно места для маневрирования! Кроме того, наше расположение в центре города делает
    нас такими привлекательными для такого количества людей…</>  },
    { img: img.section_home_4_3, title: <>GOLD<span>GYM</span></>, subtitle: 'первоклассное снаряжение', 
    text:
     <>
     Мы внимательно относимся к потребностям наших
                посетителей. Наш тренажерный зал полностью оборудован только первоклассными инструментами и
                оборудованием, такими как:
                <div className="bullets">
                <ul>
                  <li>Гири Med Balls</li>
                  <li>Накладки на бампер </li>
                  <li>Стойки для приседаний</li>
                  <li>Штанги и гири для тяжелой атлетики</li>
                  <li>Платформы для тяжелой атлетики и резиновые покрытия </li>
                </ul>
              </div>
              
    </>  
  },
  ]
  const [slideIndex, setSlideIndex] = useState(1)
  // показ следующего
   const nextSlide = () => {
    if( slideIndex !== GalleryS4.length) {
       setSlideIndex(slideIndex + 1)
   } else if (slideIndex === GalleryS4.length) {
       setSlideIndex(1)
    }
   }
   // показ предыдущего
 const prevSlide = () => {
 if( slideIndex !== 1) {
     setSlideIndex(slideIndex -1)
 
   } else if (slideIndex === 1) {
     setSlideIndex(GalleryS4.length)
 }
 }
 
  return (
    <>
    {
      GalleryS4.map((item, i)=> { 
       return ( 
        <div key={i} className={slideIndex === i+1 ? "h-four__galleryRow h-four__galleryRow__show" : "h-four__galleryRow"}>
        <div className="h-four__galleryItem">
          <div className="h-four-gal__backgroundImage"><img src={item.img} alt="фото"/></div>
          <div className="h-four-gal__row">
            <div className="h-four-galleryItem__title">{item.title}</div>
            <div className="h-four__galleryItem__subtitle title-h2">{item.subtitle}</div>
            <div className="h-four__galleryItem__text text-body">{item.text}</div>
          </div>
        </div>
      </div>


        )})  
    }
     <div onClick={prevSlide} className="h-four__buttonPrev"><img src={icon.icon_prev_gallery} alt="icon"/></div>
        
        <div onClick={nextSlide} className="h-four__buttonNext"><img src={icon.icon_next_gallery} alt="icon"/></div>
    </>
 
  )
}
