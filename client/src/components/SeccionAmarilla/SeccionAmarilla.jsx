import react from 'react';
import style from './SeccionAmarilla.module.css'
import cereal1 from '../../ImagenesNew/Ranger-Elementos-Web-04.webp'
import cereal2 from '../../ImagenesNew/Ranger-Elementos-Web-05.webp'
import cereal3 from '../../ImagenesNew/Ranger-Elementos-Web-06.webp'
import text from '../../ImagenesNew/Ranger-Elementos-Web-07.webp'
import { useSelector } from 'react-redux';

export default function SeccionAmarilla() {
    const idioma = useSelector(state => state.idioma)
    return (
        <div className={style.seccionAmarilla}>
            <div className={style.contText}>
                <img src={text} alt=''/>
            </div>
            <div className={style.contImagenes}>
                <div className={style.cereales}>
                    <img src={cereal1} alt=''/>
                </div>
                <div className={style.cereales}>
                    <img src={cereal2} alt=''/>
                </div>
                <div className={style.cereales}>
                    <img src={cereal3} alt=''/>
                </div>
            </div>
        </div>
    )
}



{/*  <div className={style.amarillaContenido}>
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
     </div> */}