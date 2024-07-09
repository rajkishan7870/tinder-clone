import React from "react";
import Inputfield from "./Inputfield";
import SaveButton from "./SaveButton";

export default function Interest() {
    function handleSubmit(e) {
        e.preventDefault()
    }
  return (
    <div>
      <form>
        <Inputfield
          title="Interested In"
          placeholder="In which gender are you interested"
          name="interested_in"
          onChange={handleSubmit}
        />
        <SaveButton onClick={handleSubmit} />
      </form>
    </div>
  );
}
