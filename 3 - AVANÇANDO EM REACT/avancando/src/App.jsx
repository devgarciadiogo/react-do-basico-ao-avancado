import "./App.css";
import { useState } from "react";

import Img2 from "./assets/img2.jpg";
import CondicionalRender from "./components/CondicionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragments from "./components/Fragments";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

function App() {
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "Kia", color: "Branco", newCar: false, km: 34343 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 2344 },
  ];

  function showMessage() {
    console.log("Evento de componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const users = [
    { id: 1, name: "Diogo", age: 21, job: "Programador" },
    { id: 2, name: "Alice", age: 20, job: "Psicologa" },
    { id: 3, name: "Thiago", age: 20, job: "Publicitario" },
  ];

  return (
    <>
      <div className="App">
        <h1>Avançando em React</h1>
        <div>
          <img src="/img1.jpg" alt="Gatinho fofo" />
        </div>
        <div>
          <img src={Img2} alt="Outro gatinho fofo" />
        </div>
        <ManageData />
        <ListRender />
        <CondicionalRender />

        {/* Props */}
        <ShowUserName name="Diogo" />

        {/* Destructuring props */}
        <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />

        {/* Reaproveitamento de componente */}
        <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true} />
        <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false} />

        {/* Loop em array de objetos */}
        {cars.map((car) => (
          <CarDetails
            key={car.id} // Adicionando uma chave única
            brand={car.brand}
            color={car.color}
            km={car.km}
            newCar={car.newCar}
          />
        ))}
        {/* fragment */}
        <Fragments propFragment="teste" />
        {/* children */}
        <Container myValue="testing">
          <p>Esté é o conteudo!</p>
        </Container>
        {/* executar função */}
        <ExecuteFunction myFunction={showMessage} />
        {/* state lift */}
        <Message msg={message} />
        <ChangeMessageState handleMessage={handleMessage} />
        {/* desafio 4 */}
        {users.map((user) => (
          <UserDetails
            key={user.id}
            name={user.name}
            job={user.job}
            age={user.age}
          />
        ))}
      </div>
    </>
  );
}

export default App;
