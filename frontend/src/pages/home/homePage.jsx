import {React, useEffect} from "react";
import Header from "../../components/header";
import About from "../../components/HomepageComponent/About";
import style from "./homePage.module.css";
import Testimonial from "../../components/HomepageComponent/Testimonial";
import Features from "../../components/HomepageComponent/Features";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export default function HomePage() {

  const navigate = useNavigate()
  let cookie = document.cookie;
  const token = cookie.split("token=")[1];

  useEffect(()=>{
    if(cookie) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      axios
        .get("/api/suggestion", config)
        .then((res) => {
          console.log(res)
          if (res.data.message === "Navigate to Profile"){
            navigate("/profile");
          }
          const gender = res.data.gender;
          if (gender) {
            navigate("/suggestion");
          }
        })
        .catch((err) => {
          console.log(err)
          if (err.response.data.message === "Invalid or expired token"){
            navigate("/login")
          }
        });

      axios
        .get("/api/profile", config)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          const errorMessage = err.response.data.message;
          if (errorMessage === "Invalid or expired token") {
            navigate("/login");
          } else {
            navigate("/profile");
          }
        });
    }
  }, [])

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
