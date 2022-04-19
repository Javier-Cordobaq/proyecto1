import react from 'react';
import style from './SeccionAmarilla.module.css'
import cereal1 from '../../Imagenes/cereal1.jpg'
import cereal2 from '../../Imagenes/cereal2.jpg'
import cereal3 from '../../Imagenes/cereal3.jpg'
import { useSelector } from 'react-redux';
export default function SeccionAmarilla() {
    const idioma = useSelector(state => state.idioma)
    return (
        <div className={style.seccionAmarilla}>
            <div className={style.amarillaContenido}>
                <h1>{idioma === "español" ? "Comer rico no tiene por qué ser dañino" : "Eating delicious shouldn't be harmful"}</h1>
                <div className={style.grid}>
                    <div data-aos="zoom-in-up" data-aos-duration="1200" className={style.item}>
                        <div className={style.contImagenes}>
                            <img src={cereal1} alt="" />
                        </div>
                        <p>{idioma === "español" ? "Snacks sin grasas, veganos y saludables" : "Vegan, fatless snacks"}</p>
                    </div>

                    <div data-aos="zoom-in-up" data-aos-duration="1200" className={style.item}>
                        <div className={style.contImagenes}>
                            <img src={cereal2} alt="" />
                        </div>
                        <p>{idioma === "español" ?"Variedad para todos los gustos" :"A variety of products"}</p>
                    </div>

                    <div data-aos="zoom-in-up" data-aos-duration="1200" className={style.item}>
                        <div className={style.contImagenes}>
                            <img src={cereal3} alt="" />
                        </div>
                        <p>{idioma === "español" ?"Productos deliciosos que se adaptan a tu familia":"Snacks that adapt to your lifestyle"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}