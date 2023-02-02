import React from "react";
import { IRaceAbilities, IRace } from "../Types/Types";
/**
 *
 * ячейка выбора расы
 */
export function RaceItem({ props }: { props: IRace }) {
  return (
    <div className="race-item">
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>{props.namesExample}</p>
      <h4>{props.bonus}</h4>
      <p>{props.advice}</p>
      {props.abilities.map((item: IRaceAbilities) => (
        <div key={item.name}>
          <p>{item.name}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
