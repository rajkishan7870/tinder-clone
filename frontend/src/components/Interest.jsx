import{ React, useState} from "react";
import Inputfield from "./Inputfield";
import SaveButton from "./SaveButton";
import { useRecoilState } from "recoil";
import { profile_data } from "../Recoil/profile";

export default function Interest() {
  const [interest, setInterest] = useState({
    interested_in: "",
  })
  const [clickCount, setClickCount] = useState(0)
  const [interestrecoil, setInterestrecoil] = useRecoilState(profile_data)
    function handleSubmit(e) {
      e.preventDefault()
      setInterestrecoil({...interestrecoil, ...interest})
      setClickCount(1)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Inputfield
          title="Interested In"
          placeholder="In which gender are you interested"
          name="interest_in"
          onChange={(e) => {
            setInterest({...interest, "interested_in": e.target.value});
          }}
        />
        <SaveButton type="submit" onClick={handleSubmit} clickCount = {clickCount} />
      </form>
    </div>
  );
}
