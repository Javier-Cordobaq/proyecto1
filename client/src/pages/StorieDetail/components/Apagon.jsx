import styles from '../styles/Storie.module.css';
import apagon from '../../../assets/apagon.webp';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Apagon = () => {

    const idioma = useSelector(state => state.idioma)

    return (
        <div className={styles.container}>
            <Link to='/blog'>
                <button className={styles.button}><ArrowBackIosIcon style={{ color: 'black', fontSize: '1rem' }} /> Volver</button>
            </Link>
            <div className={styles.image_container}>
                <img src={apagon} alt='' loading='lazy' />
            </div>
            <div className={styles.title}>
                <h1>APAGÓN INTERGALACTICO</h1>
                <h2 className={styles.by}>by Ornela Benedeti Ripalda</h2>
            </div>
            <div className={styles.storie_container}>
                {idioma == 'español' ?
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
                    :
                    <p>
                        That morning when Bruss woke up he was so tired he couldn't even wake up.<br /><br />
                        - I'm so sleepy," he said as he got dressed to go to class to take his math test.<br /><br />
                        When he arrived he saw that his friends were walking like zombies and he even thought he<br />
                        heard them say "brain, brain, brain".<br /><br />
                        - Maybe they were studying like me," he thought as he tried to convince himself that nothing<br />
                        weird was going on.<br /><br />
                        - It's like the power switch had been turned off, all of us, at the same time.<br /><br />
                        When he left, there was no one in the park, nor in the street, nor in his house, and although<br />
                        the only thing he wanted was to get to sleep, he stayed up reading until someone came to <br />
                        accompany him.  Not out of fear, but as a "precaution". So he opened a book:<br /><br />
                        “Let's pull, let's hoist, let's hold the ship.<br /><br />
                        When boarding let's jump<br /><br />
                        And if a shot should separate us...<br /><br />
                        we'll see each other down there!”<br /><br />
                        It was the pirates in the book, but Bruss could hear them as if he were with them.<br /><br />
                        - We need to steal more power," shouted one.<br /><br />
                        - Captain! -said another and pointed at Bruss, "a policeman!<br /><br />
                        - But look at him! This one won't do us any good. Get rid of him! Arrrrgh! Arrrrgh!<br />
                        -he snarled at the pirates.<br /><br />
                        - Of course," thought Bruss, "Garfus and his crew are energy thieves!<br /><br />
                        Now he understood everything. His companions and himself were too weak because they,<br />
                        the pirates, in order to continue their intergalactic journey, had plundered them while they<br />
                        slept.<br /><br />
                        - Go on, little punk! -pushed the pirate.<br /><br />
                        Bruss was confused, but he was advancing down the ramp from which they were going to<br />
                        launch him in the middle of space when he heard a scream from something like a star. It had<br />
                        to be the smallest star in the Milky Way:<br /><br />
                        - Now, Bruss!<br /><br />
                        - What? -thought our ranger. He couldn't believe his eyes: it wasn't a star, it was a fairy the<br />
                        size of popcorn, what do I say, it was a popcorn!!!!!<br /><br />
                        - Jump! -shouted little popcorn.<br /><br />
                        Without understanding what was happening, he turned around to jump and saw how his<br />
                        shadow became huge and grabbed Garfus by the back, while behind his shadow was little<br />
                        popcorn spraying fairy dust.<br /><br />
                        - Release our energy now," Bruss shouted in a voice so brave he barely recognized it.<br /><br />
                        Poor Garfus. He couldn't say no, because the last thing he expected was one of his<br />
                        enemies, the crocodile, to sneak into the boat to open the energy tank in one with one tail<br />
                        kick.<br /><br />
                        - Bye-bye, Little Popcorn," he shouted as he soared on the golden wings the the little fairy<br />
                        had given him.<br /><br />
                        As he was gaining momentum to continue his ascent, he heard a new cry, less friendly than<br />
                        Little Popcorn.<br /><br />
                        - "Bruss, you'll damage the bed, get down now! -his annoyed daddy ordered him in the<br />
                        middle of his room full of Ranger Pops scattered all over the place-. What are we going to do<br />
                        with all that energy you have, son?<br /><br />
                        - Nothing, Dad," he said laughing. -For now, celebrate that I got it back.
                    </p>
                }
            </div>
        </div>
    )
}

export default Apagon