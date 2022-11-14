import styles from '../styles/Storie.module.css';
import barquito from '../../../assets/barquito.webp';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Barquito = () => {

    const idioma = useSelector(state => state.idioma)

    return (
        <div className={styles.container}>
            <Link to='/blog'>
                <button className={styles.button}><ArrowBackIosIcon style={{ color: 'black', fontSize: '1rem' }} /> Volver</button>
            </Link>
            <div className={styles.image_container}>
                <img src={barquito} alt='' loading='lazy' />
            </div>
            <div className={styles.title}>
                <h1>{idioma === 'español' ? 'UN BARQUITO ESPACIAL' : 'A LITTLE SPACE SHIP'}</h1>
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
                    </p>
                    :
                    <p>
                        Ever since his master announced the trip, Bruss could not sleep with excitement. Every time <br />
                        he closed his eyes he was invaded by images of adventures. Like the time he dreamed of a<br />
                        ship that drifted into the jungle and he could see the capuchin monkeys swinging through the<br />
                        trees, and he didn't see the pod of dolphins that made him lose his balance, throwing<br />
                        him into the water.<br /><br />
                        - A ranger always overcomes difficulties," he would say, bracing himself to the shore.<br /><br />
                        Another time he was on a ship in the middle of giant waves that pushed him to an island full<br />
                        of people the size of his fingers, so many that they all managed to tie him up to try to get<br />
                        information out of him, tickling him.<br /><br />
                        - I have nothing to confess! -he shouted with laughter.<br /><br />
                        Thinking about that trip was a dream that would be fulfilled in a few hours. Too bad that<br />
                        dream prevented him from "sleeping" to rest before embarking, so, instead of counting<br />
                        sheep, Bruss went back to the backpack to do a roll call: notebooks, yes; pencils, yes;<br />
                        towel?Yes; Pop corn?... Unbelievable! He had forgotten his superfood!<br /><br />
                        - A ranger without pop corn is not a ranger! -he said a second before the alarm clock went<br />
                        off.<br /><br />
                        As expected he arrived at school, crawling, almost with his eyes closed.<br /><br />
                        - Bruss, what's with that face? -asked his teacher.<br /><br />
                        - Nothing, teacher. Let’s saaiiilllll! -he answered half asleep.<br /><br />
                        The teacher put him in the front with his life jacket and behind him sat one of his classmates<br />
                        who never let go of his cell phone.<br /><br />
                        - You're going to miss the whole trip by looking at that screen," said the teacher.<br /><br />
                        - Geolocation is very useful for this type of activity," he replied without taking his eyes off the screen.<br /><br />
                        The ship began to move and Bruss began to and lull Bruss to sleep. There was no storm, no<br />
                        deserted islands in sight. Nothing exciting. The scene seemed calm until he heard a metallic<br />
                        voice shouting:<br /><br />
                        - Turn right-ight-ight-ight!<br /><br />
                        The ship seemed to be flying because of how fast it was going. The voice was from a robot<br />
                        directing them.<br /><br />
                        - PIN-8, but there's a waterfall on the right! -shouted Master Robe or (that was his name<br />
                        because of the Civil Registry's autocorrector), why is your nose growing?<br /><br />
                        - It's my e-mer-gen-ence ra-dar! -he replied as the "radar" grew longer.<br /><br />
                        Bruss turned his body backwards to tell the professor that North was to the left, but when he<br />
                        did so, he saw a HUGE PINK WHALE with its mouth wide open about to eat the ship.<br /><br />
                        - That way, quick! -Bruss shouted, pointing to the left.<br /><br />
                        - Wait! -said the whale. Don't be afraid of us. We get scared when someone invades our<br />
                        habitat. Don't you?<br /><br />
                        - Sometimes, but we don't want to hurt you," answered Bruss.<br /><br />
                        The whale accompanied them until they were out of danger. When Bruss bent down to look<br />
                        up for his popcorn to enjoy the scenery, the ship hit a new obstacle.<br /><br />
                        - Ready for the trip, Bruss? asked the master as the ship pulled away from the dock.<br /><br />
                        - Did we just leave? he said in amazed.<br /><br />
                        - Yes, and get ready to start this river adventure, even if you're out of popcorn and your<br />
                        partner's cell phone battery.
                    </p>
                }
            </div>
        </div>
    )
}

export default Barquito