import './App.css';
import { Route, Routes } from 'react-router-dom'
import LandingPrincipal from './components/LandingPrincipal/LandingPrincipal';
import SubirProductos from './components/SubirProductos/SubirProductos';
import CompraEfectiva from './components/CompraEfectiva/CompraEfectiva';
import Detail from './components/Detail/Detail'
import LogIn from './components/LogIn/LogIn';
import { useSelector } from 'react-redux';
import { Suspense, lazy } from 'react'
import Spinner from './components/Spinner/Spinner';

const Blog = lazy(() => import('./pages/Blog/Blog'))
const StorieDetail = lazy(() => import('./pages/StorieDetail/StorieDetail'))
const Tienda = lazy(() => import('./components/Tienda/Tienda'))

function App() {

  const login = useSelector(c => c.login)

  return (
    <Suspense fallback={<Spinner/>}>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<LandingPrincipal />} />
          <Route exact path='/tienda' element={<Tienda />} />
          <Route exact path='/admin' element={login !== true ? <LogIn /> : <SubirProductos />} />
          <Route exact path='/carrito/:_id' element={<Detail />} />
          <Route exact path='/Pagado' element={<CompraEfectiva />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/storie/:id' element={<StorieDetail />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
