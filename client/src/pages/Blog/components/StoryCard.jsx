import { Link } from 'react-router-dom'
import styles from '../styles/StoryCard.module.css'

const StoryCard = ({ img, title, date, id }) => {
    return (
        <div className={styles.card_container}>
            <Link to={`/storie/${id}`}>
                <div title={title} className={styles.image_container}>
                    <img src={img} alt='' loading='lazy'/>
                </div>
                <div className={styles.text_container}>
                    <h1>{title}</h1>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'space-between' }}>
                        <p>By Ornela Benedeti Ripalda</p>
                        <p>{date}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default StoryCard