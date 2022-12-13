import React, { useState } from 'react'
import img from '../../../data/images'
import icon from '../../../data/icons'
import Slider from "react-slick";
import {RemoveOffsetPadding, AddOffsetPadding} from '../../../components/OffsetPadding/OffsetPadding'


export default function Sec3GallerySec() {

  const previewImageGallery = [img.section_5_1, img.section_5_2, img.section_5_3, img.section_5_4,  ]
  const sliderImage = [img.section_gallery_1, img.section_gallery_2,img.section_gallery_3,img.section_gallery_4,img.section_gallery_5]
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 10000, // задержка между скролами
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    variableWidth: true,
    pauseOnHover: true,
  
  };
  const [isActiveGallery, setActiveGallery] = useState(false)
  return (
    <section className="sec-gallery">
    <div className="container">
      <div className="sec-gallery__title title-h1">наши клубные фото </div>
      <div className="sec-gallery__line line"></div>
      <div className="carousel-preview">
        <div className="carousel-preview__row">
          {
            previewImageGallery.map((item, i)=> { 
             return ( 
              <div  key={i} 
      
              className="carousel-preview__columns">
              <div onClick={()=> {setActiveGallery(true);  AddOffsetPadding() }} className="carousel-preview-item">
                <div className="carousel-preview__image">
                  <img src={item} alt="фото"/></div>
                <div className="carousel-preview__icon"><img src={icon.search_gallery_icon} alt="icon"/></div>
              </div>
            </div>
              )})  
          }
        </div>
      </div>
      <div onClick={()=> {setActiveGallery(false); RemoveOffsetPadding()}}   className={ isActiveGallery ? "carousel-container show-carousel": "carousel-container"}>
        <div onClick={(e)=> e.stopPropagation() }   className={"carousel-wrapper"} >
          <div className="carousel-main">
            <div className="slider-row">
            <Slider {...settings}>
              {
                sliderImage.map((item, i)=> { 
                 return ( 
                  <div key={i} className="slider-image"><img src={item} alt="фото"/></div>
                  )})  
              }
                </Slider> 
            </div>
          </div>
          <div className="buttons-row">
          
          <div onClick={()=> {setActiveGallery(false); RemoveOffsetPadding()}} className="carousel-cancelBtn"><img src={icon.gallery_canсel_search} 
                alt="icon"/>
            </div>
          </div>
        </div>
         
      </div>
    </div>
  </section>
  )
}
