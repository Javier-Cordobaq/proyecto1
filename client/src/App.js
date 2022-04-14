import './App.css';
import { Route, Routes } from 'react-router-dom'
import LandingPrincipal from './components/LandingPrincipal/LandingPrincipal';
import Tienda from './components/Tienda/Tienda';
import SubirProductos from './components/SubirProductos/SubirProductos';
import Carrito from './components/Carrito/Carrito';
import CompraEfectiva from './components/CompraEfectiva/CompraEfectiva';
import SeccionVideo from './components/seccionVideo/SeccionVideo';
import Detail from './components/Detail/Detail'
import LogIn from './components/LogIn/LogIn';
import { useSelector } from 'react-redux';

function App() {

const login = useSelector(c => c.login)

  return (
    <div className="App">  
      <Routes>

        <Route exact path='/' element={<LandingPrincipal/>} />

        <Route exact path='/tienda' element={<Tienda/>} />

        <Route exact path='/admin' element={login !== true ? <LogIn/> : <SubirProductos/> }/>

        <Route exact path='/carrito/:_id' element={<Detail/>}/>

        <Route exact path='/Pagado' element={<CompraEfectiva/>}/>

      </Routes>
    </div>
  );
}

export default App;
