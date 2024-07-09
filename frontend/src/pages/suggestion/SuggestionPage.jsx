import React from 'react'
import style from "./SuggestionPage.module.css"
import LeftNav from '../../components/leftNav/LeftNav'
import MainSuggestion from '../../components/MainSuggestion/MainSuggestion'

export default function SuggestionPage() {
  return (
      <div className={style.parentDiv}>
          <LeftNav /> 
        <MainSuggestion/>  
    </div>
  )
}
