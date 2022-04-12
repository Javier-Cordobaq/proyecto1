import React from 'react' 
import style from '../SeccionCarrusel/SeccionCarrusel.module.css'
import Slider from 'infinite-react-carousel';
import imagen1 from '../../Imagenes/1.png'
import imagen2 from '../../Imagenes/2.png'
import imagen3 from '../../Imagenes/3.png'

const SeccionCarrusel = () => {

    const array = [
        {
            img: imagen1
        },
        {
            img: imagen2
        },
        {
            img: imagen3
        }
    ]

  return (
    <div id='puntos' className={style.globalContainer}>
        <h1>Encuentra Ranger Snaks en tus tiendas favoritas</h1>
         <Slider 
         className={style.slider}
         autoplay 
         autoplaySpeed={4200}
         duration={300}
         arrows={false}
      /*    centerMode
         adaptiveHeight */
         centerPadding={50}
         >

            {
            array.map(c => <div className={style.item}><img src={c.img} alt='' /></div>) 
            }
         
        </Slider>
    </div>
  )
}

export default SeccionCarrusel