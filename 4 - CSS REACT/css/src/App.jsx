import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  const n = 15;
  const [name] = useState("Diogo")
  const redTitle =  true

  return (
    <>
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS de Componente */}
      <MyComponent />
      <p>Este paragrafo é do app.jsx</p>
      <p className="my-comp-paragraph">Este também é do componente</p>
      {/* Inline CSS */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>
      {/* CSS Inline Dinamico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS Dinãmico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS Dinãmico
      </h2>
      <h2 style={name === "Diogo" ? { color: "green", backgroundColor: "#000" } : null}>
        Teste nome
      </h2>
      {/* Classe Dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter classe dinamica</h2>
      {/* CSS Modules */}
      <Title/>
    </>
  );
}

export default App;
