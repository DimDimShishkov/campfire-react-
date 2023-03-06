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
    <section className="section">
      <h2 className="section__heading">Выбор расы</h2>
      <p className="race__description">
        Для начала выберите любую из имеющихся рас.
      </p>
      <p className="race__description">
        Не переживайте выбрать «не то», все расы имеют свои преимущества при
        использовании с разными классами.
      </p>
      <p className="race__description race__description_additional">
        Все описанные расы <span>среднего размера</span>, имеют скорость{" "}
        <span>30 футов</span> и знают только один <span>язык: Общий</span>.
      </p>
      <p className="race__description">
        Дополнительно вы получаете либо +2 к одному параметру и +1 к другому,
        либо +1 к трём параметрам
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
