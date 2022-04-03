import './App.css';
import { Route, Routes } from 'react-router-dom'
import LandingPrincipal from './components/LandingPrincipal/LandingPrincipal';
import Tienda from './components/Tienda/Tienda';

function App() {
  return (
    <div className="App">  
      <Routes>

        <Route exact path='/' element={<LandingPrincipal/>} />

        <Route exact path='/tienda' element={<Tienda/>} />

      </Routes>
    </div>
  );
}

export default App;
