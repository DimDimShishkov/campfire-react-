import React from "react";
import "./Parameters.css";
import { useForm, SubmitHandler } from "react-hook-form";
import raseArr from "../mockData/campfire.json";
import { IRaceArray, IParameters } from "../Types/Types";

/**
 *
 * этап выбора SPECIAL
 */

interface IFormInput {
  raseArr: IRaceArray[];
  nameRU: string;
  nameEN: string;
  description: string;
  initialValue: number;
  value: number;
}

export function Parameters() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <section className="parameters">
      <div className="parameters__header">
        <h2 className="parameters__heading">Распределение параметров</h2>
        <p className="parameters__description">
          Теперь вы знаете класс и расу. Далее вам нужно распределить параметры,
          чтобы узнать, в чём ваш персонаж хорош, а в чём нет. В этой игре мы не
          определяем параметры случайно, вместо этого используется специальное
          распределение.
        </p>
        <p className="parameters__description">
          Чтобы распределить параметры, разместите цифры 15, 14, 13, 12, 10, 8
          как вам будет удобно. Всего на покупку у вас 27 очков.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="parameters__form">
        {raseArr.parameters.map((item) => (
          <div className="parameters__items" key={item.nameEN}>
            <div className="parameters__item">
              <h4 className="parameters__title">{item.nameRU}</h4>
              <input
                className="parameters__input"
                type="number"
                required
                min={8}
                max={15}
                placeholder={item.nameRU}
              />
            </div>

            <p className="parameters__subtitle">{item.description}</p>
          </div>
        ))}
        <button type="submit" className="parameters__submit">
          Подтвердить
        </button>
      </form>
    </section>
  );
}
