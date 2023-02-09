import React, { useState } from "react";
import { IParameter } from "../Types/Types";
import "./Character.css";

interface IProps {
  race: string;
  parameters: IParameter[];
}

/**
 *
 * инфа по выбранному персонажу
 */

function Character(props: IProps) {
  return (
    <section className="character">
      <p>{props.race}</p>
      <div>
        {props.parameters.map((param) => (
          <div key={param.value}>
            <p>{param.name}</p>
            <p>{param.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Character;
