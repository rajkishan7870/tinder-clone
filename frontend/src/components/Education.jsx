import React from "react";
import Inputfield from "./Inputfield";
import SaveButton from "./SaveButton";

export default function Education() {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form>
        <Inputfield
          title="College"
          placeholder="Enter your College here"
          name="college"
          onChange={handleSubmit}
        />
        <SaveButton onClick={handleSubmit} />
      </form>
    </div>
  );
}
