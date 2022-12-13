import React from 'react'
import img from '../../../../data/images'

export default function OurPrograms() {
const sec2Item = [
  {title: <>кроссфит <br/>light</>, img:img.section_home_2_1 },
  {title: <>финтнесс <br/>студия</>, img:img.section_home_2_2 },
  {title: <>персональный <br/>тренинг</>, img:img.section_home_2_3 },
  {title: <>кроссфит <br/>optima</>, img:img.section_home_2_4 },
]

  return (
 <>
      {
       sec2Item.map((item, i)=> { 
        return ( 
          <div key={i} className="h-two__item">
          <div className="h-two-i__title title-h2">{item.title}</div>
    <div className="h-two-i__image"><img src={item.img} alt="фото"/></div>
    <button className="h-two-i__button btn-white">начать занятия</button>
    </div>
         )}
         )
    }
   </> 
  
  )
}
