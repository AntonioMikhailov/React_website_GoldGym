import React from 'react'
import { useParams } from 'react-router-dom';
import BreadCrumbsNav from '../../components/BreadCrumbsNav/BreadCrumbsNav';
import icon from '../../data/icons';
import dataCoachesSingle from './data';

export default function CoachesSingle() {
 
 
  const {id} = useParams();  
  const item = dataCoachesSingle.find((item) => {
   return  item.pageId === id;  
    });

 
  return (
 <>
 <BreadCrumbsNav
   currentPage={item.title}
   />
    
   <section className="coach-inside">
          <div className="container">
          <div className="coach-inside__TopRow">
            <div className="ci-top__left"><img src={item.image} alt="фото"/></div>
            <div className="ci-top__right">
              <div className="ci-top-right__title title-h2">{item.title}</div>
              <div className="ci-top-right__subtitle">{item.subtitle}</div>
              <div className="ci-top-right__text text-body">{item.text}</div>
            </div>
          </div>
          <div className="coach-inside__BottomRow">
            <div className="ci-bottom__left">
              <div className="ci-bottom-left__title title-h2">досье тренера</div>
              <div className="ci-bottom-left__subtitle">{item.bottomSubTitle}</div>
              <div className="ci-bottom-left__text text-body">{item.bottomLeftText}</div>
              <div className="ci-bottom-left__textSecond text-body">
                <span>стоимость:</span> {item.bottomLeftSecondText}</div>
            </div>
            <div className="ci-bottom-right">
              <div className="ci-bottom-right__title title-h2">контакты</div>
              <a href="email:khlestov@GoldGym.ru" className="ci-bottom-right__adress">E-mail: <span>{item.contactEmail}</span> </a>
              <div className="ci-bottom-right__socialRow">
     
        <a href="#/" className="ci-bottom-right__socialItem" data-notitle><img src={icon.insta} alt="icon"/></a>
        <a href="#/" className="ci-bottom-right__socialItem" data-notitle><img src={icon.telegr}  alt="icon"/></a>
        <a href="#/" className="ci-bottom-right__socialItem" data-notitle><img src={icon.vkontacte}  alt="icon"/></a>
        <a href="#/" className="ci-bottom-right__socialItem" data-notitle><img src={icon.facebook}  alt="icon"/></a>

          </div>
            </div>

          </div>
        </div>
      </section>
 </>
  )
}
