import React from "react";
import MenWomanAnimation from "../MenWomanAnimation";
import style from "./About.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");  
  };
  return (
    <div id="about" className={style.parentDiv}>
      <div className={style.animation}>
        <MenWomanAnimation />
      </div>
      <div className={style.content}>
        <h2>About Us</h2>
        <div>
          Weemate created by <span className={style.kishan}>Kishan Kumar</span>{" "}
          who wanted to make it easier for other students to find like-minded
          friends on campus. Our team is passionate about helping students build
          meaningful connections and reach their full potential. We use advanced
          algorithms to match you with other students who share your interests,
          goals, and values. Join us today and discover your perfect match on
          campus!
        </div>
        <Button
          onClick={handleSignup}
          sx={{
            textTransform: "none",
            backgroundColor: "rgb(228, 234, 238)",
          }}
        >
          SignUp
        </Button>
      </div>
    </div>
  );
}
