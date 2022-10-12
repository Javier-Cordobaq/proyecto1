import styles from '../styles/Storie.module.css';
import apagon from '../../../assets/apagon.webp';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';

const Apagon = () => {
    return (
        <div className={styles.container}>
            <Link to='/blog'>
                <button className={styles.button}><ArrowBackIosIcon style={{ color: 'black', fontSize: '1rem' }} /> Volver</button>
            </Link>
            <div className={styles.image_container}>
                <img src={apagon} alt='' loading='lazy' />
            </div>
            <div>
                <h1>APAGÓN INTERGALACTICO</h1>
                <h2>By Ornela Benedeti Ripalda</h2>
            </div>
            <div className={styles.storie_container}>
                <p>
                    Esa mañana cuando Bruss se despertó estaba tan cansado que no pudo ni<br />
                    desperezarse.<br /><br />
                    - Qué sueño tengo, -dijo mientras se vestía para ir a clases a dar su examen de<br />
                    matemáticas.<br /><br />
                    Cuando llegó vio que sus amigos caminaban como zombis y hasta creyó escuchar que<br />
                    decían “cerebro, cerebro”.<br /><br />
                    - A lo mejor se quedaron estudiando como yo, -pensó mientras trataba de convencerse<br />
                    de que no estaba sucediendo nada raro.<br /><br />
                    - Es como si nos hubiesen bajado el switch de la energía, a todos, al mismo tiempo.<br />
                    A la salida no había nadie en el parque, ni en la calle, ni en su casa y, aunque lo único que<br />
                    quería era llegar a dormir se quedó leyendo hasta que llegase alguien a acompañarlo.<br />
                    No por miedo, sino por “precaución”. Así que abrió un libro:<br />
                    Jalemos, izemos, mantengamos el barco.<br /><br />
                    Al abordaje saltemos<br />
                    y si nos separase un disparo…<br />
                    ¡allá abajo nos veremos!<br />
                    Eran los piratas del libro, pero Bruss los podía escuchar como si estuviera con ellos.<br />
                    - ¡Necesitamos robar más energía!, -gritó uno.<br /><br />
                    - ¡Capitán! -dijo otro y señaló a Bruss-, ¡un polizonte!<br /><br />
                    - Pero ¡mírenlo! Este no nos va a servir para nada. ¡Desháganse de él! ¡Arrrrgh! ¡Arrrgh!<br /><br />
                    -gruñó a los piratas.<br /><br />
                    - Claro -pensó Bruss-. ¡Garfus y su tripulación son ladrones de energía!<br />
                    Ahora lo entendía todo. Sus compañeros y él mismo estaban muy débiles porque ellos,<br />
                    los piratas, para continuar su viaje intergaláctico los habían saqueado mientras<br />
                    dormían.<br /><br />
                    - ¡Avanza, mequetrefe! -empujó el pirata.<br />
                    Bruss estaba confundido, pero avanzaba por la rampa de la que iban a lanzarlo en medio<br />
                    del espacio cuando escuchó un gritito de algo similar a una estrella. Debía ser la estrella<br />
                    más pequeña de la vía láctea:<br /><br />
                    - ¡Ahora, Bruss!<br /><br />
                    - ¿Qué? -pensó nuestro ranger. No podía creer lo que veía: no era una estrella, era un<br />
                    hada del tamaño de un canguil, ¿qué digo?, ¡¡¡era un canguil!!!<br />
                    - ¡Salta! -gritó Canguilita.<br />
                    Sin entender lo que pasaba se dio la vuelta para saltar y vio cómo su sombra se hacía<br />
                    enorme y tomaba a Garfus por la espalda, mientras que detrás de la suya estaba<br />
                    Canguilita rociando polvo de hadas.<br />
                    - ¡Libera nuestra energía ahora!, -gritó Bruss con una voz tan valiente que apenas la<br />
                    reconoció.<br /><br />
                    Pobre Garfus. No pudo decir que no, porque lo último que esperaba era que uno de sus<br />
                    enemigos, el cocodrilo, se colara en la embarcación para abrir el tanque de energía de<br />
                    un coletazo.<br /><br />
                    - ¡Adios, Canguilita!, -gritó mientras se elevaba con las alas doradas que le había<br />
                    regalado la hadita.<br /><br />
                    Cuando tomaba impulso para seguir subiendo escuchó un nuevo grito menos amable<br />
                    que el de Canguilita:<br />
                    - ¡Bruss! ¡Vas a dañar la cama! ¡Bájate ya! -le ordenó su papá molesto en medio de su<br />
                    cuarto lleno de Ranger Pops regados por todos lados-. ¿Qué vamos a hacer con toda esa<br />
                    energía que tienes, hijo?<br /><br />
                    - Nada, papá, -le dijo riendo. -Por ahora celebrar que la recuperé.
                </p>
            </div>
        </div>
    )
}

export default Apagon