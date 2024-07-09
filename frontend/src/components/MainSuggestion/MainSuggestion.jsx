import React from 'react'
import style from "./MainSuggestion.module.css"
import SuggestionCard from './SuggestionCard'

export default function MainSuggestion() {
  return (
      <div className={style.parentDiv}>
          <SuggestionCard/>
    </div>
  )
}
