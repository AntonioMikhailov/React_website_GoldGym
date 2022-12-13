import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import BreadCrumbsNav from '../../components/BreadCrumbsNav/BreadCrumbsNav';
import icon from '../../data/icons';
import BlogForm from './BlogForm/BlogForm';
import dataBlogSingle from './data';
export default function BlogsSingle() {
  const {id} = useParams();  
  const itemTitle = dataBlogSingle.find((item, i) => {
  return  item.pageId === id; // ищем совпадение пути  и Id из data.js и возвращаем эту страницу-объект  из массива
     });
  let NextPageIndex;
  let PrevPageIndex;
  return (
<>
<BreadCrumbsNav
   prevPage={'блоги'}
   currentPage={itemTitle.title }
   />
{
dataBlogSingle.map((item, i)=> {
  if(i >= dataBlogSingle.length -1 ) { // 2
    NextPageIndex = 0 // обнуляем
  } else {
    NextPageIndex = i+1;
  }
 if (i < 1) {
 PrevPageIndex = dataBlogSingle.length; // 3
  } else {
    PrevPageIndex = i;
  }
  // далее идет проверка на то какой контент из базы данных показывать
  if( item.pageId === id) {
    return ( 
      <React.Fragment key={i} >
       <section className="blog-inside__one">
    <div className="container">
     <div  className="bi-one__row">
    <div className="bi-one__image"><img src={item.img} alt="фото"/></div>
      <h2 className="bi-one__title title-h2">{item.title}</h2>
      <div className="bi-one__subtitle text-body">{item.subTitle}</div> 
      <div className="bi-one__text text-body">{item.text}</div>
      <div className="bi-one__image"><img src={item.img2} alt="фото"/></div>
      <div className="bi-one__citate">{item.citate}</div>
               <div className="bi-one__text text-body">{item.text2}</div>
               <div className="bi-one__commentIcon"><img src={icon.comments_icon} alt="icon"/></div>
              </div>
            </div>
          </section>
          <section className="bi-two">
              <div className="container">
                <div className="bi-two__row">
                  <div className="bi-two__left">
                    <div className="bi-two-l__prewRow">
                      <div className="bi-two-l__icon"><img src={icon.prev_article} alt="icon"/></div>
                      <NavLink to={`/blogs/blog-${PrevPageIndex}`} className="bi-two-l__text">предыдущая статья</NavLink>
                    </div>
                  </div>
                  <div className="bi-two__right">
                    <div className="bi-two-r__nextRow">
                      <NavLink to={`/blogs/blog-${NextPageIndex+1}`}
                      className="bi-two-r__text">следующая статья</NavLink>
                      <div className="bi-two-r__icon"><img src={icon.next_article}  alt="icon"/></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <BlogForm/>
            </React.Fragment>
      )
  }
  return false  
}
) 
}
</>
  )
}
