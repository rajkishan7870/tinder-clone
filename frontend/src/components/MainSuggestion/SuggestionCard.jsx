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

export default function SuggestionCard(props) {
  const totalSlides =
    props.image?.length > 0 ? props.image?.length : 0;


  
  return (
    <CarouselProvider
      naturalSlideWidth={200}
      naturalSlideHeight={225}
      totalSlides={totalSlides}
    >
      <Slider>
        {props?.image && props?.image.map((imageUrl, index) => (
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
