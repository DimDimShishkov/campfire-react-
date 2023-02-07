import React, { useState } from "react";
import "./Character.css";

interface IProps {
  race: string;
}

/**
 *
 * инфа по выбранному персонажу
 */

function Character(props: IProps) {
  return (
    <section className="character">
      <p>{props.race}</p>
    </section>
  );
}

export default Character;
