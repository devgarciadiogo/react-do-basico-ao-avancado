import { useState } from "react";

const CondicionalRender = () => {
  const [x] = useState(false);

  const [name, setName] = useState("Alice");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso!</p>}
      <h1>If ternario</h1>
      {name === "Diogo" ? (
        <div>
          <p>O nome é Diogo</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado!</p>
        </div>
      )}
      <button onClick={() => setName("Diogo")}>Clique aqui</button>
    </div>
  );
};

export default CondicionalRender;
