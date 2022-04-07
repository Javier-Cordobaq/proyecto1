import react from 'react';
import style from './Header.module.css'
import imagen from '../../Imagenes/paqueHeader.png'
import { useSelector } from 'react-redux';
export default function Header() {
    const idioma = useSelector(state => state.idioma)
    return (
        <div id='acerca' className={style.contenedorHeader}>
            <div className={style.gridHeader}>
                <div className={style.contenidoHeader}>
                    <div className={style.headerTexto}>
                        <h1>{idioma === "español" ? "El snacking cambió." : "Snacking changed."}</h1>
                        <div>
                            <h3 className={style.uno}>{idioma === "español" ?"Te proponemos una nueva manera de consumir snacks para ti y tu familia.": "We offer a new way of snacking for you and your family." }</h3>
                            <h3 className={style.dos}>{idioma === "español" ? "Conoce nuestros #WonderSnacks, saludables y deliciosos.": "Try our tasty and healthy #WonderSnacs"}</h3>
                        </div>
                        <button className={style.botonHeader}>{idioma === "español" ? "Comprar" :" Buy"} <span class="material-icons-two-tone">arrow_forward</span></button>
                    </div>

                </div>
                <div className={style.imagenHeader}>
                    <img src={imagen} alt="" />
                </div>
            </div>
        </div>
    );
}