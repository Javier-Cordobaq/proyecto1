import react from 'react';
import style from './Header.module.css'
import imagen from '../../Imagenes/Mano.png'
export default function Header() {
    return (
        <div className={style.contenedorHeader}>
            <div className={style.gridHeader}>
                <div className={style.contenidoHeader}>
                    <div className={style.headerTexto}>
                        <h1>El snacking cambió.</h1>
                        <div>
                            <h3 className={style.uno}>Te proponemos una nueva manera de consumir snacks para ti y tu familia.</h3>
                            <h3 className={style.dos}>Conoce nuestros #WonderSnacks, saludables y deliciosos.</h3>
                        </div>
                        <button className={style.botonHeader}>Comprar <span class="material-icons-two-tone">arrow_forward</span></button>
                    </div>

                </div>
                <div className={style.imagenHeader}>
                    <img src={imagen} alt="" />
                </div>
            </div>
        </div>
    );
}