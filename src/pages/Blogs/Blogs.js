import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import BreadCrumbsNav from '../../components/BreadCrumbsNav/BreadCrumbsNav'
import ButtonRed from '../../components/ButtonRed/ButtonRed'
import icon from '../../data/icons'
import data from './data'

export default function Blogs() {
  const inputBlog = useRef()
 
  return (
 <>
 <BreadCrumbsNav
   prevPage={'блоги'}
   currentPage={'блоги'}
   />

<section className="blog">
        <div className="container">
          <div className="blog__row">
            <div className="blog__left">
    {
      data.map((item, i)=> { 
        return ( 
        <div key={i} className="blog-left__item">
      <div className="blog-left__image"><img src={item.image} alt="фото"/></div>
      <h2 className="blog-left__title title-h2">{item.title}</h2>
      <a href="blog-inside/blog-one.html" className="blog-left__text text-body">{item.text}</a>
      <div className="blog-left__buttonRow">

      <ButtonRed
      link={item.link}
      buttonStyle={'blog-left__button'}
      buttonText={'Читать дальше'}
      />
       
        <div className="blog-left__commentIcon"><img src={icon.comments_icon} alt="icon"/></div>
      </div>
    </div>
        )})  
    }
            </div>
            <div className="blog__right">
              <div className="blog-right__inputRow">
                <input ref={inputBlog} type="text" className="blog-right__input" placeholder="Поиск по словам..."/>
                <div onClick={()=> {inputBlog.current.value = ''}} className="blog-right__searchButton"><img src={icon.search_field_icon} alt="icon"/></div>
              </div>
              <div className="blog-right__lastThemeRow">
                <div className="blog-r-LastThemeRow__title title-h3">последние темы</div>
                <div className="blog-r-LastThemeRow__text text-body">
                  <NavLink to="blog-1">Удваиваем количество подтягиваний</NavLink>
                  <NavLink to="blog-2">Отжимания vs Жим лежа</NavLink>
                  <NavLink to="blog-3">Сколько калорий сжигает кроссфит</NavLink>
                </div>
              </div>
              <div className="blog-r-ArchiveRow">
                <div className="blog-r-ArchiveRow__title title-h3">Архив</div>
                <div className="blog-r-ArchiveRow__text text-body">Август 2020</div>

              </div>
              <div className="blog-r-categoryRow">
                <div className="blog-r-categoryRow__title title-h3">категории</div>
                <div className="blog-r-categoryRow__text">
                  <NavLink to="/coaches"> Тренеры</NavLink>
                  <NavLink to="/blogs"> Питание</NavLink>
                  <NavLink to="/coaches"> Программы</NavLink>

                </div>
              </div>

            </div>
          </div>
        </div>

      </section>
 </>
  )
}
