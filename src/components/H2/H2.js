import React from 'react'

export default function H2({Title, TitleStyles, lineStyles }) {
  return (
   <>
    <h2 className={`${TitleStyles} title-h1`}>{Title}</h2>
    <div className={`${lineStyles} line`}></div>
   </>
  )
}
