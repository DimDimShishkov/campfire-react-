import { useState } from "react";
import "./ResultList.css";
// import raseArr from "../mockData/campfire.json";
// import { RaceItem } from "./RaceItem";

/**
 *
 * чарник персонажа
 */

export const ResultList = () => {
  // const [clicked, setClicked] = useState<number>(-1);

  return (
    <section className="result-list">
      <div className="result-list__container">
        <div className="result-list__header">
          <p className="result-list__name">
            <input
              name="name"
              type="text"
              className="result-list__name-input"
              placeholder="Введите имя персонажа"
            />
            <span className="result-list__label result-list__label_absolute">
              имя персонажа
            </span>
          </p>

          <div className="result-list__info">
            <div className="result-list__info-section">
              <p className="result-list__info-box">
                <p className="vitality-block__box-value">Варвар</p>
                <span className="result-list__label result-list__label_absolute">
                  класс
                </span>
              </p>
              <p className="result-list__info-box">
                <input
                  name="background"
                  type="text"
                  className="result-list__input"
                  value=""
                />
                <span className="result-list__label result-list__label_absolute">
                  предыстория
                </span>
              </p>
              <p className="result-list__info-box">
                <input
                  name="playerName"
                  type="text"
                  className="result-list__input"
                  value=""
                />
                <span className="result-list__label result-list__label_absolute">
                  имя игрока
                </span>
              </p>
            </div>
            <div className="result-list__info-section">
              <p className="result-list__info-box">
                <input
                  name="race"
                  type="text"
                  className="result-list__input"
                  value="Утишир"
                />
                <span className="result-list__label result-list__label_absolute">
                  раса
                </span>
              </p>
              <p className="result-list__info-box">
                <input
                  name="alignment"
                  type="text"
                  className="result-list__input"
                  value=""
                />
                <span className="result-list__label result-list__label_absolute">
                  мировоззрение
                </span>
              </p>
              <p className="result-list__info-box result-list__info-box_medium">
                <input
                  name="experience"
                  type="number"
                  className="result-list__input"
                  value=""
                />
                <span className="result-list__label result-list__label_absolute">
                  опыт
                </span>
              </p>
              <p className="result-list__info-box result-list__info-box_small">
                <input
                  name="level"
                  type="text"
                  className="result-list__input"
                  min="1"
                  max="20"
                  value="1"
                />
                <span className="result-list__label result-list__label_absolute">
                  уровень
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* <div className="result-list__body">
          <div className="result-list__body-column">
            <div className="result-list__stats-skills">
              <div className="result-list__stats result-list__stats_default">
                <div className="stat-block">
                  <p className="stat-block__label">Сила</p>
                  <p className="stat-block__modifier">+2</p>
                  <p className="stat-block__score">15</p>
                </div>
                <div className="stat-block">
                  <p className="stat-block__label">Ловкость</p>
                  <p className="stat-block__modifier">+2</p>
                  <p className="stat-block__score">15</p>
                </div>
                <div className="stat-block">
                  <p className="stat-block__label">Телосложение</p>
                  <p className="stat-block__modifier">+2</p>
                  <p className="stat-block__score">15</p>
                </div>
                <div className="stat-block">
                  <p className="stat-block__label">Интеллект</p>
                  <p className="stat-block__modifier">+0</p>
                  <p className="stat-block__score">15</p>
                </div>
                <div className="stat-block">
                  <p className="stat-block__label">Мудрость</p>
                  <p className="stat-block__modifier">+0</p>
                  <p className="stat-block__score">15</p>
                </div>
                <div className="stat-block">
                  <p className="stat-block__label">Харизма</p>
                  <p className="stat-block__modifier">−1</p>
                  <p className="stat-block__score">15</p>
                </div>
              </div>
              <div className="result-list__skills">
                <div className="modifier-block">
                  <div className="modifier-block__wrap">
                    <p className="modifier-block__modifier"></p>
                  </div>
                  <p className="modifier-block__label">вдохновение</p>
                </div>
                <div className="modifier-block">
                  <div className="modifier-block__wrap">
                    <p className="modifier-block__modifier round ">+2</p>
                  </div>
                  <p className="modifier-block__label">Бонус владения</p>
                </div>
                <div className="saves-block">
                  <div className="char-skill">
                    <label className="char-skill__check">
                      <input
                        className="checkdot__input"
                        id="checkdot-str"
                        type="checkbox"
                        name="str"
                      />
                      <span className="checkdot__marker"></span>
                    </label>
                    <input
                      className="char-skill__modifier"
                      type="text"
                      max="15"
                      min="-9"
                      value="+4"
                    />
                    <p className="char-skill__label">Сила </p>
                  </div>
                  <div className="char-skill">
                    <label className="checkdot char-skill__check">
                      <input
                        className="checkdot__input"
                        id="checkdot-dex"
                        type="checkbox"
                        name="dex"
                      />
                      <span className="checkdot__marker"></span>
                    </label>
                    <input
                      className="char-skill__modifier"
                      type="text"
                      max="15"
                      min="-9"
                      value="+2"
                    />
                    <p className="char-skill__label">Ловкость </p>
                  </div>
                  <div className="char-skill">
                    <label className="checkdot char-skill__check">
                      <input
                        className="checkdot__input"
                        id="checkdot-con"
                        type="checkbox"
                        name="con"
                      />
                      <span className="checkdot__marker"></span>
                    </label>
                    <input
                      className="char-skill__modifier"
                      type="text"
                      max="15"
                      min="-9"
                      value="+4"
                    />
                    <p className="char-skill__label">Телосложение </p>
                  </div>
                  <div className="char-skill">
                    <label className="checkdot char-skill__check">
                      <input
                        className="checkdot__input"
                        id="checkdot-int"
                        type="checkbox"
                        name="int"
                      />
                      <span className="checkdot__marker"></span>
                    </label>
                    <input
                      className="char-skill__modifier"
                      type="text"
                      max="15"
                      min="-9"
                      value="+0"
                    />
                    <p className="char-skill__label">Интеллект </p>
                  </div>
                  <div className="char-skill">
                    <label className="checkdot char-skill__check">
                      <input
                        className="checkdot__input"
                        id="checkdot-wis"
                        type="checkbox"
                        name="wis"
                      />
                      <span className="checkdot__marker"></span>
                    </label>
                    <input
                      className="char-skill__modifier"
                      type="text"
                      max="15"
                      min="-9"
                      value="+0"
                    />
                    <p className="char-skill__label">Мудрость </p>
                  </div>
                  <div className="char-skill">
                    <label className="checkdot char-skill__check">
                      <input
                        className="checkdot__input"
                        id="checkdot-cha"
                        type="checkbox"
                        name="cha"
                      />
                      <span className="checkdot__marker"></span>
                    </label>
                    <input
                      className="char-skill__modifier"
                      type="text"
                      max="15"
                      min="-9"
                      value="−1"
                    />
                    <p className="char-skill__label">Харизма </p>
                  </div>
                  <span className="char-sheet__label centered">Спасброски</span>
                </div>
                <div className="saves-block">
                  <div className="char-skill small">
                    <label className="checkdot char-skill__check">
                      <input
                        className="checkdot__input"
                        id="checkdot-acrobatics"
                        type="checkbox"
                        name="acrobatics"
                      />
                      <span className="checkdot__marker"></span>
                    </label>
                    <input
                      className="char-skill__modifier"
                      type="text"
                      max="15"
                      min="-9"
                      value="+2"
                    />
                    <p className="char-skill__label">
                      Акробатика{" "}
                      <span className="char-skill__label-base">(Лов)</span>
                    </p>
                  </div>
                  <div className="char-skill small">
                    <label className="checkdot char-skill__check">
                      <input
                        className="checkdot__input"
                        id="checkdot-investigation"
                        type="checkbox"
                        name="investigation"
                      />
                      <span className="checkdot__marker"></span>
                    </label>
                    <input
                      className="char-skill__modifier"
                      type="text"
                      max="15"
                      min="-9"
                      value="+0"
                    />
                    <p className="char-skill__label">
                      Анализ{" "}
                      <span className="char-skill__label-base">(Инт)</span>
                    </p>
                  </div>
                  <div className="char-skill small">
                    <label className="checkdot char-skill__check">
                      <input
                        className="checkdot__input"
                        id="checkdot-athletics"
                        type="checkbox"
                        name="athletics"
                      />
                      <span className="checkdot__marker"></span>
                    </label>
                    <input
                      className="char-skill__modifier"
                      type="text"
                      max="15"
                      min="-9"
                      value="+4"
                    />
                    <p className="char-skill__label">
                      Атлетика{" "}
                      <span className="char-skill__label-base">(Сил)</span>
                    </p>
                  </div>
                  <div className="char-skill small">
                    <label className="checkdot char-skill__check">
                      <input
                        className="checkdot__input"
                        id="checkdot-perception"
                        type="checkbox"
                        name="perception"
                      />
                      <span className="checkdot__marker"></span>
                    </label>
                    <input
                      className="char-skill__modifier"
                      type="text"
                      max="15"
                      min="-9"
                      value="+0"
                    />
                    <p className="char-skill__label">
                      Восприятие{" "}
                      <span className="char-skill__label-base">(Муд)</span>
                    </p>
                  </div>
                  <div className="char-skill small">
                    <label className="checkdot char-skill__check">
                      <input
                        className="checkdot__input"
                        id="checkdot-survival"
                        type="checkbox"
                        name="survival"
                      />
                      <span className="checkdot__marker"></span>
                    </label>
                    <input
                      className="char-skill__modifier"
                      type="text"
                      max="15"
                      min="-9"
                      value="+2"
                    />
                    <p className="char-skill__label">
                      Выживание{" "}
                      <span className="char-skill__label-base">(Муд)</span>
                    </p>
                  </div>
                  <div className="char-skill small">
                    <label className="checkdot char-skill__check">
                      <input
                        className="checkdot__input"
                        id="checkdot-performance"
                        type="checkbox"
                        name="performance"
                      />
                      <span className="checkdot__marker"></span>
                    </label>
                    <input
                      className="char-skill__modifier"
                      type="text"
                      max="15"
                      min="-9"
                      value="−1"
                    />
                    <p className="char-skill__label">
                      Выступление{" "}
                      <span className="char-skill__label-base">(Хар)</span>
                    </p>
                  </div>
                  <div className="char-skill small">
                    <label className="checkdot char-skill__check">
                      <input
                        className="checkdot__input"
                        id="checkdot-intimidation"
                        type="checkbox"
                        name="intimidation"
                      />
                      <span className="checkdot__marker"></span>
                    </label>
                    <input
                      className="char-skill__modifier"
                      type="text"
                      max="15"
                      min="-9"
                      value="−1"
                    />
                    <p className="char-skill__label">
                      Запугивание{" "}
                      <span className="char-skill__label-base">(Хар)</span>
                    </p>
                  </div>
                  <div className="char-skill small">
                    <label className="checkdot char-skill__check">
                      <input
                        className="checkdot__input"
                        id="checkdot-history"
                        type="checkbox"
                        name="history"
                      />
                      <span className="checkdot__marker"></span>
                    </label>
                    <input
                      className="char-skill__modifier"
                      type="text"
                      max="15"
                      min="-9"
                      value="+0"
                    />
                    <p className="char-skill__label">
                      История{" "}
                      <span className="char-skill__label-base">(Инт)</span>
                    </p>
                  </div>
                  <div className="char-skill small">
                    <label className="checkdot char-skill__check">
                      <input
                        className="checkdot__input"
                        id="checkdot-sleight of hand"
                        type="checkbox"
                        name="sleight of hand"
                      />
                      <span className="checkdot__marker"></span>
                    </label>
                    <input
                      className="char-skill__modifier"
                      type="text"
                      max="15"
                      min="-9"
                      value="+2"
                    />
                    <p className="char-skill__label">
                      Ловкость рук{" "}
                      <span className="char-skill__label-base">(Лов)</span>
                    </p>
                  </div>
                  <div className="char-skill small">
                    <label className="checkdot char-skill__check">
                      <input
                        className="checkdot__input"
                        id="checkdot-arcana"
                        type="checkbox"
                        name="arcana"
                      />
                      <span className="checkdot__marker"></span>
                    </label>
                    <input
                      className="char-skill__modifier"
                      type="text"
                      max="15"
                      min="-9"
                      value="+0"
                    />
                    <p className="char-skill__label">
                      Магия{" "}
                      <span className="char-skill__label-base">(Инт)</span>
                    </p>
                  </div>
                  <div className="char-skill small">
                    <label className="checkdot char-skill__check">
                      <input
                        className="checkdot__input"
                        id="checkdot-medicine"
                        type="checkbox"
                        name="medicine"
                      />
                      <span className="checkdot__marker"></span>
                    </label>
                    <input
                      className="char-skill__modifier"
                      type="text"
                      max="15"
                      min="-9"
                      value="+0"
                    />
                    <p className="char-skill__label">
                      Медицина{" "}
                      <span className="char-skill__label-base">(Муд)</span>
                    </p>
                  </div>
                  <div className="char-skill small">
                    <label className="checkdot char-skill__check">
                      <input
                        className="checkdot__input"
                        id="checkdot-deception"
                        type="checkbox"
                        name="deception"
                      />
                      <span className="checkdot__marker"></span>
                    </label>
                    <input
                      className="char-skill__modifier"
                      type="text"
                      max="15"
                      min="-9"
                      value="−1"
                    />
                    <p className="char-skill__label">
                      Обман{" "}
                      <span className="char-skill__label-base">(Хар)</span>
                    </p>
                  </div>
                  <div className="char-skill small">
                    <label className="checkdot char-skill__check">
                      <input
                        className="checkdot__input"
                        id="checkdot-nature"
                        type="checkbox"
                        name="nature"
                      />
                      <span className="checkdot__marker"></span>
                    </label>
                    <input
                      className="char-skill__modifier"
                      type="text"
                      max="15"
                      min="-9"
                      value="+0"
                    />
                    <p className="char-skill__label">
                      Природа{" "}
                      <span className="char-skill__label-base">(Инт)</span>
                    </p>
                  </div>
                  <div className="char-skill small">
                    <label className="checkdot char-skill__check">
                      <input
                        className="checkdot__input"
                        id="checkdot-insight"
                        type="checkbox"
                        name="insight"
                      />
                      <span className="checkdot__marker"></span>
                    </label>
                    <input
                      className="char-skill__modifier"
                      type="text"
                      max="15"
                      min="-9"
                      value="+0"
                    />
                    <p className="char-skill__label">
                      Проницательность{" "}
                      <span className="char-skill__label-base">(Муд)</span>
                    </p>
                  </div>
                  <div className="char-skill small">
                    <label className="checkdot char-skill__check">
                      <input
                        className="checkdot__input"
                        id="checkdot-religion"
                        type="checkbox"
                        name="religion"
                      />
                      <span className="checkdot__marker"></span>
                    </label>
                    <input
                      className="char-skill__modifier"
                      type="text"
                      max="15"
                      min="-9"
                      value="+0"
                    />
                    <p className="char-skill__label">
                      Религия{" "}
                      <span className="char-skill__label-base">(Инт)</span>
                    </p>
                  </div>
                  <div className="char-skill small">
                    <label className="checkdot char-skill__check">
                      <input
                        className="checkdot__input"
                        id="checkdot-stealth"
                        type="checkbox"
                        name="stealth"
                      />
                      <span className="checkdot__marker"></span>
                    </label>
                    <input
                      className="char-skill__modifier"
                      type="text"
                      max="15"
                      min="-9"
                      value="+2"
                    />
                    <p className="char-skill__label">
                      Скрытность{" "}
                      <span className="char-skill__label-base">(Лов)</span>
                    </p>
                  </div>
                  <div className="char-skill small">
                    <label className="checkdot char-skill__check">
                      <input
                        className="checkdot__input"
                        id="checkdot-persuasion"
                        type="checkbox"
                        name="persuasion"
                      />
                      <span className="checkdot__marker"></span>
                    </label>
                    <input
                      className="char-skill__modifier"
                      type="text"
                      max="15"
                      min="-9"
                      value="−1"
                    />
                    <p className="char-skill__label">
                      Убеждение{" "}
                      <span className="char-skill__label-base">(Хар)</span>
                    </p>
                  </div>
                  <div className="char-skill small">
                    <label className="checkdot char-skill__check">
                      <input
                        className="checkdot__input"
                        id="checkdot-animal handling"
                        type="checkbox"
                        name="animal handling"
                      />
                      <span className="checkdot__marker"></span>
                    </label>
                    <input
                      className="char-skill__modifier"
                      type="text"
                      max="15"
                      min="-9"
                      value="+0"
                    />
                    <p className="char-skill__label">
                      Уход за животными{" "}
                      <span className="char-skill__label-base">(Муд)</span>
                    </p>
                  </div>
                  <span className="char-sheet__label centered">навыки</span>
                </div>
              </div>
            </div>
            <div className="modifier-block">
              <div className="modifier-block__wrap">
                <p className="modifier-block__modifier ellipsis ">10</p>
              </div>
              <p className="modifier-block__label">
                пассивная мудрость (Восприятие)
              </p>
            </div>
            <div className="text-block">
              <div className="text-block__textarea-wrap">
                <div className="text-block__textarea">
                  <div className="ProseMirror"></div>
                </div>
              </div>
              <div className="text-block__label-wrap">
                <p className="char-sheet__label centered ">
                  Прочие владения и языки
                </p>
              </div>
            </div>
          </div>
          <div className="char-sheet__body-column">
            <div className="vitality-block">
              <div className="vitality-block__box no-back">
                <svg
                  className="vitality-block__shield"
                  width="48"
                  height="60"
                  viewBox="0 0 48 60"
                  fill="none"
                >
                  <path
                    d="M23.8494 0.802124L1.86096 12.5092V36.2236L9.39125 50.3321L23.8494 59.0374L38.0063 50.3321L46.139 36.2236V12.5092L23.8494 0.802124Z"
                    fill="white"
                  ></path>
                  <path
                    d="M46.8264 12.1484L24.2164 0.13221C23.881 -0.0463404 23.479 -0.0438346 23.1461 0.138475L1.16172 12.1546C0.801164 12.352 0.577545 12.7291 0.577545 13.1395V28.8356C0.590736 41.7383 8.25532 53.4111 20.1084 58.5803L23.1599 59.9066C23.445 60.0306 23.7698 60.0312 24.0556 59.9078L27.494 58.4268C39.5669 53.3697 47.4212 41.5841 47.4225 28.5243V13.1395C47.4225 12.7247 47.1932 12.3432 46.8264 12.1484ZM45.921 28.5C45.9185 40.6596 38.2441 52.2944 27.0029 57L23.6109 58.2L20.6968 57C9.66353 52.1885 2.09155 41.3562 2.07899 29.3457V13.2L23.6997 1.5L45.921 13.2V28.5Z"
                    fill="black"
                  ></path>
                </svg>
                <p className="vitality-block__box-value vitality-block__shield-input char-sheet__input">
                  14
                </p>
                <p className="char-sheet__label centered min">КЗ</p>
              </div>
              <div className="vitality-block__box vitality-block__box-initiative">
                <p className="vitality-block__box-value char-sheet__input">
                  +2
                </p>
                <p className="char-sheet__label centered min">Инициатива</p>
              </div>
              <div className="vitality-block__box">
                <p className="vitality-block__box-value char-sheet__input">
                  30
                </p>
                <p className="char-sheet__label centered min">Скорость</p>
              </div>
              <div className="vitality-block__hp">
                <label className="vitality-block__input-label">
                  Максимум хитов
                  <p className="max char-sheet__input">16</p>
                </label>
                <p className="char-sheet__input">16</p>
                <p className="char-sheet__label centered">Текущие хиты</p>
              </div>
              <div className="vitality-block__hp vitality-block__hp_temp">
                <p className="vitality-block__hp-input char-sheet__input"></p>
                <p className="char-sheet__label centered">Временные хиты</p>
              </div>
              <div className="vitality-block__medium vitality-block__medium-hit-die">
                <p className="char-sheet__input">1к12</p>
                <p className="char-sheet__label centered min">Кость хитов</p>
              </div>
              <div className="vitality-block__medium">
                <div className="vitality-block__death">
                  <p className="vitality-block__death-label">Успехи</p>
                  <div className="vitality-block__death-wrap">
                    <span className="vitality-block__death-circle"></span>
                    <span className="vitality-block__death-circle"></span>
                    <span className="vitality-block__death-circle"></span>
                  </div>
                </div>
                <div className="vitality-block__death">
                  <p className="vitality-block__death-label">Провалы</p>
                  <div className="vitality-block__death-wrap">
                    <span className="vitality-block__death-circle"></span>
                    <span className="vitality-block__death-circle"></span>
                    <span className="vitality-block__death-circle"></span>
                  </div>
                </div>
                <p className="char-sheet__label centered min">
                  Спасброски от смерти
                </p>
              </div>
            </div>
            <div className="text-block char-sheet__attacks ">
              <div className="weapons-block">
                <div className="weapons-block__row head">
                  <div className="weapons-block__cell">Название</div>
                  <div className="weapons-block__cell">Бонус атаки</div>
                  <div className="weapons-block__cell">Урон/вид</div>
                </div>
              </div>
              <div className="text-block__textarea-wrap">
                <div className="text-block__textarea"></div>
              </div>
              <div className="text-block__label-wrap">
                <p className="char-sheet__label centered ">
                  Атаки и заклинания
                </p>
              </div>
            </div>
            <div className="char-sheet__equipment-wrapper">
              <div className="text-block char-sheet__equipment ">
                <div className="text-block__textarea-wrap"></div>
                <div className="text-block__label-wrap">
                  <p className="char-sheet__label centered ">Снаряжение</p>
                </div>
              </div>
            </div>
          </div>
          <div className="char-sheet__body-column">
            <div className="personality-block">
              <div className="text-block  ">
                <div className="text-block__textarea-wrap">
                  <div className="text-block__textarea"></div>
                </div>
                <div className="text-block__label-wrap">
                  <p className="char-sheet__label centered min">
                    Черты характера
                  </p>
                </div>
              </div>
              <div className="text-block  ">
                <div className="text-block__textarea-wrap">
                  <div className="text-block__textarea"></div>
                </div>
                <div className="text-block__label-wrap">
                  <p className="char-sheet__label centered min">Идеалы</p>
                </div>
              </div>
              <div className="text-block  ">
                <div className="text-block__textarea-wrap">
                  <div className="text-block__textarea"></div>
                </div>
                <div className="text-block__label-wrap">
                  <p className="char-sheet__label centered min">
                    Привязанности
                  </p>
                </div>
              </div>
              <div className="text-block  ">
                <div className="text-block__textarea-wrap">
                  <div className="text-block__textarea"></div>
                </div>
                <div className="text-block__label-wrap">
                  <p className="char-sheet__label centered min">Слабости</p>
                </div>
              </div>
            </div>
            <div className="text-block  ">
              <div className="text-block__textarea-wrap">
                <div className="text-block__textarea"></div>
              </div>
              <div className="text-block__label-wrap">
                <p className="char-sheet__label centered ">
                  Умения и способности
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};
