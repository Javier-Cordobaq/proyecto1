import Nav from '../../components/Nav/Nav'
import StoryCard from './components/StoryCard'
import styles from './styles/Blog.module.css'
import apagon from '../../assets/apagon.webp'
import trabajo from '../../assets/un-trabajo.webp'
import encogiendo from '../../assets/encogiendo.webp'
import barquito from '../../assets/barquito.webp'
import actividad from '../../assets/actividad.webp'
import ConoceABruss from './components/ConoceABruss'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const Blog = () => {

    const idioma = useSelector(state => state.idioma)

    const stories = [
        {
            img: `${barquito}`,
            title: `${idioma === 'español' ? 'UN BARQUITO ESPACIAL' : 'A LITTLE SPACE SHIP'}`,
            date: 'Octubre 1, 2020',
            id: 1
        },
        {
            img: `${encogiendo}`,
            title: `${idioma === 'español' ? 'MAMÁ, ME ESTOY ENCOGIENDO' : `MOM, I'M SHRINKING`}`,
            date: 'Septiembre 28, 2020',
            id: 2
        },
        {
            img: `${apagon}`,
            title: `${idioma === 'español' ? 'APAGÓN INTERGALACTICO' : 'INTERGALACTIC BLACKOUT'}`,
            date: 'Mayo 4, 2020',
            id: 3
        },
        {
            img: `${trabajo}`,
            title: `${idioma === 'español' ? 'UN TRABAJO PARA LOS RANGERS' : 'A JOB FOR THE RANGERS'}`,
            date: 'Octubre 1, 2020',
            id: 4
        },
    ]

    const activity = {
        img: `${actividad}`,
        title: `${idioma === 'español' ? 'UN BARQUITO ESPACIAL' : 'A LITTLE SPACE SHIP'}`,
        date: 'Mayo 5, 2020',
        id: 5
    }

    return (
        <div className={styles.globalContainer}>
            <Nav />
            <div className={styles.responsiveContainer}>
                <div className={styles.titles_container}>
                    <ConoceABruss />
                    <h1>Cuentos</h1>
                </div>
                <div className={styles.grid_container}>
                    {
                        stories.map(c => <StoryCard img={c.img} title={c.title} date={c.date} id={c.id} />)
                    }
                </div>
                <div className={styles.titles_container}>
                    <h1>Actividades</h1>
                </div>
                <div className={styles.grid_container}>
                    <StoryCard img={activity.img} title={activity.title} date={activity.date} id={activity.id} />
                </div>
            </div>
        </div>
    )
}

export default Blog