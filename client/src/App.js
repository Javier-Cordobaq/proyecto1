import './App.css';
import { Route, Routes } from 'react-router-dom'
import LandingPrincipal from './components/LandingPrincipal/LandingPrincipal';
import Tienda from './components/Tienda/Tienda';
import SubirProductos from './components/SubirProductos/SubirProductos';
import Carrito from './components/Carrito/Carrito';
import CompraEfectiva from './components/CompraEfectiva/CompraEfectiva';


function App() {
  function fetchApi() {
    fetch('http://localhost:3001/')
      .then(response => response.json())
      .then(data => console.log(data))
  }
  fetchApi()
  return (
    <div className="App">  
      <Routes>

        <Route exact path='/' element={<LandingPrincipal/>} />

        <Route exact path='/tienda' element={<Tienda/>} />

        <Route exact path='/subirproducto' element={<SubirProductos/>}/>

        <Route exact path='/carrito' element={<Carrito/>}/>

        <Route exact path='/Pagado' element={<CompraEfectiva/>}/>

      </Routes>
    </div>
  );
}

export default App;
