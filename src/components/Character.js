import React from "react";

const Character = props => {
  return <div>
  <li>NAME: {props.character.name} <br/>
  YEAR OF BIRTH: {props.character.birth_year} <br/>
  EYE COLOR: {props.character.eye_color} </li>
    </div>
  ;
};

export default Character;
