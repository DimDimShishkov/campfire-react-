import React from "react";
import "./Race.css";
import raseArr from "../mockData/campfire.json";
import { RaceItem } from "./RaceItem";
/**
 *
 * этап выбора расы
 */
export function Race() {
  return (
    <section className="race">
      <div className="race__header">
        <h2 className="race__heading">Выбор расы</h2>
        <p className="race__description">
          Выберите любую из имеющихся рас. Не переживайте выбрать «не то», все
          расы имеют свои преимущества при использовании с разными классами.
        </p>
        <p className="race__description">
          Расы из Книги игрока недоступны, вместо этого имеются только
          перечисленные опции. Расы в мире Костра свои, и хотя они мало помнят о
          своём мире, они различают друг друга и понимают свои различия. После
          выбора расы на любом этапе создания персонажа подберите ему имя,
          примеры имён указаны в описании рас.
        </p>
        <p className="race__description race__description_additional">
          Все описанные расы Среднего размера, имеют скорость 30 футов и знают
          только один язык: Общий.
        </p>
      </div>
      <div className="race__select">
        {raseArr.race.map((race) => (
          <RaceItem props={race} key={race.value} />
        ))}
      </div>
    </section>
  );
}
