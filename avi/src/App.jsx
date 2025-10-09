import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Nav from "./Nav";
import './App.css'
import BienvenidaTest from "./BienvenidaTest";
import Test from "./Test";
import Registro from "./Registro";
import Resultado from "./Resultado";
import Programas from "./Programas";
import Mapa from "./Mapa";
import Login from "./Login";
import Inicio from "./Inicio";

function App() {

  return (
      <div>
        <BrowserRouter>
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<Inicio></Inicio>}></Route>
            <Route path="/bienvenidatest" element={<BienvenidaTest></BienvenidaTest>}></Route>
            <Route path="/test" element={<Test></Test>}></Route>
            <Route path="/registro" element={<Registro></Registro>}></Route>
            <Route path="/resultado" element={<Resultado></Resultado>}></Route>
            <Route path="/programas" element={<Programas></Programas>}></Route>
            <Route path="/mapa" element={<Mapa></Mapa>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
