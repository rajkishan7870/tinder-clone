import React from "react";
import style from "./Testimonial.module.css";

export default function Testimonial() {
  return (
    <div className={style.parentDiv}>
      <h2>Testimonials</h2>
      <div className={style.content}>
        <div className={style.line1}>
          <div className={style.content1}>
            <div>
              <img
                className={style.image}
                src="https://photosnow.org/wp-content/uploads/2024/04/beautiful-girl-photo_13.jpg"
                alt="Sarah Junior"
              />
            </div>
            <div>
              "Weemate helped me find my best friend on campus! We have the same
              major and love to study together." - Sarah Junior
            </div>
          </div>
          <div className={style.content1}>
            <div>
              <img
                className={style.image}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz9WdaJj2q1FrslpmMiW6zC2PMT89rz9bsMEFJmR-WrDSYmt2_WIEoO4dHClEqGLVUICw&usqp=CAU"
                alt="leyla Junior"
              />
            </div>
            <div>
              "Weemate helped me find my best friend on campus! We have the same
              major and love to study together." - leyla Junior
            </div>
          </div>
        </div>
        <div className={style.line2}>
          <div className={style.content1}>
            <div>
              <img
                className={style.image}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSilRnw-RQ58yoXIDShTOuD4KzsEsdWdNB33w&usqp=CAU"
                alt="Michael Sophomore"
              />
            </div>
            <div>
            "I joined a study group through Weemate and ended up acing my exam. I couldn't have done it without them!" - Michael Sophomore
            </div>
          </div>
          <div className={style.content1}>
            <div>
              <img
                className={style.image}
                src="https://photosnow.org/wp-content/uploads/2024/04/girl-photo_11.jpg"
                alt="Michaeli Sophomore"
              />
            </div>
            <div>
            "I joined a study group through Weemate and ended up acing my exam. I couldn't have done it without them!" - Michaeli Sophomore
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
