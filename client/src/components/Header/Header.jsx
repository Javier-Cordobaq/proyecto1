import style from './Header.module.css'
//Imagenes Ingles 
import BannerEnglish from '../../assets/English_Images/Header-English.webp'
import TextMobile from '../../assets/English_Images/TextMobileEnglish.webp'
// Imagenes Español
import Banner from '../../ImagenesNew/Ranger-Elementos-Web_Mesa-de-trabajo-1.webp'
import TextoMobile from '../../ImagenesNew/Ranger\ Elementos\ Web-02.webp'
import FotoMobile from '../../ImagenesNew/Ranger-Elementos-Web-03.webp'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {

    const idioma = useSelector(state => state.idioma)

    return (
        <div id='acerca' className={style.contenedorHeader}>
            <div className={style.contWeb}>
                {idioma === 'español' ? <img src={Banner} alt='' /> : <img loading='lazy' src={BannerEnglish} alt='' />}
                <Link to='/tienda'><button>COMPRAR</button></Link>
            </div>
            <div className={style.contMovil}>
                <div className={style.contTexto}>
                    <img src={`${idioma === 'español' ? TextoMobile : TextMobile}`} alt='' />
                    <Link to='/tienda'><button>COMPRAR</button></Link>
                </div>
                <div className={style.contImagen}>
                    <img src={FotoMobile} alt='' />
                </div>
            </div>
        </div>
    );
}


{/*    <div className={style.gridHeader}>
           <div className={style.contenidoHeader}>
               <div data-aos-duration="1500" data-aos="zoom-in-right" className={style.headerTexto}>
                   <h1>{idioma === "español" ? "El snacking cambió." : "Snacking changed."}</h1>
                   <div>
                       <h3 className={style.uno}>{idioma === "español" ?"Te proponemos una nueva manera de consumir snacks para ti y tu familia.": "We offer a new way of snacking for you and your family." }</h3>
                       <h3 className={style.dos}>{idioma === "español" ? "Conoce nuestros #WonderSnacks, saludables y deliciosos.": "Try our tasty and healthy #WonderSnacs"}</h3>
                   </div>
                   <Link to='/tienda'>
                   <button className={style.botonHeader}>{idioma === "español" ? "Comprar" :" Buy"} <span class="material-icons-two-tone">arrow_forward</span></button>
                   </Link>
               </div>

           </div>
           <div className={style.imagenHeader}>
               <img  data-aos-duration="1500" data-aos="zoom-in-left" src={imagen} alt="Not Found" />
           </div>
       </div> */}