import React from "react";
import style from "./Features.module.css";
import ChatAnimation from "./ChatAnimation";
import MeetAnimation from "./MeetAnimation";
import DatingAnimation from "./DatingAnimation";

export default function Features() {
  return (
    <div className={style.parentDiv}>
      <h2>Features and Benefits</h2>
      <div className={style.contentParent}>
        <div className={style.content}>
          <ChatAnimation />
          <div>Meet new friends who share your passions and hobbies.</div>
        </div>
        <div className={style.content}>
          <div>Meet new friends who share your passions and hobbies.</div>
          <MeetAnimation />
        </div>
        <div>
          <DatingAnimation />
          <div>Meet new friends who share your passions and hobbies.</div>
        </div>
      </div>
    </div>
  );
}
