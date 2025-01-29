import './App.css'

import Img2 from './assets/img2.jpg'
import CondicionalRender from './components/CondicionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'

function App() {


  return (
    <>
      <div className='App'>
        <h1>Avançando em React</h1>
        <div>
          <img src="/img1.jpg" alt="Gatinho fofo" />
        </div>
        <div>
          <img src={Img2} alt="Outro gatinho fofo" />
        </div>
        <ManageData/>
        <ListRender/>
        <CondicionalRender/>
      </div>
    </>
  )
}

export default App
