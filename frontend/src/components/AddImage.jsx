import { React, useState, useRef } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import style from "./AddImage.module.css"

export default function AddImage() {

  const [pic, setPic] = useState("");
  const fileInputRef = useRef(null);


  const getCloudinaryImageUrl = (pics) => {
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "Wemate");
      data.append("cloud_name", "dztdf6qvw");
      fetch("https://api.cloudinary.com/v1_1/dztdf6qvw/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          const uploaded_url = data.url.toString()
          return uploaded_url;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handleFileChange = async () => {
    const file = fileInputRef.current.files[0];
    if (!file) return;
    try {
      const imageUrl = await getCloudinaryImageUrl(file);
      setPic(imageUrl)
      console.log(imageUrl)
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <ImageList
        sx={{ width: 500, height: 450 }}
        variant="woven"
        cols={3}
        gap={8}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=161&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              className={style.image}
              onClick={()=> fileInputRef.current.click()}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

const itemData = Array.from({ length: 6 }, (_, index) => ({
  img: "https://t3.ftcdn.net/jpg/04/28/36/88/360_F_428368831_UVan10UgxCCnYgJgFMNoV2xGy7pO8utS.jpg",
  title: "Bed",
}));
