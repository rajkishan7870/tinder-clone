import React from "react";
import Inputfield from "./Inputfield";
import SaveButton from "./SaveButton";

export default function BasicInfo() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form>
        <Inputfield
          title="Bio"
          placeholder="Write something about yourself"
          name="bio"
          onChange={handleSubmit}
        />
        <Inputfield
          title="Gender"
          placeholder="Enter your gender"
          name="gender"
          onChange={handleSubmit}
        />
        <Inputfield
          title="Height"
          placeholder="Enter your height"
          name="height"
          onChange={handleSubmit}
        />
        <SaveButton onClick={handleSubmit} />
      </form>
    </div>
  );
}
