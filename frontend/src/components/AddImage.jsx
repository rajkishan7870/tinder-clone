import { React, useState, useRef, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import style from "./AddImage.module.css";
import axios from "axios";
import { useRecoilState } from "recoil";
import { profile_data } from "../Recoil/profile";
import SaveButton from "./SaveButton";

export default function AddImage() {
  const [addimagerecoil, setAddimagerecoil] = useRecoilState(profile_data)
  const [clickCount, setClickCount] = useState(0)
  const [imageUrl, setImageUrl] = useState({
    image: [],
  })
  const [pic, setPic] = useState([
    {
      default:
        "https://t3.ftcdn.net/jpg/04/28/36/88/360_F_428368831_UVan10UgxCCnYgJgFMNoV2xGy7pO8utS.jpg",
      url: "",
    },
    {
      default:
        "https://t3.ftcdn.net/jpg/04/28/36/88/360_F_428368831_UVan10UgxCCnYgJgFMNoV2xGy7pO8utS.jpg",
      url: "",
    },
    {
      default:
        "https://t3.ftcdn.net/jpg/04/28/36/88/360_F_428368831_UVan10UgxCCnYgJgFMNoV2xGy7pO8utS.jpg",
      url: "",
    },
    {
      default:
        "https://t3.ftcdn.net/jpg/04/28/36/88/360_F_428368831_UVan10UgxCCnYgJgFMNoV2xGy7pO8utS.jpg",
      url: "",
    },
    {
      default:
        "https://t3.ftcdn.net/jpg/04/28/36/88/360_F_428368831_UVan10UgxCCnYgJgFMNoV2xGy7pO8utS.jpg",
      url: "",
    },
    {
      default:
        "https://t3.ftcdn.net/jpg/04/28/36/88/360_F_428368831_UVan10UgxCCnYgJgFMNoV2xGy7pO8utS.jpg",
      url: "",
    },
  ]);
  const fileInputRef = useRef([]);

  useEffect(()=>{
    setAddimagerecoil({...addimagerecoil, ...imageUrl})
  }, [imageUrl])


  const handleSubmit = (e)=>{
    e.preventDefault()
    const filteredPicArray = pic.filter(item => item.url !== "");
    const updatedImageArray = filteredPicArray.map(item => item.url);
    setImageUrl({image: updatedImageArray});
    setAddimagerecoil(prevState => ({
      ...prevState,
      ...{ image: updatedImageArray },
    }))
    console.log(addimagerecoil)
    setClickCount(1)
  }

  const removeImageUrl = (index) => {
    const newPicArray = [...pic];
    newPicArray[index].url = "";
    setPic(newPicArray);
  };

  const getImageUrl = (pics, index) => {
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
      axios
        .post("/api/profile/image", imageData, config)
        .then((res) => {
          console.log(res);
          const imageUrl = res.data.url;
          const newPicArray = [...pic];
          newPicArray[index].url = imageUrl;
          setPic(newPicArray);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleImage = (index) => {
    console.log(index);
    if (fileInputRef.current[index]) {
      fileInputRef.current[index].click();
    }
  };

  const handleFileChange = async (e, index) => {
    const file = e.target.files[0];
    if (!file) return;
    getImageUrl(file, index);
  };

  return (
    <>
      <ImageList
        sx={{ width: 500, height: 450 }}
        variant="woven"
        cols={3}
        gap={8}
      >
        {pic.map((item, index) => (
          <form enctype="multipart/form-data" key={index}>
            <ImageListItem>
              <img
                src={
                  item.url
                    ? `${item.url}?w=161&fit=crop&auto=format`
                    : `${item.default}?w=161&fit=crop&auto=format`
                }
                alt={item.default}
                loading="lazy"
                className={style.image}
                onClick={() => handleImage(index)}
              />
              {item.url && (
                <button
                  onClick={() => removeImageUrl(index)}
                  style={{ position: "absolute", top: 0, right: 0 , cursor: "pointer"}}
                >
                  ❌
                </button>
              )}
              <input
                type="file"
                name="image"
                ref={(el) => (fileInputRef.current[index] = el)}
                style={{ display: "none" }}
                onChange={(e) => handleFileChange(e, index)}
              />
            </ImageListItem>
          </form>
        ))}
      </ImageList>
      <SaveButton onClick={handleSubmit} clickCount= {clickCount} />
    </>
  );
}
