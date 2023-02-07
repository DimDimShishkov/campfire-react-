import React from "react";
import "./Parameters.css";
import raseArr from "../mockData/campfire.json";
import { IRaceArray, IParameters } from "../Types/Types";

/**
 *
 * этап выбора SPECIAL
 */

interface IFormInput extends IParameters {
  raseArr: IRaceArray[];
  nameRU: string;
  nameEN: string;
  description: string;
  initialValue: number;
  value: number;
}

export function Parameters() {
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <section className="parameters">
      <h2 className="parameters__heading">Распределение параметров</h2>
      <p className="parameters__description">Теперь вы знаете класс и расу.</p>
      <p className="parameters__description">
        Далее вам нужно распределить параметры, чтобы узнать, в чём ваш персонаж
        хорош, а в чём нет.
      </p>
      <p className="parameters__description">
        Чтобы распределить параметры, можно перетащить значения 15, 14, 13, 12,
        10, 8 в ячейки или расставить вручную.
      </p>
      <p className="parameters__description">
        Главное требование, чтобы сумма всех очков не превышала 27 очков.
      </p>
      <form className="parameters__form">
        <div className="parameters__items">
          {raseArr.parameters.map((item) => (
            <div className="parameters__item" key={item.nameEN}>
              <div className="parameters__status">
                <h4 className="parameters__title">{item.nameRU}</h4>
              </div>
              <p className="parameters__subtitle">{item.description}</p>
              <div>
                <div className="parameters__values">
                  <p className="parameters__subtitle">Выставите значение</p>
                </div>
                <div>
                  <button>-</button>
                  <input
                    className="parameters__input"
                    type="number"
                    required
                    min={8}
                    max={15}
                    // initialValue={8}
                    placeholder={"Введите данные"}
                  />
                  <button>-</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div></div>
        <button type="submit" className="parameters__submit">
          Подтвердить
        </button>
      </form>
    </section>
  );
}
