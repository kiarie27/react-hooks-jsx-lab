import React from "react";
import { image, about } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <img src={image} alt="I made this" />
      <p>{about}</p>
    </div>
  );
}

export default About;

