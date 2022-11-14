import styles from '../styles/Storie.module.css';
import encogiendo from '../../../assets/encogiendo.webp';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Encogiendo = () => {

    const idioma = useSelector(state => state.idioma)

    return (
        <div className={styles.container}>
            <Link to='/blog'>
                <button className={styles.button}><ArrowBackIosIcon style={{ color: 'black', fontSize: '1rem' }} /> Volver</button>
            </Link>
            <div className={styles.image_container}>
                <img src={encogiendo} alt='' loading='lazy' />
            </div>
            <div className={styles.title}>
                <h1>{idioma === 'español' ? 'MAMÁ, ME ESTOY ENCOGIENDO' : `MOM, I'M SHRINKING`}</h1>
                <h2 className={styles.by}>by Ornela Benedeti Ripalda</h2>
            </div>
            <div className={styles.storie_container}>
                {idioma === 'español' ?
                    <p>
                        Desde que su maestro anunció el viaje, Bruss no podía dormir de la emoción. Cada vez<br />
                        que cerraba los ojos lo invadían las imágenes en las que vivía aventuras. Como aquella<br />
                        vez que soñó con un bote que se desviaba a la selva y, podía ver a los monos capuchinos<br />
                        balanceándose entre los árboles y, no veía al banco de delfines que le hiciera perder el<br />
                        equilibrio lanzándolo al agua.<br /><br />
                        - Un ranger siempre supera las dificultades -decía braceando a la orilla.<br /><br />
                        En otra ocasión estaba en un barco en medio de olas gigantes que lo empujaron a una<br />
                        isla llena de personas del tamaño de sus dedos, tantas que entre todas lograron<br />
                        amarrarlo para intentar sacarle información haciéndole cosquillas.<br /><br />
                        - ¡No tengo nada que confesar! -gritaba entre carcajadas.<br /><br />
                        Pensar en ese viaje era un sueño que se cumpliría en unas cuantas horas. Lástima que<br />
                        ese sueño le impidiera el “sueño” para descansar antes de embarcarse así que, en lugar<br />
                        de contar ovejas, Bruss volvió a pasar lista a la mochila: cuadernos, sí; lápices, sí; toalla,<br />
                        sí; ¿canguil?… ¡Increíble! ¡Había olvidado de su superalimento!<br /><br />
                        - ¡Un ranger sin canguil no es un ranger! -dijo un segundo antes de que sonara el<br />
                        despertador.<br /><br />
                        Como era de esperarse llegó a la escuela, arrastrándose, casi con los ojos cerrados.<br /><br />
                        - Bruss, ¿y esa cara? -le preguntó su profesor.<br /><br />
                        - Nada, maestro. ¡Naveguemozzz! -le respondió semidormido.<br /><br />
                        El maestro lo ubicó adelante con su chaleco salvavidas y detrás sentó a uno de sus<br />
                        compañeros que nunca soltaba el celular.<br /><br />
                        - Te vas a perder todo el viaje por mirar esa pantalla -dijo el profe.<br /><br />
                        - La geolocalización es muy útil para este tipo de actividades -le respondió si dejar de<br />
                        ver a la pantalla.<br /><br />
                        La embarcación comenzó a moverse y a arrullar a Bruss. No había tormenta, ni islas<br />
                        desiertas a la vista. Nada emocionante. El panorama parecía en calma hasta que<br />
                        escuchó una voz metálica que gritaba:<br /><br />
                        - ¡Gi-ra a la de-re-cha!<br /><br />
                        La embarcación parecía volar de lo rápido que iba. La voz era la de un robot que los<br />
                        dirigía.<br /><br />
                        - PIN-8, pero ¡a la derecha hay una catarata! -gritó el maestro Robeo (se llamaba así<br />
                        por culpa del autocorrector del Registro Civil)-, ¿por qué te crece la nariz?.<br /><br />
                        - ¡Es mi ra-dar de e-mer-gen-cia! -respondió mientras el “radar” se alargaba.<br /><br />
                        Bruss giró su cuerpo hacia atrás para decirle al profesor que el Norte estaba a la<br />
                        izquierda, pero cuando lo hizo vio a una ENORME BALLENA ROSADA con su boca bien<br />
                        abierta a punto de comerse la embarcación.<br /><br />
                        - ¡Para allá! ¡Rápido! -gritó Bruss apuntando a la izquierda.<br /><br />
                        - ¡Espera! -dijo la ballena-. No nos tengan miedo. Nosotras nos asustamos cuando<br />
                        alguien invade nuestro hábitat. ¿No les pasa igual a ustedes?<br /><br />
                        - A veces, pero nosotros no queremos lastimarlas respondió Bruss.<br /><br />
                        La ballena los acompañó hasta que estuvieron fuera de peligro. Cuando Bruss se<br />
                        agachó a buscar su canguil para disfrutar del paisaje la embarcación golpeó contra un<br />
                        nuevo obstáculo.<br /><br />
                        - ¿Listo para el viaje, Bruss? preguntó el maestro mientras la embarcación se alejaba<br />
                        del muelle.<br /><br />
                        - ¿Recién salimos? dijo asombrado.<br /><br />
                        - Sí. Y alístate para comenzar esta aventura fluvial, aunque a ti ya no te quede canguil y<br />
                        a tu compañero batería del celular.
                    </p> :
                    <p>
                        Bruss was under the basket when he received the ball, so he pointed up and,<br />
                        for a moment,  time stood still as he watched the hoop begin to move away from him.<br /><br />
                        - Shoot it! -his friends shouted, reactivating the time.<br /><br />
                        That day Bruss didn't make a single basket and returned home feeling strange.<br />
                        strange. Thinking that maybe it was his idea, but he felt that his friends were bigger than he<br />
                        was.<br /><br />
                        When he got home he heated up the lunch his mom had left for him and, when he had<br />
                        finished he wanted to eat popcorn, or, as he called it, the ranger superfood, but his mom<br />
                        always left it out of his reach, because Bruss was able to make it all disappear in the time it <br />
                        takes the length of a single movie.<br /><br />
                        - I can’t reach it," he said, stretching out his arm, but for fear of an accident he thought it’s<br />
                        better not to insist.<br /><br />
                        - I would like to be as big as my friends. It would be amazing to grow up "all at once" and<br />
                        wake up bigger than them.<br /><br />
                        Before going to his room to study, he drank, obligingly, the apple juice that his mom had left<br />
                        him with a note that said "drink me". She insisted that it was good for him to grow, but he<br />
                        didn't like it. Then he began to walk and the hallway became narrower than usual, but the<br />
                        weirdest thing was when he couldn't push the door knob of his room to get in. He tried<br />
                        turning it with his fingertips, but it was impossible: it was tiny.<br /><br />
                        - Meow," a cat meowed.<br /><br />
                        Bruss couldn't move. The corridors imprisoned him. Everything had become too narrow and<br />
                        the only thing he could think of at that moment was to put his arm out of the window.<br /><br />
                        - I'm coming, kitty! he answered with great effort.<br /><br />
                        His wish to grow up had been fulfilled at the least expected moment. His head popped out<br />
                        through the roof and caught a glimpse of the cat.<br /><br />
                        - You'll be very happy. I heard you say you wanted to be bigger than your friends,<br />
                        -the cat meowed.<br /><br />
                        - Yes, but not big enough to break my house.<br /><br />
                        - This is not your house.<br /><br />
                        - Then could you tell me, please, which way should I go to get out of here?<br /><br />
                        - That depends a lot on where you want to go," replied the cat.<br /><br />
                        - I want to go home.<br /><br />
                        - But you will no longer be big.<br /><br />
                        - Then let me think about it.<br /><br />
                        While Bruss was thinking about what to do, he saw a popcorn pouch that said "eat me," and<br />
                        he opened it and this distracted him so much that he lost sight of the cat. He began to eat<br />
                        until he felt someone poke him with a stick.<br /><br />
                        - Now what happened? -said his mother while she was sweeping the floor full of popcorn <br />
                        that had fallen out of the cupboard along with him.<br /><br />
                        - I'm sorry, Mom. I just wanted to reach higher.<br /><br />
                        - And you will as long as you know where you want to go.<br /><br />
                        - The cat told me the same thing.<br /><br />
                        - What cat?<br /><br />
                        - No cat.<br /><br />
                        Suddenly he understood that he was the perfect size to give his mom a hug.<br /><br />
                        - Let me help you, I suddenly feel very big.
                    </p>
                }
            </div>
        </div>
    )
}

export default Encogiendo