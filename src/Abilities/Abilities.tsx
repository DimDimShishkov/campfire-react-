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

      <div className="abilities__container">
        <div className="digital-ability">
          <h2 className="digital-ability__name">
            <a className="digital-ability__name-link" href="/">
              Сила
              <span className="digital-ability__delimiter"></span>
              <span className="digital-ability__score">15</span>
            </a>
          </h2>
          <div className="digital-ability__checks">
            <div className="digital-skill digital-skill_small">
              <div className="digital-skill__wrap">
                <a className="digital-skill__label" href="/">
                  проверка
                </a>
              </div>
              <button
                className="roller digital-check digital-skill__check active"
                type="button"
              >
                <p className="digital-check__label" data-check="2">
                  +2
                </p>
              </button>
            </div>
            <div className="digital-skill digital-skill_small">
              <div className="digital-skill__wrap">
                <label className="checkdot digital-skill__checkdot">
                  <input
                    className="checkdot__input"
                    id="checkdot-saves-str"
                    type="checkbox"
                    name="saves-str"
                  />
                  <span className="checkdot__marker"></span>
                </label>
                <a className="digital-skill__label" href="/">
                  Спасбросок
                </a>
              </div>
              <button
                className="roller digital-check digital-skill__check active"
                type="button"
              >
                <p className="digital-check__label">+4</p>
              </button>
            </div>
          </div>
          <div className="digital-skill">
            <div className="digital-skill__wrap">
              <label className="checkdot digital-skill__checkdot">
                <input
                  className="checkdot__input"
                  id="checkdot-skills-athletics"
                  type="checkbox"
                  name="skills-athletics"
                />
                <span className="checkdot__marker"></span>
              </label>
              <a className="digital-skill__label" href="/">
                Атлетика
              </a>
            </div>
            <button
              className="roller digital-check digital-skill__check active"
              type="button"
            >
              <p className="digital-check__label">+4</p>
            </button>
          </div>
        </div>
        <div className="digital-ability">
          <h2 className="digital-ability__name">
            <a
              className="digital-ability__name-link"
              href="/characters/digital/63fc763307455375cc521098/?modal=ability"
            >
              Ловкость<span className="digital-ability__delimiter"></span>
              <span className="digital-ability__score">13</span>
            </a>
          </h2>
          <div className="digital-ability__checks">
            <div className="digital-skill digital-skill_small">
              <div className="digital-skill__wrap">
                <a
                  className="digital-skill__label"
                  href="/characters/digital/63fc763307455375cc521098/?modal=ability"
                >
                  проверка
                </a>
              </div>
              <button
                className="roller digital-check digital-skill__check active"
                type="button"
              >
                <p className="digital-check__label" data-check="1">
                  +1
                </p>
              </button>
            </div>
            <div className="digital-skill digital-skill_small">
              <div className="digital-skill__wrap">
                <label className="checkdot digital-skill__checkdot">
                  <input
                    className="checkdot__input"
                    id="checkdot-saves-dex"
                    type="checkbox"
                    name="saves-dex"
                  />
                  <span className="checkdot__marker"></span>
                </label>
                <a
                  className="digital-skill__label"
                  href="/characters/digital/63fc763307455375cc521098/?modal=ability"
                >
                  Спасбросок
                </a>
              </div>
              <button
                className="roller digital-check digital-skill__check active"
                type="button"
              >
                <p className="digital-check__label">+1</p>
              </button>
            </div>
          </div>
          <div className="digital-skill">
            <div className="digital-skill__wrap">
              <label className="checkdot digital-skill__checkdot">
                <input
                  className="checkdot__input"
                  id="checkdot-skills-acrobatics"
                  type="checkbox"
                  name="skills-acrobatics"
                />
                <span className="checkdot__marker"></span>
              </label>
              <a
                className="digital-skill__label"
                href="/characters/digital/63fc763307455375cc521098/?modal=skill"
              >
                Акробатика
              </a>
            </div>
            <button
              className="roller digital-check digital-skill__check active"
              type="button"
            >
              <p className="digital-check__label">+1</p>
            </button>
          </div>
          <div className="digital-skill">
            <div className="digital-skill__wrap">
              <label className="checkdot digital-skill__checkdot">
                <input
                  className="checkdot__input"
                  id="checkdot-skills-sleight of hand"
                  type="checkbox"
                  name="skills-sleight of hand"
                />
                <span className="checkdot__marker"></span>
              </label>
              <a
                className="digital-skill__label"
                href="/characters/digital/63fc763307455375cc521098/?modal=skill"
              >
                Ловкость рук
              </a>
            </div>
            <button
              className="roller digital-check digital-skill__check active"
              type="button"
            >
              <p className="digital-check__label">+1</p>
            </button>
          </div>
          <div className="digital-skill">
            <div className="digital-skill__wrap">
              <label className="checkdot digital-skill__checkdot">
                <input
                  className="checkdot__input"
                  id="checkdot-skills-stealth"
                  type="checkbox"
                  name="skills-stealth"
                />
                <span className="checkdot__marker"></span>
              </label>
              <a
                className="digital-skill__label"
                href="/characters/digital/63fc763307455375cc521098/?modal=skill"
              >
                Скрытность
              </a>
            </div>
            <button
              className="roller digital-check digital-skill__check active"
              type="button"
            >
              <p className="digital-check__label">+1</p>
            </button>
          </div>
        </div>
        <div className="digital-ability">
          <h2 className="digital-ability__name">
            <a className="digital-ability__name-link" href="/">
              Телосложение<span className="digital-ability__delimiter"></span>
              <span className="digital-ability__score">14</span>
            </a>
          </h2>
          <div className="digital-ability__checks">
            <div className="digital-skill digital-skill_small">
              <div className="digital-skill__wrap">
                <a
                  className="digital-skill__label"
                  href="/characters/digital/63fc763307455375cc521098/?modal=ability"
                >
                  проверка
                </a>
              </div>
              <button
                className="roller digital-check digital-skill__check active"
                type="button"
              >
                <p className="digital-check__label" data-check="2">
                  +2
                </p>
              </button>
            </div>
            <div className="digital-skill digital-skill_small">
              <div className="digital-skill__wrap">
                <label className="checkdot digital-skill__checkdot">
                  <input
                    className="checkdot__input"
                    id="checkdot-saves-con"
                    type="checkbox"
                    name="saves-con"
                  />
                  <span className="checkdot__marker"></span>
                </label>
                <a className="digital-skill__label" href="/">
                  Спасбросок
                </a>
              </div>
              <button
                className="roller digital-check digital-skill__check active"
                type="button"
              >
                <p className="digital-check__label">+4</p>
              </button>
            </div>
          </div>
        </div>
        <div className="digital-ability">
          <h2 className="digital-ability__name">
            <a
              className="digital-ability__name-link"
              href="/characters/digital/63fc763307455375cc521098/?modal=ability"
            >
              Интеллект<span className="digital-ability__delimiter"></span>
              <span className="digital-ability__score">11</span>
            </a>
          </h2>
          <div className="digital-ability__checks">
            <div className="digital-skill digital-skill_small">
              <div className="digital-skill__wrap">
                <a
                  className="digital-skill__label"
                  href="/characters/digital/63fc763307455375cc521098/?modal=ability"
                >
                  проверка
                </a>
              </div>
              <button
                className="roller digital-check digital-skill__check active"
                type="button"
              >
                <p className="digital-check__label" data-check="0">
                  0
                </p>
              </button>
            </div>
            <div className="digital-skill digital-skill_small">
              <div className="digital-skill__wrap">
                <label className="checkdot digital-skill__checkdot">
                  <input
                    className="checkdot__input"
                    id="checkdot-saves-int"
                    type="checkbox"
                    name="saves-int"
                  />
                  <span className="checkdot__marker"></span>
                </label>
                <a
                  className="digital-skill__label"
                  href="/characters/digital/63fc763307455375cc521098/?modal=ability"
                >
                  Спасбросок
                </a>
              </div>
              <button
                className="roller digital-check digital-skill__check active"
                type="button"
              >
                <p className="digital-check__label">0</p>
              </button>
            </div>
          </div>
          <div className="digital-skill">
            <div className="digital-skill__wrap">
              <label className="checkdot digital-skill__checkdot">
                <input
                  className="checkdot__input"
                  id="checkdot-skills-investigation"
                  type="checkbox"
                  name="skills-investigation"
                />
                <span className="checkdot__marker"></span>
              </label>
              <a className="digital-skill__label" href="/">
                Анализ
              </a>
            </div>
            <button
              className="roller digital-check digital-skill__check active"
              type="button"
            >
              <p className="digital-check__label">0</p>
            </button>
          </div>
          <div className="digital-skill">
            <div className="digital-skill__wrap">
              <label className="checkdot digital-skill__checkdot">
                <input
                  className="checkdot__input"
                  id="checkdot-skills-history"
                  type="checkbox"
                  name="skills-history"
                />
                <span className="checkdot__marker"></span>
              </label>
              <a className="digital-skill__label" href="/">
                История
              </a>
            </div>
            <button
              className="roller digital-check digital-skill__check active"
              type="button"
            >
              <p className="digital-check__label">0</p>
            </button>
          </div>
          <div className="digital-skill">
            <div className="digital-skill__wrap">
              <label className="checkdot digital-skill__checkdot">
                <input
                  className="checkdot__input"
                  id="checkdot-skills-arcana"
                  type="checkbox"
                  name="skills-arcana"
                />
                <span className="checkdot__marker"></span>
              </label>
              <a className="digital-skill__label" href="/">
                Магия
              </a>
            </div>
            <button
              className="roller digital-check digital-skill__check active"
              type="button"
            >
              <p className="digital-check__label">0</p>
            </button>
          </div>
          <div className="digital-skill">
            <div className="digital-skill__wrap">
              <label className="checkdot digital-skill__checkdot">
                <input
                  className="checkdot__input"
                  id="checkdot-skills-nature"
                  type="checkbox"
                  name="skills-nature"
                />
                <span className="checkdot__marker"></span>
              </label>
              <a className="digital-skill__label" href="/">
                Природа
              </a>
            </div>
            <button
              className="roller digital-check digital-skill__check active"
              type="button"
            >
              <p className="digital-check__label">0</p>
            </button>
          </div>
          <div className="digital-skill">
            <div className="digital-skill__wrap">
              <label className="checkdot digital-skill__checkdot">
                <input
                  className="checkdot__input"
                  id="checkdot-skills-religion"
                  type="checkbox"
                  name="skills-religion"
                />
                <span className="checkdot__marker"></span>
              </label>
              <a className="digital-skill__label" href="/">
                Религия
              </a>
            </div>
            <button
              className="roller digital-check digital-skill__check active"
              type="button"
            >
              <p className="digital-check__label">0</p>
            </button>
          </div>
        </div>
        <div className="digital-ability">
          <h2 className="digital-ability__name">
            <a className="digital-ability__name-link" href="/">
              Мудрость<span className="digital-ability__delimiter"></span>
              <span className="digital-ability__score">11</span>
            </a>
          </h2>
          <div className="digital-ability__checks">
            <div className="digital-skill digital-skill_small">
              <div className="digital-skill__wrap">
                <a
                  className="digital-skill__label"
                  href="/characters/digital/63fc763307455375cc521098/?modal=ability"
                >
                  проверка
                </a>
              </div>
              <button
                className="roller digital-check digital-skill__check active"
                type="button"
              >
                <p className="digital-check__label" data-check="0">
                  0
                </p>
              </button>
            </div>
            <div className="digital-skill digital-skill_small">
              <div className="digital-skill__wrap">
                <label className="checkdot digital-skill__checkdot">
                  <input
                    className="checkdot__input"
                    id="checkdot-saves-wis"
                    type="checkbox"
                    name="saves-wis"
                  />
                  <span className="checkdot__marker"></span>
                </label>
                <a
                  className="digital-skill__label"
                  href="/characters/digital/63fc763307455375cc521098/?modal=ability"
                >
                  Спасбросок
                </a>
              </div>
              <button
                className="roller digital-check digital-skill__check active"
                type="button"
              >
                <p className="digital-check__label">0</p>
              </button>
            </div>
          </div>
          <div className="digital-skill">
            <div className="digital-skill__wrap">
              <label className="checkdot digital-skill__checkdot">
                <input
                  className="checkdot__input"
                  id="checkdot-skills-perception"
                  type="checkbox"
                  name="skills-perception"
                />
                <span className="checkdot__marker"></span>
              </label>
              <a className="digital-skill__label" href="/">
                Восприятие
              </a>
            </div>
            <button
              className="roller digital-check digital-skill__check active"
              type="button"
            >
              <p className="digital-check__label">0</p>
            </button>
          </div>
          <div className="digital-skill">
            <div className="digital-skill__wrap">
              <label className="checkdot digital-skill__checkdot">
                <input
                  className="checkdot__input"
                  id="checkdot-skills-survival"
                  type="checkbox"
                  name="skills-survival"
                />
                <span className="checkdot__marker"></span>
              </label>
              <a className="digital-skill__label" href="/">
                Выживание
              </a>
            </div>
            <button
              className="roller digital-check digital-skill__check active"
              type="button"
            >
              <p className="digital-check__label">0</p>
            </button>
          </div>
          <div className="digital-skill">
            <div className="digital-skill__wrap">
              <label className="checkdot digital-skill__checkdot">
                <input
                  className="checkdot__input"
                  id="checkdot-skills-medicine"
                  type="checkbox"
                  name="skills-medicine"
                />
                <span className="checkdot__marker"></span>
              </label>
              <a className="digital-skill__label" href="/">
                Медицина
              </a>
            </div>
            <button
              className="roller digital-check digital-skill__check active"
              type="button"
            >
              <p className="digital-check__label">0</p>
            </button>
          </div>
          <div className="digital-skill">
            <div className="digital-skill__wrap">
              <label className="checkdot digital-skill__checkdot">
                <input
                  className="checkdot__input"
                  id="checkdot-skills-insight"
                  type="checkbox"
                  name="skills-insight"
                />
                <span className="checkdot__marker"></span>
              </label>
              <a className="digital-skill__label" href="/">
                Проницательность
              </a>
            </div>
            <button
              className="roller digital-check digital-skill__check active"
              type="button"
            >
              <p className="digital-check__label">0</p>
            </button>
          </div>
          <div className="digital-skill">
            <div className="digital-skill__wrap">
              <label className="checkdot digital-skill__checkdot">
                <input
                  className="checkdot__input"
                  id="checkdot-skills-animal handling"
                  type="checkbox"
                  name="skills-animal handling"
                />
                <span className="checkdot__marker"></span>
              </label>
              <a className="digital-skill__label" href="/">
                Уход за животными
              </a>
            </div>
            <button
              className="roller digital-check digital-skill__check active"
              type="button"
            >
              <p className="digital-check__label">0</p>
            </button>
          </div>
        </div>
        <div className="digital-ability">
          <h2 className="digital-ability__name">
            <a className="digital-ability__name-link" href="/">
              Харизма<span className="digital-ability__delimiter"></span>
              <span className="digital-ability__score">8</span>
            </a>
          </h2>
          <div className="digital-ability__checks">
            <div className="digital-skill digital-skill_small">
              <div className="digital-skill__wrap">
                <a
                  className="digital-skill__label"
                  href="/characters/digital/63fc763307455375cc521098/?modal=ability"
                >
                  проверка
                </a>
              </div>
              <button
                className="roller digital-check digital-skill__check active"
                type="button"
              >
                <p className="digital-check__label" data-check="-1">
                  −1
                </p>
              </button>
            </div>
            <div className="digital-skill digital-skill_small">
              <div className="digital-skill__wrap">
                <label className="checkdot digital-skill__checkdot">
                  <input
                    className="checkdot__input"
                    id="checkdot-saves-cha"
                    type="checkbox"
                    name="saves-cha"
                  />
                  <span className="checkdot__marker"></span>
                </label>
                <a className="digital-skill__label" href="/">
                  Спасбросок
                </a>
              </div>
              <button
                className="roller digital-check digital-skill__check active"
                type="button"
              >
                <p className="digital-check__label">−1</p>
              </button>
            </div>
          </div>
          <div className="digital-skill">
            <div className="digital-skill__wrap">
              <label className="checkdot digital-skill__checkdot">
                <input
                  className="checkdot__input"
                  id="checkdot-skills-performance"
                  type="checkbox"
                  name="skills-performance"
                />
                <span className="checkdot__marker"></span>
              </label>
              <a className="digital-skill__label" href="/">
                Выступление
              </a>
            </div>
            <button
              className="roller digital-check digital-skill__check active"
              type="button"
            >
              <p className="digital-check__label">−1</p>
            </button>
          </div>
          <div className="digital-skill">
            <div className="digital-skill__wrap">
              <label className="checkdot digital-skill__checkdot">
                <input
                  className="checkdot__input"
                  id="checkdot-skills-intimidation"
                  type="checkbox"
                  name="skills-intimidation"
                />
                <span className="checkdot__marker"></span>
              </label>
              <a className="digital-skill__label" href="/">
                Запугивание
              </a>
            </div>
            <button
              className="roller digital-check digital-skill__check active"
              type="button"
            >
              <p className="digital-check__label">−1</p>
            </button>
          </div>
          <div className="digital-skill">
            <div className="digital-skill__wrap">
              <label className="checkdot digital-skill__checkdot">
                <input
                  className="checkdot__input"
                  id="checkdot-skills-deception"
                  type="checkbox"
                  name="skills-deception"
                />
                <span className="checkdot__marker"></span>
              </label>
              <a className="digital-skill__label" href="/">
                Обман
              </a>
            </div>
            <button
              className="roller digital-check digital-skill__check active"
              type="button"
            >
              <p className="digital-check__label">−1</p>
            </button>
          </div>
          <div className="digital-skill">
            <div className="digital-skill__wrap">
              <label className="checkdot digital-skill__checkdot">
                <input
                  className="checkdot__input"
                  id="checkdot-skills-persuasion"
                  type="checkbox"
                  name="skills-persuasion"
                />
                <span className="checkdot__marker"></span>
              </label>
              <a className="digital-skill__label" href="/">
                Убеждение
              </a>
            </div>
            <button
              className="roller digital-check digital-skill__check active"
              type="button"
            >
              <p className="digital-check__label">−1</p>
            </button>
          </div>
        </div>
        <div className="digital__slide-container digital__slide-passives">
          <p className="digital-passives__title">Пассивные чувства</p>
          <div className="digital-passives">
            <div className="digital-skill digital-skill_small digital-skill_full digital-skill_reversed digital-skill_disabled">
              <div className="digital-skill__wrap">
                <a className="digital-skill__label" href="/">
                  Мудрость (Восприятие)
                </a>
              </div>
              <button
                className="roller digital-check digital-skill__check active"
                type="button"
              >
                <p className="digital-check__label">10</p>
              </button>
            </div>
            <div className="digital-skill digital-skill_small digital-skill_full digital-skill_reversed digital-skill_disabled">
              <div className="digital-skill__wrap">
                <a className="digital-skill__label" href="/">
                  Мудрость (Проницательность)
                </a>
              </div>
              <button
                className="roller digital-check digital-skill__check active"
                type="button"
              >
                <p className="digital-check__label">10</p>
              </button>
            </div>
            <div className="digital-skill digital-skill_small digital-skill_full digital-skill_reversed digital-skill_disabled">
              <div className="digital-skill__wrap">
                <a className="digital-skill__label" href="/">
                  Интеллект (Анализ)
                </a>
              </div>
              <button
                className="roller digital-check digital-skill__check active"
                type="button"
              >
                <p className="digital-check__label">10</p>
              </button>
            </div>
          </div>
          <div className="digital-text-block undefined ">
            <div className="digital-text-block__controls">
              <button className="digital-text-block__label" type="button">
                Прочие владения и языки
              </button>
            </div>
            <div className="digital-text-block__textarea"></div>
            <a
              className="digital-text-block__edit-note"
              href="/characters/digital/63fc763307455375cc521098/?modal=text-block"
            >
              <svg
                enable-background="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <rect fill="none" height="24" width="24"></rect>
                <path d="M3,10h11v2H3V10z M3,8h11V6H3V8z M3,16h7v-2H3V16z M18.01,12.87l0.71-0.71c0.39-0.39,1.02-0.39,1.41,0l0.71,0.71 c0.39,0.39,0.39,1.02,0,1.41l-0.71,0.71L18.01,12.87z M17.3,13.58l-5.3,5.3V21h2.12l5.3-5.3L17.3,13.58z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Abilities;
