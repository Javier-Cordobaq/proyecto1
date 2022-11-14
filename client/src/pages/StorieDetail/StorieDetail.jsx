import { style } from '@mui/system'
import { useParams } from 'react-router-dom'
import UnTrabajo from './components/UnTrabajo'
import Apagon from './components/Apagon'
import styles from './styles/StorieDetail.module.css'
import Footer from '../../components/Footer/Footer'
import Barquito from './components/Barquito'
import Encogiendo from './components/Encogiendo'
import Activity from './components/Activity'

const StorieDetail = () => {

  const { id } = useParams()
  console.log(id)

  return (
    <div className={styles.globalContainer}>
      <div className={styles.responsiveContainer}>
        {

          Number(id) === 1 ? <Barquito /> :
            Number(id) === 2 ? <Encogiendo /> :
              Number(id) === 3 ? <Apagon /> :
                Number(id) === 4 ? <UnTrabajo /> :
                  Number(id) === 5 ? <Activity /> : null
        }
      </div>
      <Footer />
    </div>
  )
}

export default StorieDetail