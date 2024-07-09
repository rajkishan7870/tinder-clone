import React from "react";
import Inputfield from "./Inputfield";
import SaveButton from "./SaveButton";

export default function Location() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form>
        <Inputfield
          title="Location"
          placeholder="Enter your location"
          name="location"
          onChange={handleSubmit}
        />
        <SaveButton onClick={handleSubmit} />
      </form>
    </div>
  );
}
