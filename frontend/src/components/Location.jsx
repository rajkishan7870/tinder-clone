import {React, useState} from "react";
import Inputfield from "./Inputfield";
import SaveButton from "./SaveButton";
import { useRecoilState } from "recoil";
import { profile_data } from "../Recoil/profile";

export default function Location() {
  const [location, setLocation] = useState({
    location: "",
  })
  const [clickCount, setClickCount] = useState(0)
  const [locationrecoil, setLocationrecoil] = useRecoilState(profile_data)
  function handleSubmit(e) {
    e.preventDefault();
    setLocationrecoil({...locationrecoil, ...location})
    setClickCount(1)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Inputfield
          title="Location"
          placeholder="Enter your location"
          name="location"
          onChange={(e) => {
            setLocation({...location, "location": e.target.value})
          }}
        />
        <SaveButton type="submit" onClick={handleSubmit} clickCount = {clickCount} />
      </form>
    </div>
  );
}
