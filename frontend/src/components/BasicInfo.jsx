import { React, useState } from "react";
import Inputfield from "./Inputfield";
import SaveButton from "./SaveButton";
import { useRecoilState } from "recoil";
import { profile_data } from "../Recoil/profile";

export default function BasicInfo() {
  const [basicinfo, setBasicinfo] = useState({
    bio: "",
    language: "",
    gender: "",
    height: "",
  });
  const [basicinforecoil, setBasicinforecoil] = useRecoilState(profile_data)
  const [clickCount, setClickCount] = useState(0)

  function handleSubmit(e) {
    e.preventDefault();
    setBasicinforecoil({...basicinforecoil, ...basicinfo})
    setClickCount(1)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Inputfield
          title="Bio"
          placeholder="Write something about yourself"
          name="bio"
          onChange={(e) => {
            setBasicinfo({ ...basicinfo, "bio": e.target.value });
          }}
        />
        <Inputfield
          title="Language"
          placeholder="Write your proficient language"
          name="language"
          onChange={(e) => {
            setBasicinfo({ ...basicinfo, "language": e.target.value });
          }}
        />
        <Inputfield
          title="Gender"
          placeholder="Enter your gender"
          name="gender"
          onChange={(e) => {
            setBasicinfo({ ...basicinfo, "gender": e.target.value });
          }}
        />
        <Inputfield
          title="Height"
          placeholder="Enter your height"
          name="height"
          onChange={(e) => {
            setBasicinfo({ ...basicinfo, "height": e.target.value });
          }}
        />

        <SaveButton type= "submit" onClick={handleSubmit} clickCount = {clickCount} />
      </form>
    </div>
  );
}
