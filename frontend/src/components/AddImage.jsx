import { React, useState, useRef } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import style from "./AddImage.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddImage() {
  const [pic, setPic] = useState("");
  const fileInputRef = useRef([]);
  const navigate = useNavigate();

  const getImageUrl = (pics) => {
    let cookies = document.cookie;
    if (cookies) {
      var token = cookies.split("token=")[1];
    }
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const imageData = new FormData();
      imageData.append("image", pics);
      console.log("Image: ", imageData.get("image"))
      axios
        .post("/api/profile/image", imageData, config)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleImage = (index) => {
    if (fileInputRef.current[index]) {
      fileInputRef.current[index].click();
    }
  }

  const handleFileChange = async (e, index) => {
    const file = e.target.files[0];
    console.log(file)
    if (!file) return;
    getImageUrl(file); 
  };

  return (
    <>
      <ImageList
        sx={{ width: 500, height: 450 }}
        variant="woven"
        cols={3}
        gap={8}
      >
        {itemData.map((item, index) => (
          <form enctype="multipart/form-data" key={index}>
            <ImageListItem >
              <img
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=161&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                className={style.image}
                onClick={()=>handleImage(index)}
                />
              <input
                type="file"
                name="image"
                ref={(el) => (fileInputRef.current[index] = el)}
                style={{ display: "none" }}
                onChange={(e)=>handleFileChange(e, index)}
              />
            </ImageListItem>
          </form>
        ))}
      </ImageList>
    </>
  );
}

const itemData = Array.from({ length: 6 }, (_, index) => ({
  img: "https://t3.ftcdn.net/jpg/04/28/36/88/360_F_428368831_UVan10UgxCCnYgJgFMNoV2xGy7pO8utS.jpg",
  title: "Bed",
}));
