import styles from '../styles/Storie.module.css';
import barquito from '../../../assets/barquito.webp';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';

const Barquito = () => {
    return (
        <div className={styles.container}>
            <Link to='/blog'>
                <button className={styles.button}><ArrowBackIosIcon style={{ color: 'black', fontSize: '1rem' }} /> Volver</button>
            </Link>
            <div className={styles.image_container}>
                <img src={barquito} alt='' loading='lazy' />
            </div>
            <div>
                <h1>UN BARQUITO ESPACIAL</h1>
                <h2>By Ornela Benedeti Ripalda</h2>
            </div>
            <div className={styles.storie_container}>
                <p>
                    Desde que su maestro anunció el viaje, Bruss no podía dormir de la emoción. Cada vez<br/>
                    que cerraba los ojos lo invadían las imágenes en las que vivía aventuras. Como aquella<br/>
                    vez que soñó con un bote que se desviaba a la selva y, podía ver a los monos capuchinos<br/>
                    balanceándose entre los árboles y, no veía al banco de delfines que le hiciera perder el<br/>
                    equilibrio lanzándolo al agua.<br/><br/>
                    - Un ranger siempre supera las dificultades -decía braceando a la orilla.<br/><br/>
                    En otra ocasión estaba en un barco en medio de olas gigantes que lo empujaron a una<br/>
                    isla llena de personas del tamaño de sus dedos, tantas que entre todas lograron<br/>
                    amarrarlo para intentar sacarle información haciéndole cosquillas.<br/><br/>
                    - ¡No tengo nada que confesar! -gritaba entre carcajadas.<br/><br/>
                    Pensar en ese viaje era un sueño que se cumpliría en unas cuantas horas. Lástima que<br/>
                    ese sueño le impidiera el “sueño” para descansar antes de embarcarse así que, en lugar<br/>
                    de contar ovejas, Bruss volvió a pasar lista a la mochila: cuadernos, sí; lápices, sí; toalla,<br/>
                    sí; ¿canguil?… ¡Increíble! ¡Había olvidado de su superalimento!<br/><br/>
                    - ¡Un ranger sin canguil no es un ranger! -dijo un segundo antes de que sonara el<br/>
                    despertador.<br/><br/>
                    Como era de esperarse llegó a la escuela, arrastrándose, casi con los ojos cerrados.<br/><br/>
                    - Bruss, ¿y esa cara? -le preguntó su profesor.<br/><br/>
                    - Nada, maestro. ¡Naveguemozzz! -le respondió semidormido.<br/><br/>
                    El maestro lo ubicó adelante con su chaleco salvavidas y detrás sentó a uno de sus<br/>
                    compañeros que nunca soltaba el celular.<br/><br/>
                    - Te vas a perder todo el viaje por mirar esa pantalla -dijo el profe.<br/><br/>
                    - La geolocalización es muy útil para este tipo de actividades -le respondió si dejar de<br/>
                    ver a la pantalla.<br/><br/>
                    La embarcación comenzó a moverse y a arrullar a Bruss. No había tormenta, ni islas<br/>
                    desiertas a la vista. Nada emocionante. El panorama parecía en calma hasta que<br/>
                    escuchó una voz metálica que gritaba:<br/><br/>
                    - ¡Gi-ra a la de-re-cha!<br/><br/>
                    La embarcación parecía volar de lo rápido que iba. La voz era la de un robot que los<br/>
                    dirigía.<br/><br/>
                    - PIN-8, pero ¡a la derecha hay una catarata! -gritó el maestro Robeo (se llamaba así<br/>
                    por culpa del autocorrector del Registro Civil)-, ¿por qué te crece la nariz?.<br/><br/>
                    - ¡Es mi ra-dar de e-mer-gen-cia! -respondió mientras el “radar” se alargaba.<br/><br/>
                    Bruss giró su cuerpo hacia atrás para decirle al profesor que el Norte estaba a la<br/>
                    izquierda, pero cuando lo hizo vio a una ENORME BALLENA ROSADA con su boca bien<br/>
                    abierta a punto de comerse la embarcación.<br/><br/>
                    - ¡Para allá! ¡Rápido! -gritó Bruss apuntando a la izquierda.<br/><br/>
                    - ¡Espera! -dijo la ballena-. No nos tengan miedo. Nosotras nos asustamos cuando<br/>
                    alguien invade nuestro hábitat. ¿No les pasa igual a ustedes?<br/><br/>
                    - A veces, pero nosotros no queremos lastimarlas respondió Bruss.<br/><br/>
                    La ballena los acompañó hasta que estuvieron fuera de peligro. Cuando Bruss se<br/>
                    agachó a buscar su canguil para disfrutar del paisaje la embarcación golpeó contra un<br/>
                    nuevo obstáculo.<br/><br/>
                    - ¿Listo para el viaje, Bruss? preguntó el maestro mientras la embarcación se alejaba<br/>
                    del muelle.<br/><br/>
                    - ¿Recién salimos? dijo asombrado.<br/><br/>
                    - Sí. Y alístate para comenzar esta aventura fluvial, aunque a ti ya no te quede canguil y<br/>
                    a tu compañero batería del celular.
                </p>
            </div>
        </div>
    )
}

export default Barquito