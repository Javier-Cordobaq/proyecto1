import React from 'react'
import style from '../SeccionImagenes/SeccionImagenes.module.css'
import imagenLeft from '../../Imagenes/TorrePalomitas.png'
import imagenRight from '../../Imagenes/Paquetes.png'
import { useSelector } from 'react-redux'


const SeccionImagenes = () => {

    const idioma = useSelector(state => state.idioma)

  return (
    <div className={style.container}>

    <div className={style.prueba}>

        <div className={style.globalContainer}>
            <div data-aos="zoom-in-right" data-aos-duration="1100" className={style.contenedorLeft}>
                <div className={style.imagenLeft}>
                    
                </div>
                {idioma === 'español' ? 
                <div className={style.text}>
                <h1>Las golosinas ecuatorianas 
                    nunca fueron tan saludables
                </h1>
                <p>
                
                Los Ranger Snacks son la golosina más saludable del mercado. 
                Los canguiles Ranger Pops no tienen grasas saturadas ni endulzantes 
                artificiales, mientras que los Ranger Rings obtienen todos los beneficios 
                de la quinoa y las propiedades de la chía. <br/><br/>
                Ambos son bajos en gluten, no contienen TACC ni grasas saturadas y son productos veganos
                :
                </p> 
                </div>
                :
                <div className={style.text}>
                    <h1>
                        Ecuadorian treats never tasted so good
                    </h1>
                    <p>
                    Ranger Snacks are one of the most healthy snacks on the market. 
                    Our popcorns have no fat nor artificial sweetener, while our Ranger 
                    Rings are quinoa based and get a variety of properties from it. <br/><br/>

                    Both have little to no glute, TACC, and are 100% vegan.
                    </p> 

                </div>
                }
                
            </div>
            <div data-aos="zoom-in-left" data-aos-duration="1100" className={style.imagenRight}>
             
            </div>
        </div>

        </div>

    </div>
  )
}

export default SeccionImagenes