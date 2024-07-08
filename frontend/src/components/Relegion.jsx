import React from "react";
import Inputfield from "./Inputfield";
import SaveButton from "./SaveButton";

export default function Relegion() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form>
        <Inputfield
          title="Relegion"
          placeholder="Enter your Relegion"
          name="relegion"
          onChange={handleSubmit}
        />
        <Inputfield
          title="Zodiac"
          placeholder="Enter your zodiac sign"
          name="zodiac"
          onChange={handleSubmit}
        />
        <SaveButton onClick={handleSubmit} />
      </form>
    </div>
  );
}
