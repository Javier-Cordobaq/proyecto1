import react from 'react';
import style from './SeccionProductos.module.css';
import snack1 from '../../Imagenes/snack1.png'
import snack2 from '../../Imagenes/snack2.png'
import snack3 from '../../Imagenes/snack3.png'
import { Link } from 'react-router-dom'

export default function SeccionProductos(){
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
            img:snack1,
            nombre:'White Cheddar',
        },
        {
            img:snack2,
            nombre:'Caramel Churro',
        },
        {
            img:snack3,
            nombre:'Sour cream & Onion',
        }
    ]

    return(
        <div id='productos' className={style.globaContainer}>
            <div className={style.title}>
             <h1>Los nuevos snacks favoritos de tu familia</h1>
            </div>
            <div className={style.container}>
                <h1>Ranger Pops</h1>
                <div className={style.gridProductos}>
                    {
                        arraySnacks.map(snack => (

                            <div className={style.producto}>
                                <img className={style.img} src={snack.img} alt=""/>
                                <div className={style.comprar}>
                                    <div className={style.botton}>
                                        <p>{snack.nombre}</p>
                                        <Link to='/tienda'><button>Comprar</button></Link>
                                    </div>
                                    <div className={style.tablanutriocional}>
                                        <p>Ver tabla nutricional + 1</p>
                                    </div>
                                </div>
                                

                            </div>
                        ))
                    }   
                    
                </div>
            </div>

            <div className={style.container}>
                <h1>Ranger Rings</h1>
                <div className={style.gridProductos}>
                {
                rings.map(snack => (

                    <div className={style.producto}>
                        <img className={style.img} src={snack.img} alt=""/>
                        <div className={style.comprar}>
                            <div className={style.botton}>
                                <p>{snack.nombre}</p>
                                <button>Comprar</button>
                            </div>
                            <div className={style.tablanutriocional}>
                                        <p>Ver tabla nutricional + 1</p>
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
