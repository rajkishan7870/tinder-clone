import { React, useState, useEffect } from "react";
import style from "./MatchingReq.module.css";
import { GoCheck } from "react-icons/go";
import axios from 'axios'

export default function MatchingReq() {
  const [matchingReq, setMatchingReq] = useState();
  const [trigger, setTrigger] = useState(false);
  
  const cookie = document.cookie
  const token = cookie.split("token=")[1]

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  useEffect(() => {
    axios
      .get("/api/interaction/matchreq", config)
      .then((res) => {
        const matchingReqData = res.data;
        console.log(matchingReqData)
        setMatchingReq(matchingReqData);    
      })
      .catch((err) => console.log(err));
  }, [trigger]);

  const handleAccept = (profile) =>{
    const data = {
      _id: profile._id,
      email: profile.createdBy.email
    }
    axios
      .post("/api/interaction/accept", data, config)
      .then((res)=>{
        if (res.data){
          console.log(res)
          setTrigger(!trigger);
        } 
      })
      .catch(err=>console.log(err))
  }

  const handleReject = (profile) =>{
    const data = {
      _id: profile._id,
      email: profile.createdBy.email
    }
    axios
      .post("/api/interaction/reject", data, config)
      .then((res)=>{
        if (res.data){
          console.log(res)
          setTrigger(!trigger);
        } 
      })
      .catch(err=>console.log(err))
  }

  return (
    <div className={style.parentDiv}>
      {matchingReq &&
        matchingReq.map((ele, index) => {
          return (
            <div className={style.parenteleDiv} key={index}>
              <div className={style.eleDiv1}>
                <img
                  className={style.image}
                  src="https://photosnow.org/wp-content/uploads/2024/04/beautiful-girl-photo_13.jpg"
                  alt="profile"
                />
                <div>{ele.createdBy.name}</div>
              </div>
              <div className={style.eleDiv2}>
                <div className={style.reject} onClick={()=>handleReject(ele)}>❌</div>
                <div className={style.accept} onClick={()=>handleAccept(ele)}>
                  <GoCheck />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
