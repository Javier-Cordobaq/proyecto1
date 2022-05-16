import react from 'react';
import style from './SeccionProductos.module.css';
import snack1 from '../../Imagenes/salty.png'
import snack2 from '../../Imagenes/salt.png'
import snack3 from '../../Imagenes/chesee.png'
import r1 from '../../Imagenes/rings1.png'
import r2 from '../../Imagenes/rings2.png'
import r3 from '../../Imagenes/rings3.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import productosTitulo from '../../Imagenes/productosTitulo.png'
import popsTitulo from '../../Imagenes/popsTitulo.png'
export default function SeccionProductos(){
    const idioma = useSelector(state => state.idioma)
    const arraySnacks = [
        {
            img:snack1,
            nombre:'Spicy Cheese',
        },
        {
            img:snack2,
            nombre:'Sea Salt',
        },
        {
            img:snack3,
            nombre:'Sweet & Salty',
        },
    ]

    const rings = [
        {
            img:r1,
            nombre:'White Cheddar',
        },
        {
            img:r2,
            nombre:'Caramel Churro',
        },
        {
            img:r3,
            nombre:'Sour cream & Onion',
        }
    ]

    return(
        <div id='productos' className={style.globaContainer}>
            <div className={style.title}>
             <img src={productosTitulo} alt="" />
            </div>
            <div className={style.container}>
                <img src={popsTitulo} className={style.imgTitulo} alt="" />
                <div className={style.gridProductos}>
                    {
                        arraySnacks.map(snack => (

                            <div className={style.producto}>
                                <img className={style.img} src={snack.img} alt=""/>
                                <div className={style.comprar}>
                                    <div className={style.botton}>
                                        <p>{snack.nombre}</p>
                                        <Link to='/tienda'><button>{idioma === "español" ?"Comprar":"Buy"}</button></Link>
                                    </div>
                                    <div className={style.tablanutriocional}>
                                        <p>{idioma === "español" ? "Ver tabla nutricional" : "Show nutritional table +1"}</p>
                                    </div>
                                </div>
                                

                            </div>
                        ))
                    }   
                    
                </div>
            </div>

            <div className={style.container}>
                <img src={popsTitulo} className={style.imgTitulo} alt="" />
                <div className={style.gridProductos}>
                {
                rings.map(snack => (

                    <div className={style.producto}>
                        <img className={style.img} src={snack.img} alt=""/>
                        <div className={style.comprar}>
                            <div className={style.botton}>
                                <p className={style.name}>{snack.nombre}</p>
                                <Link to='/tienda'><button>{idioma === "español" ?"Comprar":"Buy"}</button></Link>
                            </div>
                            <div className={style.tablanutriocional}>
                            <p>{idioma === "español" ? "Ver tabla nutricional" : "Show nutritional table +1"}</p>
                            </div>
                        </div>
                        

                    </div>
                ))
            }   
                    
                </div>
            </div>
        </div>

        
    )
}
