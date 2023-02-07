import React, { useState } from "react";
import Character from "../Character/Character";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Parameters } from "../Parameters/Parameters";
import { Race } from "../Race/Race";
import "./App.css";

function App() {
  const [race, setRace] = useState<string>("Подлежит выбору");

  return (
    <div className="App">
      <Header />
      <section className="info">
        <h1 className="info__title">Костёр</h1>
        <p className="info__subtitle">
          игра про мир, который себя не помнит и теней, которые обрели форму.
          Тени помнят лишь базовые вещи, ничего конкретного про себя и своё
          прошлое, но ими движет желание узнать, что таится в темноте и что ещё
          сохранилось.
        </p>
      </section>

      <Race setRace={setRace} />
      <Parameters />
      {/* <Character race={race} /> */}
      <Footer />
    </div>
  );
}

export default App;
