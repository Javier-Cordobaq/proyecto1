import react from 'react';
import style from './SeccionAmarilla.module.css'
import cereal1 from '../../Imagenes/cereal1.png'
import cereal2 from '../../Imagenes/cereal2.png'
import cereal3 from '../../Imagenes/cereal3.png'
export default function SeccionAmarilla() {
    return (
        <div className={style.seccionAmarilla}>
            <div className={style.amarillaContenido}>
                <h1>Comer rico no tiene por qué ser dañino</h1>
                <div className={style.grid}>
                    <div className={style.item}>
                        <img src={cereal1} alt="" />
                        <p>Snacks sin grasas, veganos y saludables</p>

                    </div>
                    <div className={style.item}>
                        <img src={cereal2} alt="" />
                        <p>Variedad para todos los gustos</p>

                    </div>
                    <div className={style.item}>
                        <img src={cereal2} alt="" />
                        <p>Productos deliciosos que se adaptan a tu familia</p>
                    </div>
                </div>
            </div>
        </div>
    )
}