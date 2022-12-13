import React from 'react'
import BreadCrumbsNav from '../../components/BreadCrumbsNav/BreadCrumbsNav'
import img from '../../data/images'
import AreYouReady from './components/AreYouReady/AreYouReady'
import S1Sections from './S1Sections/S1Sections'
import Sec2Sections from './Sec2Sections/Sec2Sections'
import Sec3GallerySec from './Sec3GallerySec/Sec3GallerySec'
 


export default function Sections() {
  return (
   <>
   <BreadCrumbsNav
   prevPage={'секции'}
   currentPage={'секции'}
   />
   <S1Sections/>
   <AreYouReady
   image={img.section_2}
   title={<>А Ты готов<span> прокачать&nbsp;себя</span>?</>}
   text={'подпишись на наши горячие предложения'}
   />
   <Sec2Sections/>
   <AreYouReady
   image={img.section_4}
   title={<>а Ты готова<span> изменить&nbsp;фигуру</span>?</>}
   text={'подпишись на наши горячие предложения'}
   />
   <Sec3GallerySec/>
   </>
  )
}
