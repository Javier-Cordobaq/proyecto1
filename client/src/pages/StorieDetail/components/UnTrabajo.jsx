import styles from '../styles/Storie.module.css';
import trabajo from '../../../assets/un-trabajo.webp';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import Footer from '../../../components/Footer/Footer';

const UnTrabajo = () => {
    return (
        <div className={styles.container}>
            <Link to='/blog'>
                <button className={styles.button}><ArrowBackIosIcon style={{ color: 'black', fontSize: '1rem' }} /> Volver</button>
            </Link>
            <div className={styles.image_container}>
                <img src={trabajo} alt='' loading='lazy' />
            </div>
            <div>
                <h1>UN TRABAJO PARA LOS RANGERS</h1>
                <h2>By Ornela Benedeti Ripalda</h2>
            </div>
            <div className={styles.storie_container}>
                <p>
                    Bruss tenía semanas escuchando ruidos raros antes de dormir y al principio no le<br />
                    molestaban, pero comenzó a preocuparse porque no desaparecían. Como buen<br />
                    explorador buscó debajo de su cama, detrás de las cortinas, dentro del armario y nada.<br />
                    Revisó detrás de la puerta, en su librero, en los cajones, pasó a la sala, el comedor y no,<br />
                    adentro de su casa no había nada.<br />
                    - Quizás el ruido venga de afuera -pensó-. Voy a pedirle ayuda a los rangers.<br />
                    Los rangers eran sus amigos de la escuela, con quienes iba al cine y al parque y, con<br />
                    quienes compartía las historias de sus aventuras. Entre todos se apoyaban así que<br />
                    enseguida idearon un plan.<br />
                    - Podríamos hacer un hueco en el jardín y cubrirlo con paja para que el ruidoso caiga<br />
                    adentro.<br />
                    Y así lo hicieron, pero al día siguiente su construcción estaba desbaratada y el hueco<br />
                    estaba vacío. Sin embargo, había dejado una huella y parecía ser más grande de lo que<br />
                    pensaban.<br />
                    - Que tal si hacemos una caja de madera y adentro le metemos algo de comer.<br />
                    - ¡Canguil! -dijo Bruss.<br />
                    - ¡Manos a la obra! -dijeron todos con tablas, martillo y clavos en la mano.<br />
                    Al día siguiente la caja llena de canguil estaba vacía y ni rastro de quién la había<br />
                    vaciado.<br />
                    - Mira, Bruss -dijo uno de los rangers-, ya sabemos que le gusta comer. Armemos una<br />
                    casa como la del cuento de Hansel y Gretel para que se empache y sea más fácil<br />
                    atraparlo.<br />
                    - Suena bien, pero no tengo tantos dulces.<br />
                    - Eso no importa. La hacemos con canguil y caramelo.<br />
                    - ¡Qué delicia! -dijo Bruss.<br />
                    - Ni lo sueñes -dijo su amigo-, no podemos desperdiciar ni uno solo.<br />
                    Entonces los que tenían habilidades para el dibujo hicieron un plano, los que sabían<br />
                    cocinar hicieron el caramelo y así, entre todos, construyeron la casa para atrapar a<br />
                    quien sea que estuviese haciendo ese ruido insoportable.<br />
                    En la madrugada, Bruss se despertó con un sonido más fuerte de lo habitual. Miró por<br />
                    la ventana y vio a un monstruo enorme, empachado y panza arriba, tratando de alcanzar<br />
                    más canguiles con la mano. Se levantó y tomó el extinguidor para rociarlo en caso de<br />
                    que se pusiera violento.<br />
                    - ¡Te agarré! -gritó y abrió fuego con el extinguidor del que salían más canguiles.<br />
                    Al parecer no era el único que celebraba que el monstruo estuviese en silencio. Tres<br />
                    pequeños monstruos saltaban sobre la barriga del gigante haciendo una danza de<br />
                    felicidad.<br />
                    - ¡Ey, ustedes! -dijo Bruss-, ¡bájense que le pueden hacer daño!<br />
                    Se acercó al monstruo y le pidió que si volvía a su casa no hiciera tanto ruido. El intruso<br />
                    aceptó la advertencia y les pidió disculpas a todos. Bruss vio que había suficiente<br />
                    canguil como para que él comiera, así que se sentó en el piso y comenzó a comer.<br />
                    - Bruss -dijo su papá en su habitación-, ahora ¿qué explicación tienes para esto?<br />
                    - Creo que soy sonámbulo, papá -dijo riéndose mientras veía, entre la pila de libros, su<br />
                    edición de “Los tres cerditos” cubierta de canguil y pensando en<br />
                    sus amigos, porque gracias a ellos había vuelto a dormir tranquilo.<br />
                </p>
            </div>
        </div>
    )
}

export default UnTrabajo