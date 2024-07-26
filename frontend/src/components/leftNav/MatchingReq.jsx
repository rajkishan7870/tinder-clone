import { React, useState, useEffect } from "react";
import style from "./MatchingReq.module.css";
import { GoCheck } from "react-icons/go";

export default function MatchingReq() {
  const [matchingReq, setMatchingReq] = useState();

  const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  useEffect(() => {
    setMatchingReq(arr);
  }, [arr]);

  return (
    <div className={style.parentDiv}>
      {matchingReq &&
        matchingReq.map((ele, index) => {
          return (
            <div className={style.parenteleDiv} key={index}>
                  <div className={style.eleDiv1}>
                      <img className={style.image} src="https://photosnow.org/wp-content/uploads/2024/04/beautiful-girl-photo_13.jpg" alt="profile"/>
                      <div>Kishan Kumar</div>
                  </div>
                  <div className={style.eleDiv2}>
                      <div className={style.reject}>❌</div>
                      <div className={style.accept}><GoCheck /></div>
                  </div>
            </div>
          );
        })}
    </div>
  );
}
