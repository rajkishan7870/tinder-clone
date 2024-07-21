import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import style from "./SuggestionCard.module.css";

export default function SuggestionCard() {
  const suggestionData = [
    {
      img: [
        "https://photosnow.org/wp-content/uploads/2024/04/beautiful-girl-photo_13.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz9WdaJj2q1FrslpmMiW6zC2PMT89rz9bsMEFJmR-WrDSYmt2_WIEoO4dHClEqGLVUICw&usqp=CAU",
      ],
      name: "beautiful-girl",
    },
    {
      img: "",
      name: "beautiful-girl",
    },
    {
      img: "",
      name: "beautiful-girl",
    },
    {
      img: "",
      name: "beautiful-girl",
    }
  ];
  const totalSlides =
    suggestionData.length > 0 ? suggestionData[0].img.length : 0;
  return (
    <CarouselProvider
      naturalSlideWidth={200}
      naturalSlideHeight={225}
      totalSlides={totalSlides}
    >
      <Slider>
        {suggestionData[0].img.map((imageUrl, index) => (
          <Slide index={index}>
            <img
              className={style.image}
              src={imageUrl}
              alt={`suggested-image-${index}`}
            />
          </Slide>
        ))}
      </Slider>
      <ButtonBack className={style.leftButton}>
        <FaAngleLeft />
      </ButtonBack>
      <ButtonNext className={style.rightButton}>
        <FaAngleRight />
      </ButtonNext>
    </CarouselProvider>
  );
}
