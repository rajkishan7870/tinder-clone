import { React, useState, useEffect } from "react";
import style from "./MainSuggestion.module.css";
import SuggestionCard from "./SuggestionCard";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { GiSelfLove } from "react-icons/gi";
import axios from "axios";

export default function MainSuggestion() {
  const [recommendedProfile, setRecommendedProfile] = useState([]);

  const cookies = document.cookie;
  const token = cookies.split("token=")[1];
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios
      .get("/api/suggestion/recommendation", config)
      .then((res) => {
        console.log(res);
        if (Array.isArray(res.data) && res.data.length > 0) {
          setRecommendedProfile([...res.data]);
        } else {
          console.error("Received data is not an array or is empty");
        }
      })
      .catch((err) => console.log(err));
    console.log(recommendedProfile[0]?.image);
  }, []);

  const handleDislike = () => {
    const toDisLikeData = {
      disliked_to: recommendedProfile[0]?.createdBy.email,
    };

    const updatedProfiles = recommendedProfile.filter((_, index) => index !== 0);
    setRecommendedProfile(updatedProfiles);

    axios
      .post("/api/interaction/dislike", toDisLikeData, config)
      .then((response) => {
        console.log(response.status);
      });
  };

  const handleLike = () => {
    const toLikeData = {
      liked_to: recommendedProfile[0]?.createdBy.email,
    };

    const updatedProfiles = recommendedProfile.filter((_, index) => index !== 0);
    setRecommendedProfile(updatedProfiles);

    axios.post("/api/interaction/like", toLikeData, config).then((response) => {
      console.log(response.status);
      // profile data coming into response from backend
    });
  };

  return (
    <div className={style.parentDiv}>
      <Card
        sx={{
          width: "30%",
          height: "70%",
          backgroundColor: "grey",
          display: "flex",
          flexDirection: "column",
          borderRadius: "10px",
          position: "relative",
        }}
      >
        <SuggestionCard image={recommendedProfile[0]?.image} />
        <div className={style.cardFooter}>
          <div>{recommendedProfile[0]?.createdBy.name}</div>
          <CardActions
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <Button
              size="medium"
              sx={{
                borderWidth: "1px",
                borderRadius: "50%",
                backgroundColor: "black",
              }}
              onClick={handleDislike}
            >
              ❌
            </Button>
            <Button
              size="large"
              sx={{
                borderWidth: "1px",
                borderRadius: "50%",
                backgroundColor: "black",
              }}
              onClick={handleLike}
            >
              {" "}
              <GiSelfLove color="red" />
            </Button>
          </CardActions>
        </div>
      </Card>
    </div>
  );
}
