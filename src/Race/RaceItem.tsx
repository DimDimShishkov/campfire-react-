import React, { useRef } from "react";
import { IRaceAbilities, IRace } from "../Types/Types";

interface IRaceItem {
  race: IRace;
  setRace: (v: string) => void;
  active: boolean;
  onToggle: () => void;
}
/**
 *
 * ячейка выбора расы
 */
export function RaceItem({ race, setRace, active, onToggle }: IRaceItem) {
  const contentEl = useRef<HTMLDivElement>(null);

  const openItemHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setRace(race.value);
  };

  return (
    <div className="race-item">
      <div className="race-item__heading" onClick={onToggle}>
        <span
          className={`race-item__span ${
            active ? "race-item__span_active" : ""
          } `}
        />
        <h3 className="race-item__title">{race.name}</h3>
        <button className="race-item__submit-button" onClick={openItemHandler}>
          Выбрать
        </button>
      </div>
      <div
        className="race-item__body"
        style={
          active
            ? { height: contentEl.current?.scrollHeight }
            : { height: "0px" }
        }
        ref={contentEl}
      >
        <p className="race-item__item">Описание</p>
        <p className="race-item__item">{race.description}</p>
        <p className="race-item__item">Язык</p>
        <p className="race-item__item">{race.namesExample}</p>
        <p className="race-item__item">Бонус</p>
        <p className="race-item__item">{race.bonus}</p>
        <p className="race-item__item">Совет</p>
        <p className="race-item__item">{race.advice}</p>
        <p className="race-item__item">Способности</p>
        <div className="race-item__abilities">
          {race.abilities.map((item: IRaceAbilities) => (
            <div className="race-item__items" key={item.name}>
              <p className="race-item__item">{item.name}</p>
              <p className="race-item__item">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
