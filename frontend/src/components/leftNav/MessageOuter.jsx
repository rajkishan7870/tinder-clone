import { React, useState, useEffect } from 'react'
import style from "./MatchingReq.module.css";

export default function MessageOuter() {
    const [matchingAccept, setMatchingAccept] = useState()
    const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    useEffect(() => {
        setMatchingAccept(arr)
    })
  return (
    <div className={style.parentDiv}>
      {matchingAccept &&
        matchingAccept.map((ele, index) => {
          return (
            <div className={style.parenteleDiv} key={index}>
                  <div className={style.eleDiv1}>
                      <img className={style.image} src="https://photosnow.org/wp-content/uploads/2024/04/beautiful-girl-photo_13.jpg" alt="profile"/>
                      <div>Kishan Kumar</div>
                  </div>
            </div>
          );
        })}
    </div>
  )
}
