import React from 'react'
import img from '../../data/images'
import icon from '../../data/icons'
import { NavLink } from 'react-router-dom'

export default function CoachesComponent({link}) {
 
  const coachesItem = [
    { img: img.section_home_3_1, title: 'Андрей Хлестов', subtitle: 'владелец / главный тренер',  text: '12 лет назад я сбросил 30 килограмм с  помощью   личного тренера, и это  полностью изменило мой образ жизни. С тех пор моей миссией стало побуждать других заниматься   кроссфитом. '  },
    { img: img.section_home_3_2, title: 'Юрий Садальский', subtitle: 'тренер по кроссфиту',  text: 'В детстве я всегда занимался спортом,  фитнесом и атлетизмом в целом. Это приобрело для меня совершенно новое значение, так как в 2007 году я  получил травму на соревнованиях.'  },
    { img: img.section_home_3_3, title: 'Зия Урманова', subtitle: 'фитнес тренер',  text: 'Изначально я начала заниматься фитнесом  после того, как всю жизнь занималась профессиональной атлетикой. Тот факт, что я так люблю спорт, во   многом повлиял на мое решение.'  },
    { img: img.section_home_3_4, title: 'Сергей Исаев', subtitle: 'тренер по кросфиту',  text: 'Сергей помимо кроссфита тренирует  спортсменов-любителей и профессиональных спортсменов-единоборцев с 1995 года. Его набор навыков   распространяется на следующие стили боя: бой ММА, бразильский… '  },
  ]
 
  return (
<>  
{
  coachesItem.map((item, i)=> { 
  
   return (
    <div key={i} className="h-three__item">
    <div className="h-three-i__left"><img src={item.img} alt="фото"/></div>
    <div className="h-three-i__right">
      <NavLink to={`/coaches${link[i]}`} className="h-three-i-r__title">{item.title}</NavLink>
      <div className="h-three-i-r__subtitle">{item.subtitle}</div>
      <NavLink to={`/coaches${link[i]}`}  className="h-three-i-r__text text-body">{item.text}</NavLink>
      <div className="h-three-i-r__socialRow">
        <a href="#/" className="h-three-i-r__socialItem" data-notitle><img src={icon.insta} alt="icon"/></a>
        <a href="#/" className="h-three-i-r__socialItem" data-notitle><img src={icon.telegr}  alt="icon"/></a>
        <a href="#/" className="h-three-i-r__socialItem" data-notitle><img src={icon.vkontacte}  alt="icon"/></a>
        <a href="#/" className="h-three-i-r__socialItem" data-notitle><img src={icon.facebook}  alt="icon"/></a>
      </div>
    </div>
  </div>
 
   
    )})  
}

</>
  )
}


 