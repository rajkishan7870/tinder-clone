import {React, useState} from "react";
import Inputfield from "./Inputfield";
import SaveButton from "./SaveButton";
import { useRecoilState } from "recoil";
import { profile_data } from "../Recoil/profile";

export default function Education() {

  const [education, setEducation] = useState({
    college: "",
  })
  const [clickCount, setClickCount] = useState(0)
  const [educationrecoil, setEducationrecoil] = useRecoilState(profile_data)

  function handleSubmit(e) {
    e.preventDefault();
    setEducationrecoil({ ...educationrecoil, ...education })
    setClickCount(1)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Inputfield
          title="College"
          placeholder="Enter your College here"
          name="college"
          onChange={(e) => {
            setEducation({ ...education, "college": e.target.value });
          }}
        />
        <SaveButton type="submit" onClick={handleSubmit} clickCount= {clickCount} />
      </form>
    </div>
  );
}
