import React, { useEffect, useRef, useState } from "react";
import "./Parameters.css";
import raseArr from "../mockData/campfire.json";
import { IRaceArray, IParameters } from "../Types/Types";

interface IFormInput extends IParameters {
  raseArr: IRaceArray[];
  nameRU: string;
  nameEN: string;
  description: string;
  initialValue: number;
  value: number;
}
/**
 *
 * этап выбора SPECIAL
 */

export function Parameters() {
  const [parameters, setParameters] = useState<
    { name: string; value: number }[]
  >([]);

  useEffect(() => {
    let initialArr: { name: string; value: number }[] = [];
    raseArr.parameters.forEach((item) => {
      let { nameEN, initialValue } = item;
      let arr = { name: nameEN, value: initialValue };
      initialArr.push(arr);
    });
    setParameters(initialArr);
  }, []);

  const openItemHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const { value } = event.target as HTMLButtonElement;
    let item = value.split("-");
    let found = parameters.find((el) => el.name === item[0]);
    console.log(found);
    if (found && item[1] === "decrease") {
      console.log(123);
      found.value += 1;
      let biba = parameters.map((el) =>
        el.name === item[0] ? { ...el, (() => (el.value = 1)) } : el
      );
      setParameters([...parameters, found]);
    } else if (item[1] === "increase") {
      /* setParameters((prevState) =>
        prevState.map((el) =>
          el.name === item[0] ? { ...el, value = value + 1 } : el
        )
      ); */
      console.log(321);
    }
    console.log(parameters);
    // setParameters(result);
  };

  useEffect(() => {
    console.log(parameters);
  }, [parameters]);

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
              <div className="parameters__values">
                <div>
                  <p className="parameters__subtitle">Выставите значение</p>
                </div>
                <div className="parameters__value">
                  <button
                    className="parameters__button"
                    onClick={openItemHandler}
                    value={`${item.nameEN}-decrease`}
                  >
                    -
                  </button>
                  <p className="parameters__input">{item.initialValue}</p>
                  <button
                    className="parameters__button"
                    onClick={openItemHandler}
                    value={`${item.nameEN}-increase`}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="parameters__items"></div>
        <button type="submit" className="parameters__submit">
          Подтвердить
        </button>
      </form>
    </section>
  );
}
