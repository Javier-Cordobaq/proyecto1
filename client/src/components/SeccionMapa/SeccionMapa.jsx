import React from 'react'
import style from './SeccionMapa.module.css'
import sliderTexto from '../../Imagenes/sliderTexto.png'
import sliderCohete from '../../Imagenes/sliderCohete.png'
import Map from '../maps/Map';

const SeccionMapa = () => {

  return (
    <div className={style.fondoContainer}>
      <div id='puntos' className={style.globalContainer}>
        <div className={style.imgContainers}>
          <img className={style.imgTexto} src={sliderTexto} alt="" />
          <img className={style.imgCohete} src={sliderCohete} alt="" />
        </div>
        <div className={style.sliderContainer}>
          <Map />
        </div>
      </div>
    </div>
  )
}

export default SeccionMapa