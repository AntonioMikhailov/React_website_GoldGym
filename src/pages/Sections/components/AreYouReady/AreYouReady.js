import React from 'react'


export default function AreYouReady({image, title, text}) {
  return (
    <section className="sec-two">
    <div className="container">
      <div className="sec-two__row">
        <div className="sec-two__image"><img src={image} alt="фото"/></div>
        <div className="sec-two__textRow">
          <div className="sec-two-textRow__title title-h1">{title}</div>
          <div className="sec-two-textRow__text ">{text}</div>
          <button className="sec-two-textRow__button btn-red">подписаться</button>
        </div>
      </div>
    </div>
  </section>
  )
}
