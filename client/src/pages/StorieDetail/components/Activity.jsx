import styles from '../styles/Storie.module.css';
import actividad from '../../../assets/actividad.webp';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';

const Activity = () => {
    return (
        <div className={styles.container}>
            <Link to='/blog'>
                <button className={styles.button}><ArrowBackIosIcon style={{ color: 'black', fontSize: '1rem' }} /> Volver</button>
            </Link>
            <div className={styles.image_container}>
                <img src={actividad} alt='' loading='lazy' />
            </div>
            <div className={styles.title}>
                <h1>APAGÓN INTERGALACTICO</h1>
                <h2 className={styles.by}>by Ornela Benedeti Ripalda</h2>
            </div>
            <div style={{backgroundColor: 'transparent', textAlign: 'center'}} className={styles.storie_container}>
                <p>
                    ¡Hola! Les compartimos la ilustración del cuento «UN BARQUITO<br/>
                    ESPACIAL» para que la puedan pintar en casa.<br/><br/>
                    Escojan los colores que mas les gusten y pónganle color a este mundo<br/>
                    donde Bruss ha viajado con su imaginación.<br/><br/>
                    ¡Que lo disfruten!
                </p>
            </div>
        </div>
    )
}

export default Activity