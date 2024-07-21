import {React, useState} from "react";
import Inputfield from "./Inputfield";
import SaveButton from "./SaveButton";
import { useRecoilState } from "recoil";
import { profile_data } from "../Recoil/profile";

export default function Relegion() {
  const [relegion, setRelegion] = useState({
    relegion: "",
    zodiac: "",
  })
  const[relegionrecoil, setRelegionrecoil] = useRecoilState(profile_data)
  function handleSubmit(e) {
    e.preventDefault();
    setRelegionrecoil({...relegionrecoil, ...relegion})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Inputfield
          title="Relegion"
          placeholder="Enter your Relegion"
          name="relegion"
          onChange={(e) => {
            setRelegion({...relegion, "relegion": e.target.value})
          }}
        />
        <Inputfield
          title="Zodiac"
          placeholder="Enter your zodiac sign"
          name="zodiac"
          onChange={(e) => {
            setRelegion({...relegion, "zodiac": e.target.value})
          }}
        />
        <SaveButton type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}
