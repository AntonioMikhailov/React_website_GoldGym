import React from 'react'
import H2 from '../../../../components/H2/H2'
import OurPrograms from '../../components/OurPrograms/OurPrograms'

export default function S2() {
  return (
    <section className="h-two">
      <H2
    Title={'наши программы'}
    TitleStyles={''}
    lineStyle={''}
    />
  
    <div className="container">
      <div className="h-two__row">
        <OurPrograms/>
        
      </div>
    </div>
  </section>
  )
}
