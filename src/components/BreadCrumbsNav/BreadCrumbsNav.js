import React from 'react'
import { NavLink } from 'react-router-dom'

export default function BreadCrumbsNav({currentPage, prevPage }) {

  return (
    <section className="nav-sec">
    <div className="container">
      <div className="nav-sec__row">
        <div className="nav-sec__left"> {prevPage} |&nbsp;</div>
        <div className="nav-sec__right">
          <div className="nav-sec__r__first"> <NavLink to="/">главная&nbsp;/&nbsp;</NavLink></div>
          <div className="nav-sec__r__second">{currentPage}</div>
        </div>
      </div>
    </div>
  </section>
  )
}
