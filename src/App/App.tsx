import React from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Parameters } from "../Parameters/Parameters";
import { Race } from "../Race/Race";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="body">
        <h1 className="body__title">Костёр</h1>
        <p className="body__subtitle">
          игра про мир, который себя не помнит, и теней, которые обрели форму,
          но не знают, кто они. Они помнят лишь базовые вещи, ничего конкретного
          про себя и своё прошлое. Ими движет желание узнать, что таится в
          темноте и что ещё сохранилось.
        </p>
      </section>

      <Race />
      <Footer />
      <Parameters />
    </div>
  );
}

export default App;
