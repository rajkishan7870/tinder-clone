import React from 'react'
import style from "./MainSuggestion.module.css"
import SuggestionCard from './SuggestionCard'
import { Card } from '@mui/material'
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { GiSelfLove } from "react-icons/gi";

export default function MainSuggestion() {
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
          }}>❌</Button>
            <Button size='large' sx={{
              borderWidth: "1px",
              borderRadius: "50%",
              backgroundColor: "black"
            }}> <GiSelfLove color='red'/></Button>
          </CardActions>
          </div> 
      </Card>
    </div>
  )
}
