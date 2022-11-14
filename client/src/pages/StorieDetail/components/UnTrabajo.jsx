import styles from '../styles/Storie.module.css';
import trabajo from '../../../assets/un-trabajo.webp';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UnTrabajo = () => {

    const idioma = useSelector(state => state.idioma)

    return (
        <div className={styles.container}>
            <Link to='/blog'>
                <button className={styles.button}><ArrowBackIosIcon style={{ color: 'black', fontSize: '1rem' }} /> Volver</button>
            </Link>
            <div className={styles.image_container}>
                <img src={trabajo} alt='' loading='lazy' />
            </div>
            <div className={styles.title}>
                <h1>{idioma === 'español' ? 'UN TRABAJO PARA LOS RANGERS' : 'A JOB FOR THE RANGERS'}</h1>
                <h2 className={styles.by}>by Ornela Benedeti Ripalda</h2>
            </div>
            <div className={styles.storie_container}>
                {idioma === 'español' ?
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
                    :
                    <p>
                        Bruss had been hearing strange noises for weeks before going to sleep and at first they<br />
                        didn't bother him, but he began to worry that they wouldn't go away.  As a good explorer, he<br />
                        looked under his bed, behind the curtains, inside the closet and nothing.  He checked behind<br />
                        the door, in his bookcase, in the drawers, in the living room, in the dining room and nothing,<br />
                        there was nothing inside her house.<br /><br />
                        - Maybe the noise is coming from outside," he thought, "I'm going to ask the rangers for help.<br /><br />
                        The rangers were his friends from school, with whom he went to the movies and to the park,<br />
                        and with whom he shared the stories of his adventures. They all had each other's back, so<br />
                        they immediately came up with a plan.<br /><br />
                        - We could dig a hole in the garden and cover it with dry grass so that the noisy one would<br />
                        fall inside.<br /><br />
                        And so they did, but the next day their construction was in disarray and the hole was empty.<br />
                        However, he had left a footprint and it seemed to be bigger thanthey thought.<br /><br />
                        - How about we make a wooden box and put something to eat inside.<br /><br />
                        - Popcorn! -said Bruss.<br /><br />
                        - Let's get to work! -said everyone with boards, hammer and nails in hand.<br />
                        The next day the box full of popcorn was empty and there was no trace of who had emptied<br />
                        it.<br/><br/>
                        - Look, Bruss," said one of the rangers, "we know he likes to eat. Let's set up a house<br />
                        like the one in Hansel and Gretel's fairytale so that he will eat so much and it will be more<br />
                        easily to catch him.<br /><br />
                        - Sounds good, but I don't have that much candy.<br /><br />
                        - That doesn't matter. We'll make it with popcorn and caramel.<br /><br />
                        - What a treat! -said Bruss.<br /><br />
                        - No way," said his friend, "we can't waste a single one.<br /><br />
                        So those who had drawing skills made a plan, those who knew how to cook made the<br />
                        caramel and so on,  together, they built the house to trap whoever was making that<br />
                        unbearable noise.<br /><br />
                        In the wee hours of the morning, Bruss woke up to a louder sound than usual. He looked out<br />
                        the the window and saw a huge, paunchy, belly-up monster reaching for more popcorn with<br />
                        its hand.  He got up and grabbed the fire extinguisher to spray it in case it became violent.<br /><br />
                        - Gotcha! -he shouted and opened fire with the extinguisher from which more popcorn came<br />
                        out.<br /><br />
                        Apparently he wasn't the only one celebrating the monster being silent. Three little monsters<br />
                        jumped on the giant's belly doing a dance of happiness.<br /><br />
                        - Hey, you guys! -said Bruss, "Get off, you might hurt him!<br /><br />
                        He approached the monster and asked him not to make so much noise if he returned home.<br />
                        The intruder accepted the warning and apologized to everyone. Bruss saw that there was<br />
                        enough popcorn to eat for him, so he sat down on the floor and began to eat.<br /><br />
                        - Bruss," said his dad in his room, "now what explanation do you have for this?v<br /><br />
                        - I think I'm sleepwalking, Dad," he laughed as he looked through the pile of books at his<br />
                        edition of "The Three Little Pigs” covered with popcorn and thinking about his friends,<br />
                        because thanks to them he had slept peacefully again.
                    </p>
                }
            </div>
        </div>
    )
}

export default UnTrabajo