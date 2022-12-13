import React from 'react'
 
import BreadCrumbsNav from '../../components/BreadCrumbsNav/BreadCrumbsNav'
import Form from '../../components/Form/Form'

export default function Contacts() {
  return (
   <>
<BreadCrumbsNav
   prevPage={'контакты'}
   currentPage={'контакты'}
   />

<section className="con-one">
        <div className="container">
          <div className="con-one__row">
            <div className="con-one__title title-h1">наш адрес</div>
            <div className="con-one__line line"></div>
            <div className="con-one__subtitle">присоединяйтесь к лучшему тренажерному залу в нашем городе!</div>
            <div className="con-one__text text-body">127000, г.Москва,Кутузовский пр.,48 4&nbsp;этаж <br/>
              <span> Телефон:</span> (495)123-456-66, +7(911)260-12-36
            </div>
            <div className="con-one__map">
              <iframe title='map' src="https://www.google.com/maps/d/embed?mid=1HJ9RbMGXGTMrlfzmtbRdUWUdUPKy8T2Y&hl=ru&ehbc=2E312F"
                loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="bi-three">
        <div className="container">
          <div className="con-two____row">
            <div className="con-two__title title-h1">звоните нам сегодня</div>
            <div className="con-two__line line"></div>

            <div className="con-two__subtitle">МЫ УБЕЖДЕНЫ, ЧТО ЭТО РЕШЕНИЕ поВЛИЯЕТ НА ВАШУ ЖИЗНЬ ПОЛОЖИТЕЛЬНО.
              ТАК ПОЧЕМУ ЖДЕМ? ЗАПИшитесь в НАШ клуб СЕГОДНЯ </div>
              <Form
        styles={'con-two__form'}
        placeHopderTextArea={'Текст сообщения*'}
        buttonText={'отправить заявку'}
        buttonSendText={'заявка отправлена'}
        />
          
          </div>
        </div>
      </section>
    
    </>
  )
}
