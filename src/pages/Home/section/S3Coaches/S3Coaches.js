import React from 'react'
import CoachesComponent from '../../../../components/CoachesComponent/CoachesComponent'
import H2 from '../../../../components/H2/H2'
export default function S3Coaches() {
  return (
    <section className="h-three">
        <div className="container">
        <H2
 Title={'тренеры'}
 TitleStyles={''}
 lineStyles={''}
 />
  <div className="h-three__row">
<CoachesComponent
link={['', '', '', '', ]}
/>
          </div>
        </div>
      </section>
  )
}
