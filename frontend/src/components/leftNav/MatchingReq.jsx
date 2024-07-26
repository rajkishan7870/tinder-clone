import { React, useState, useEffect } from "react";
import style from "./MatchingReq.module.css";
import { GoCheck } from "react-icons/go";

export default function MatchingReq(props) {
  const [matchingReq, setMatchingReq] = useState();
  const matchingReqData = props.matchingReqData;
  console.log(matchingReqData);

  useEffect(() => {
    setMatchingReq(matchingReqData);
  }, []);

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
                <div className={style.reject}>❌</div>
                <div className={style.accept}>
                  <GoCheck />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
