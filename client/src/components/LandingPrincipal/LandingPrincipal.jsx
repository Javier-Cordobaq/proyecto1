import React from 'react'
import Nav from '../../components/Nav/Nav';
import Header from '../../components/Header/Header';
import SeccionAmarilla from '../../components/SeccionAmarilla/SeccionAmarilla';
import SeccionImagenes from '../SeccionImagenes/SeccionImagenes';
import SeccionVideo from '../seccionVideo/SeccionVideo';
import SeccionProductos from '../SeccionProductos/SeccionProductos';
import style from '../LandingPrincipal/LandingPrincipal.module.css'
import Footer from '../Footer/Footer'
import Suscribirse from '../Suscribirse/Suscribirse';
import SeccionCarrusel from '../SeccionCarrusel/SeccionCarrusel';

const LandingPrincipal = () => {
  return (
    <div className={style.globalCont}>
      <Nav/>
      <div><Header/></div>
      <div><SeccionAmarilla/></div>
      <div><SeccionImagenes/></div>
      <div><SeccionVideo/></div>
      <SeccionCarrusel/>
      <div><SeccionProductos/></div>
      <div><Suscribirse/></div>
      <div><Footer/></div>
    </div>
  )
}

export default LandingPrincipal