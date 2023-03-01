import { IParameter } from "../Types/Types";
import "./Abilities.css";

interface IProps {
  race: string;
  parameters: IParameter[];
}

/**
 *
 * этап выбора навыков
 */

function Abilities() {
  return (
    <section className="abilities">
      <h2 className="abilities__heading">Распределение навыков</h2>
      <p className="abilities__description">
        Уже выбрали расу, класс и расставили основные параметры.
      </p>
      <p className="abilities__description">
        Остаётся выбрать навыки и спасброски.
      </p>

      <div className="abilities__containers">
        <div className="abilities__container">
          <h2 className="abilities__title">
            Сила
            <span className="abilities__line" />
            <span className="abilities__title-number">XXX</span>
          </h2>
          <div className="abilities__items">
            <div className="abilities__item">
              <div className="abilities__text-item">
                <p className="abilities__subtitle ">проверка</p>
              </div>
              <div className="abilities__number-item">
                <p className="abilities__subnumber">+2</p>
              </div>
            </div>
            <div className="abilities__item">
              <div className="abilities__text-item">
                <label className="abilities__label">
                  <input
                    className="abilities__input"
                    id="checkdot-saves-str"
                    type="checkbox"
                    name="saves-str"
                  />
                  <span className="checkdot__marker"></span>
                </label>
                <p className="abilities__subtitle">Спасбросок</p>
              </div>
              <div className="abilities__number-item">
                <p className="abilities__subnumber">+4</p>
              </div>
            </div>
          </div>
          <div className="abilities__item">
            <div className="abilities__check-item">
              <label className="abilities__label">
                <input
                  className="abilities__input"
                  id="checkdot-skills-athletics"
                  type="checkbox"
                  name="skills-athletics"
                />
                <span className="checkdot__marker"></span>
              </label>
              <p className="abilities__subtitle">Атлетика</p>
            </div>
            <div className="abilities__number-item">
              <p className="abilities__subnumber">+4</p>
            </div>
          </div>
        </div>
        <div className="abilities__container">
          <h2 className="abilities__title">
            Ловкость
            <span className="abilities__line" />
            <span className="abilities__title-number">XXX</span>
          </h2>
          <div className="abilities__items">
            <div className="abilities__item">
              <div className="abilities__text-item">
                <p className="abilities__subtitle">проверка</p>
              </div>
              <div className="abilities__number-item">
                <p className="abilities__subnumber">+1</p>
              </div>
            </div>
            <div className="abilities__item">
              <div className="abilities__text-item">
                <label className="abilities__label">
                  <input
                    className="abilities__input"
                    id="checkdot-saves-dex"
                    type="checkbox"
                    name="saves-dex"
                  />
                  <span className="checkdot__marker"></span>
                </label>
                <p className="abilities__subtitle">Спасбросок</p>
              </div>
              <div className="abilities__number-item">
                <p className="abilities__subnumber">+1</p>
              </div>
            </div>
          </div>
          <div className="abilities__item">
            <div className="abilities__text-item">
              <label className="abilities__label">
                <input
                  className="abilities__input"
                  id="checkdot-skills-acrobatics"
                  type="checkbox"
                  name="skills-acrobatics"
                />
                <span className="checkdot__marker"></span>
              </label>
              <p className="abilities__subtitle">Акробатика</p>
            </div>
            <div className="abilities__number-item">
              <p className="abilities__subnumber">+1</p>
            </div>
          </div>
          <div className="abilities__item">
            <div className="abilities__text-item">
              <label className="abilities__label">
                <input
                  className="abilities__input"
                  id="checkdot-skills-sleight of hand"
                  type="checkbox"
                  name="skills-sleight of hand"
                />
                <span className="checkdot__marker"></span>
              </label>
              <p className="abilities__subtitle">Ловкость рук</p>
            </div>
            <div className="abilities__number-item">
              <p className="abilities__subnumber">+1</p>
            </div>
          </div>
          <div className="abilities__item">
            <div className="abilities__text-item">
              <label className="abilities__label">
                <input
                  className="abilities__input"
                  id="checkdot-skills-stealth"
                  type="checkbox"
                  name="skills-stealth"
                />
                <span className="checkdot__marker"></span>
              </label>
              <p className="abilities__subtitle">Скрытность</p>
            </div>
            <div className="abilities__number-item">
              <p className="abilities__subnumber">+1</p>
            </div>
          </div>
        </div>
        <div className="abilities__container">
          <h2 className="abilities__title">
            Телосложение
            <span className="abilities__line" />
            <span className="abilities__title-number">XXX</span>
          </h2>
          <div className="abilities__items">
            <div className="abilities__item">
              <div className="abilities__text-item">
                <p className="abilities__subtitle">проверка</p>
              </div>
              <div className="abilities__number-item">
                <p className="abilities__subnumber">+2</p>
              </div>
            </div>
            <div className="abilities__item">
              <div className="abilities__text-item">
                <label className="abilities__label">
                  <input
                    className="abilities__input"
                    id="checkdot-saves-con"
                    type="checkbox"
                    name="saves-con"
                  />
                  <span className="checkdot__marker"></span>
                </label>
                <p className="abilities__subtitle">Спасбросок</p>
              </div>
              <div className="abilities__number-item">
                <p className="abilities__subnumber">+4</p>
              </div>
            </div>
          </div>
        </div>

        <div className="abilities__container">
          <h2 className="abilities__title">
            Интеллект
            <span className="abilities__line" />
            <span className="abilities__title-number">XXX</span>
          </h2>
          <div className="abilities__items">
            <div className="abilities__item">
              <div className="abilities__text-item">
                <p className="abilities__subtitle">проверка</p>
              </div>
              <div className="abilities__number-item">
                <p className="abilities__subnumber">+2</p>
              </div>
            </div>
            <div className="abilities__item">
              <div className="abilities__text-item">
                <label className="abilities__label">
                  <input
                    className="abilities__input"
                    id="checkdot-saves-int"
                    type="checkbox"
                    name="saves-int"
                  />
                  <span className="checkdot__marker"></span>
                </label>
                <p className="abilities__subtitle">Спасбросок</p>
              </div>
              <div className="abilities__number-item">
                <p className="abilities__subnumber">+4</p>
              </div>
            </div>
          </div>
          <div className="abilities__item">
            <div className="abilities__text-item">
              <label className="abilities__label">
                <input
                  className="abilities__input"
                  id="checkdot-skills-investigation"
                  type="checkbox"
                  name="skills-investigation"
                />
                <span className="checkdot__marker"></span>
              </label>
              <p className="abilities__subtitle">Анализ</p>
            </div>
            <div className="abilities__number-item">
              <p className="abilities__subnumber">+4</p>
            </div>
          </div>
          <div className="abilities__item">
            <div className="abilities__text-item">
              <label className="abilities__label">
                <input
                  className="abilities__input"
                  id="checkdot-skills-history"
                  type="checkbox"
                  name="skills-history"
                />
                <span className="checkdot__marker"></span>
              </label>
              <p className="abilities__subtitle">История</p>
            </div>
            <div className="abilities__number-item">
              <p className="abilities__subnumber">+4</p>
            </div>
          </div>
          <div className="abilities__item">
            <div className="abilities__text-item">
              <label className="abilities__label">
                <input
                  className="abilities__input"
                  id="checkdot-skills-arcana"
                  type="checkbox"
                  name="skills-arcana"
                />
                <span className="checkdot__marker"></span>
              </label>
              <p className="abilities__subtitle">Магия</p>
            </div>
            <div className="abilities__number-item">
              <p className="abilities__subnumber">+4</p>
            </div>
          </div>
          <div className="abilities__item">
            <div className="abilities__text-item">
              <label className="abilities__label">
                <input
                  className="abilities__input"
                  id="checkdot-skills-nature"
                  type="checkbox"
                  name="skills-nature"
                />
                <span className="checkdot__marker"></span>
              </label>
              <p className="abilities__subtitle">Природа</p>
            </div>
            <div className="abilities__number-item">
              <p className="abilities__subnumber">+4</p>
            </div>
          </div>
          <div className="abilities__item">
            <div className="abilities__text-item">
              <label className="abilities__label">
                <input
                  className="abilities__input"
                  id="checkdot-skills-religion"
                  type="checkbox"
                  name="skills-religion"
                />
                <span className="checkdot__marker"></span>
              </label>
              <p className="abilities__subtitle">Религия</p>
            </div>
            <div className="abilities__number-item">
              <p className="abilities__subnumber">+4</p>
            </div>
          </div>
        </div>
        <div className="abilities__container">
          <h2 className="abilities__title">
            Мудрость
            <span className="abilities__line" />
            <span className="abilities__title-number">XXX</span>
          </h2>
          <div className="abilities__items">
            <div className="abilities__item">
              <div className="abilities__text-item">
                <p className="abilities__subtitle ">проверка</p>
              </div>
              <div className="abilities__number-item">
                <p className="abilities__subnumber">+2</p>
              </div>
            </div>
            <div className="abilities__item">
              <div className="abilities__text-item">
                <label className="abilities__label">
                  <input
                    className="abilities__input"
                    id="checkdot-saves-wis"
                    type="checkbox"
                    name="saves-wis"
                  />
                  <span className="checkdot__marker"></span>
                </label>
                <p className="abilities__subtitle">Спасбросок</p>
              </div>
              <div className="abilities__number-item">
                <p className="abilities__subnumber">+4</p>
              </div>
            </div>
          </div>
          <div className="abilities__item">
            <div className="abilities__text-item">
              <label className="abilities__label">
                <input
                  className="abilities__input"
                  id="checkdot-skills-perception"
                  type="checkbox"
                  name="skills-perception"
                />
                <span className="checkdot__marker"></span>
              </label>
              <p className="abilities__subtitle">Восприятие</p>
            </div>
            <div className="abilities__number-item">
              <p className="abilities__subnumber">+4</p>
            </div>
          </div>
          <div className="abilities__item">
            <div className="abilities__text-item">
              <label className="abilities__label">
                <input
                  className="abilities__input"
                  id="checkdot-skills-survival"
                  type="checkbox"
                  name="skills-survival"
                />
                <span className="checkdot__marker"></span>
              </label>
              <p className="abilities__subtitle">Выживание</p>
            </div>
            <div className="abilities__number-item">
              <p className="abilities__subnumber">+4</p>
            </div>
          </div>
          <div className="abilities__item">
            <div className="abilities__text-item">
              <label className="abilities__label">
                <input
                  className="abilities__input"
                  id="checkdot-skills-medicine"
                  type="checkbox"
                  name="skills-medicine"
                />
                <span className="checkdot__marker"></span>
              </label>
              <p className="abilities__subtitle">Медицина</p>
            </div>
            <div className="abilities__number-item">
              <p className="abilities__subnumber">+4</p>
            </div>
          </div>
          <div className="abilities__item">
            <div className="abilities__text-item">
              <label className="abilities__label">
                <input
                  className="abilities__input"
                  id="checkdot-skills-insight"
                  type="checkbox"
                  name="skills-insight"
                />
                <span className="checkdot__marker"></span>
              </label>
              <p className="abilities__subtitle">Проницательность</p>
            </div>
            <div className="abilities__number-item">
              <p className="abilities__subnumber">+4</p>
            </div>
          </div>
          <div className="abilities__item">
            <div className="abilities__text-item">
              <label className="abilities__label">
                <input
                  className="abilities__input"
                  id="checkdot-skills-animal handling"
                  type="checkbox"
                  name="skills-animal handling"
                />
                <span className="checkdot__marker"></span>
              </label>
              <p className="abilities__subtitle">Уход за животными</p>
            </div>
            <div className="abilities__number-item">
              <p className="abilities__subnumber">+4</p>
            </div>
          </div>
        </div>
        <div className="abilities__container">
          <h2 className="abilities__title">
            Харизма
            <span className="abilities__line" />
            <span className="abilities__title-number">XXX</span>
          </h2>
          <div className="abilities__items">
            <div className="abilities__item">
              <div className="abilities__text-item">
                <p className="abilities__subtitle ">проверка</p>
              </div>
              <div className="abilities__number-item">
                <p className="abilities__subnumber">+2</p>
              </div>
            </div>
            <div className="abilities__item">
              <div className="abilities__text-item">
                <label className="abilities__label">
                  <input
                    className="abilities__input"
                    id="checkdot-saves-cha"
                    type="checkbox"
                    name="saves-cha"
                  />
                  <span className="checkdot__marker"></span>
                </label>
                <p className="abilities__subtitle">Спасбросок</p>
              </div>
              <div className="abilities__number-item">
                <p className="abilities__subnumber">+4</p>
              </div>
            </div>
          </div>
          <div className="abilities__item">
            <div className="abilities__text-item">
              <label className="abilities__label">
                <input
                  className="abilities__input"
                  id="checkdot-skills-performance"
                  type="checkbox"
                  name="skills-performance"
                />
                <span className="checkdot__marker"></span>
              </label>
              <p className="abilities__subtitle">Выступление</p>
            </div>
            <div className="abilities__number-item">
              <p className="abilities__subnumber">+4</p>
            </div>
          </div>
          <div className="abilities__item">
            <div className="abilities__text-item">
              <label className="abilities__label">
                <input
                  className="abilities__input"
                  id="checkdot-skills-intimidation"
                  type="checkbox"
                  name="skills-intimidation"
                />
                <span className="checkdot__marker"></span>
              </label>

              <p className="abilities__subtitle">Запугивание</p>
            </div>
            <div className="abilities__number-item">
              <p className="abilities__subnumber">+4</p>
            </div>
          </div>
          <div className="abilities__item">
            <div className="abilities__text-item">
              <label className="abilities__label">
                <input
                  className="abilities__input"
                  id="checkdot-skills-deception"
                  type="checkbox"
                  name="skills-deception"
                />
                <span className="checkdot__marker"></span>
              </label>
              <p className="abilities__subtitle">Обман</p>
            </div>
            <div className="abilities__number-item">
              <p className="abilities__subnumber">+4</p>
            </div>
          </div>
          <div className="abilities__item">
            <div className="abilities__text-item">
              <label className="abilities__label">
                <input
                  className="abilities__input"
                  id="checkdot-skills-persuasion"
                  type="checkbox"
                  name="skills-persuasion"
                />
                <span className="checkdot__marker"></span>
              </label>
              <p className="abilities__subtitle">Убеждение</p>
            </div>
            <div className="abilities__number-item">
              <p className="abilities__subnumber">+4</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Abilities;
