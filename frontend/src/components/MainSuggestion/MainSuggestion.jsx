import {React, useEffect} from 'react'
import style from "./MainSuggestion.module.css"
import SuggestionCard from './SuggestionCard'
import { Card } from '@mui/material'
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { GiSelfLove } from "react-icons/gi";
import axios from "axios"

export default function MainSuggestion() {

  const cookies = document.cookie
  const token = cookies.split("token=")[1];
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(()=>{
    axios
      .get("/api/suggestion/recommendation", config)
      .then((res)=>{
        console.log(res)
      }).catch(err=>console.log(err))
  },[])

  const handleDislike = () => {
    const toDisLikeData = {
      disliked_to: "sona@gmail.com",
    };

    axios
      .post("/api/interaction/dislike", toDisLikeData, config)
      .then((response) => {
        console.log(response.status);
      });
  }

  const handleLike = () => {
    const toLikeData = {
      liked_to: "sona@gmail.com",
    };

    axios
      .post("/api/interaction/like", toLikeData, config)
      .then((response) => {
        console.log(response.status);
        // profile data coming into response from backend 
      });
  }

  return (
    <div className={style.parentDiv}>
      <Card sx={{
        width: "30%",
        height: "70%",
        backgroundColor: "grey",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        position: "relative",
      }}>
        <SuggestionCard />
        <div className={style.cardFooter}>
        <div>Kishan Kumar</div>
          <CardActions sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem"
        }}>
            <Button size='medium' sx={{
              borderWidth: "1px",
              borderRadius: "50%",
              backgroundColor: "black"
          }} onClick={handleDislike}>❌</Button>
            <Button size='large' sx={{
              borderWidth: "1px",
              borderRadius: "50%",
              backgroundColor: "black"
            }} onClick={handleLike}> <GiSelfLove color='red'/></Button>
          </CardActions>
          </div> 
      </Card>
    </div>
  )
}
