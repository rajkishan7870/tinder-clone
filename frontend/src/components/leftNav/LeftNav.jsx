import React from 'react'
import style from "./LeftNav.module.css"
import LeftNavHeader from './leftNavHeader'
import MultipleTab from './MultipleTab'

export default function LeftNav() {
  return (
    
      <div className={style.parentDiv}>
        <LeftNavHeader />
        <MultipleTab/>
      </div>
    
  )
}
