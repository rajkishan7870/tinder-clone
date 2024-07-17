import React from "react";
import Header from "../../components/header";
import About from "../../components/HomepageComponent/About";
import style from "./homePage.module.css";
import Testimonial from "../../components/HomepageComponent/Testimonial";
import Features from "../../components/HomepageComponent/Features";

export default function HomePage() {
  return (
    <div>
      <div className={style.parent}>
        <div className={style.header}>
          <Header />
        </div>

        <div className={style.mainPage}>
          <Features/>
          <Testimonial />
          <About />
        </div>
      </div>
    </div>
  );
}
