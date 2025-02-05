import "./App.css";

import Img2 from "./assets/img2.jpg";
import CondicionalRender from "./components/CondicionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails"

function App() {
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
        {/*props*/}
        <ShowUserName name="Diogo" />
        {/*destructuing props*/}
        <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>
        {/*reaproveitando*/}
        <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true}/>
        <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false}/>
      </div>
    </>
  );
}

export default App;
