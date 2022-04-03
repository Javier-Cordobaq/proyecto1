import React from 'react';
import style from './SeccionVideo.module.css'
import video from '../../Imagenes/videoProyecto.mp4'

export default function SeccionVideo() {
    return (
        <div id='Bruss' className={style.container}>
            <div className={style.gridVideo}>
                <div className={style.TextoSeccion}>
                    <h1>Te presentamos a Bruss</h1>
                    <div className={style.parrafo}>
                        <p>
                            Bruss es un joven astronauta que ama los Ranger Snacks. Principalmente por su sabor, pero también porque lo mantienen saludable y fuerte para sus aventuras.
                        </p>
                        <p>
                            No importa qué esté haciendo, siempre tiene su funda de Ranger Pops o Rings a la mano
                        </p>
                    </div>
                    <button className={style.botonConocer}>Conoce más de Bruss <span class="material-icons-two-tone">arrow_forward</span></button>
                </div>
                <div className={style.video}>
                <video loop autoPlay muted>
                    <source src={video} type="video/mp4" />
                </video>
                </div>
            </div>
        </div>
    )
}
