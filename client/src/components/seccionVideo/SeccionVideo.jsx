// English Images
import BrussTitle from '../../assets/English_Images/BrussTitle.webp'
import BrussDescription from '../../assets/English_Images/BrussDescription.webp'
// Spnaish Images
import style from './SeccionVideo.module.css'
import burbuja from '../../ImagenesNew/Ranger_Elementos_Web-12.webp'
import fondo from '../../ImagenesNew/Ranger-Elementos-Web-11.webp'
import title from '../../ImagenesNew/Ranger_Elementos_Web-13.webp'
import desc from '../../ImagenesNew/Ranger_Elementos_Web-14.webp'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export default function SeccionVideo() {

    const idioma = useSelector(state => state.idioma)
    return (
        <div id='Bruss' className={style.container}>
            <div className={style.fondo}>
                <div className={style.burbuja}>
                    <div className={style.title}>
                        <img src={`${idioma == 'español' ? title : BrussTitle}`} alt='' />
                    </div>
                    <div className={style.desc}>
                        <img src={`${idioma == 'español' ? desc : BrussDescription}`} alt='' />
                    </div>
                    <Link to='/blog'><button>{`${idioma == 'español' ? 'Conoce más de Bruss' : 'Learn more about Bruss'}`}</button></Link>
                </div>
            </div>
        </div>
    )
}


{/*   <div className={style.gridVideo}>
          <div data-aos="zoom-in-right" data-aos-duration="1100" className={style.TextoSeccion}>
              <h1>{idioma === "español" ? "Te presentamos a Bruss" : "Meet Bruss"}</h1>
              <div className={style.parrafo}>
                  <p>
                  {idioma === "español" ?
                  "Bruss es un joven astronauta que ama los Ranger Snacks. Principalmente por su sabor, pero también porque lo mantienen saludable y fuerte para sus aventuras."
                  :
                  "Bruss is a young astronaut who loves his Ranger Snacks. Mainly because of their flavor, but also because they keep him ready for any adventure." 
              }
                  </p>
                  <p>
                  {idioma === "español" ?
                      "No importa qué esté haciendo, siempre tiene su funda de Ranger Pops o Rings a la mano."
                      :
                      "It doesn’t matter where he is at, Bruss always carries a bag of Ranger Pops or Rings with him."
                  }
                  </p>
              </div>
              <a href='https://dumondesnacks.com/blog/' target="_blank"><button className={style.botonConocer}>{idioma === "español" ? "Conoce más de Bruss" : "Learn more about Bruss"}  <span class="material-icons-two-tone">arrow_forward</span></button></a>
          </div>
          <div className={style.video}>
          <video loop autoPlay muted>
              <source src={video} type="video/mp4" />
          </video>
          </div>
      </div> */}