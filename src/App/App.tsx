import React, { useState } from "react";
import Character from "../Character/Character";
import { Class } from "../Class/Class";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Parameters } from "../Parameters/Parameters";
import { Race } from "../Race/Race";
import "./App.css";
import { IParameter } from "../Types/Types";
import Abilities from "../Abilities/Abilities";
import { Staff } from "../Staff/Staff";

function App() {
  const [race, setRace] = useState<string>("Подлежит выбору");
  const [parameters, setParameters] = useState<IParameter[]>([]);
  const [characterClass, setCharacterClass] =
    useState<string>("Подлежит выбору");

  return (
    <div className="App">
      <Header />
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <section className="info">
        <div className="info__heading">
          <h1 className="info__title">Костёр</h1>
          <p className="info__subtitle">
            игра про мир, который себя не помнит и теней, которые обрели форму.
            Тени помнят лишь базовые вещи, ничего конкретного про себя и своё
            прошлое, но ими движет желание узнать, что таится в темноте и что
            ещё сохранилось.
          </p>
        </div>
        <p className="info__subheading">
          <span className="info__maintext">Вы — обрётшие тело тени. </span>
          Вы не беспокоитесь о смерти, так как вам, кажется, нечего терять, но
          ваше любопытство и желание действовать так сильны, что смерти вы
          будете избегать.{" "}
          <span className="info__text">
            Эта игра рассчитана на выживание, исследование и бои с вызовом для
            игроков. Цель большинства сессий — добыть что-то извне и вернуться.
            Это могут быть знания, ресурсы или даже новые друзья.
          </span>{" "}
          Для записи на игру заходите:{" "}
          <a
            href="https://t.me/erevankoster"
            target="_blank"
            rel="noreferrer"
            className="info__link"
          >
            t.me/erevankoster
          </a>
          . И помните:
          <span className="info__important">
            {" "}
            персонажи могут окончательно умереть. Даже очень любимые.{" "}
          </span>
          <span className="info__more">
            {" "}
            Даже те, которые нравятся мастеру.
          </span>
        </p>
        <div className="info__description">
          <p className="info__subheading">
            <span className="info__maintext">Создание персонажа:</span> прежде,
            чем начать играть в Костёр, вам нужен персонаж. Создаётся он первого
            уровня, а развивается — участвуя в игровых сессиях. Расы в мире
            Костра свои, и хотя они мало помнят о своём мире, они различают друг
            друга и понимают свои различия. После выбора расы на любом этапе
            создания персонажа подберите ему имя, примеры имён указаны в
            описании рас
          </p>
        </div>
      </section>

      <Race setRace={setRace} />
      <Parameters setParameters={setParameters} />
      <Class setCharacterClass={setCharacterClass} />
      {/* <Character race={race} parameters={parameters} /> */}
      <Abilities />
      <Staff />
      <Footer />
    </div>
  );
}

export default App;
