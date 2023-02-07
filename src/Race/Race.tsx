import { useState } from "react";
import "./Race.css";
import raseArr from "../mockData/campfire.json";
import { RaceItem } from "./RaceItem";

interface IRaceProps {
  setRace(v: string): void;
}
/**
 *
 * этап выбора расы
 */

export const Race: React.FC<IRaceProps> = (props) => {
  const [clicked, setClicked] = useState<number>(-1);

  const handleToggle = (index: number) => {
    if (clicked === index) {
      return setClicked(-1);
    }
    setClicked(index);
  };

  return (
    <section className="race">
      <h2 className="race__heading">Выбор расы</h2>
      <p className="race__description">Выберите любую из имеющихся рас.</p>
      <p className="race__description">
        Не переживайте выбрать «не то», все расы имеют свои преимущества при
        использовании с разными классами.
      </p>
      <p className="race__description">
        Расы из Книги игрока недоступны, вместо этого имеются только
        перечисленные опции. Расы в мире Костра свои, и хотя они мало помнят о
        своём мире, они различают друг друга и понимают свои различия. После
        выбора расы на любом этапе создания персонажа подберите ему имя, примеры
        имён указаны в описании рас.
      </p>
      <p className="race__description race__description_additional">
        Все описанные расы <span>среднего размера</span>, имеют скорость{" "}
        <span>30 футов</span> и знают только один <span>язык: Общий</span>.
      </p>
      <div className="race__select">
        {raseArr.race.map((race, index) => (
          <RaceItem
            race={race}
            key={race.value}
            setRace={props.setRace}
            active={clicked === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};
