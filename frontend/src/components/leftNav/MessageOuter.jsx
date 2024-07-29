import { React, useState, useEffect } from 'react'
import style from "./MatchingReq.module.css";
import axios from 'axios'

export default function MessageOuter() {
    const [outermessage, setOutermessage] = useState()
    
    const cookie = document.cookie
    const token = cookie.split("token=")[1]
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    useEffect(() => {
        axios
          .get("/api/suggestion/message", config)
          .then((res)=>{
            console.log(res)
            setOutermessage(res.data)
          }).catch(err=>console.log(err))
    }, [])
  return (
    <div className={style.parentDiv}>
      {outermessage &&
        outermessage.map((ele, index) => {
          return (
            <div className={style.parenteleDiv} key={index}>
                  <div className={style.eleDiv1}>
                      <img className={style.image} src="https://photosnow.org/wp-content/uploads/2024/04/beautiful-girl-photo_13.jpg" alt="profile"/>
                      <div>{ele.createdBy.name}</div>
                  </div>
            </div>
          );
        })}
    </div>
  )
}
