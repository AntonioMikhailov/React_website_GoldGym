import React from 'react'
import { NavLink } from 'react-router-dom'
import img from '../../../../data/images'
import H2 from '../../../../components/H2/H2'

export default function S5Blogs() {
  const S5Item = [
{ img: img.section_home_5_1, title: 'Удваиваем количество подтягиваний'},
{ img: img.section_home_5_2, title: 'Отжимания vs Жим лежа'},
{ img: img.section_home_5_3, title: 'Сколько калорий сжигает кроссфит'},

  ]
  return (
    <section className="h-five">
      <H2
 Title={'последние темы в блогах'}
 TitleStyles={''}
 lineStyles={''}
 />
   
    <div className="h-five__background">
      <div className="container">
        <div className="h-five__row">
          {
            S5Item.map((item, i)=> { 
             return ( 
              <div key={i} className="h-five__item">
              <div className="h-five-i__image"><img src={item.img} alt="фото"/></div>
              <div className="h-five-i__tetx title-h2">{item.title}</div>
              <NavLink to="/blogs" className="h-five-i__button btn-red">читать дальше</NavLink>
            </div>
              )})  
          }
 
        </div>
      </div>


    </div>
</section>
  )
}
