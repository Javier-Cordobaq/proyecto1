import React from 'react' 
import style from '../SeccionCarrusel/SeccionCarrusel.module.css'
import Slider from 'infinite-react-carousel';
import imagen1 from '../../Imagenes/1.png'
import imagen2 from '../../Imagenes/2.png'
import imagen3 from '../../Imagenes/3.png'
import sliderTexto from '../../Imagenes/sliderTexto.png'
import sliderCohete from '../../Imagenes/sliderCohete.png'
import Map from '../maps/Map';

const SeccionCarrusel = () => {

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

export default SeccionCarrusel