import React from 'react'
import logo from './../../Imagenes/Rangers.png'
import styles from '../Spinner/Spinner.module.css'

const Spinner = () => {
    return (
        <div className={styles.container}>
            <img src={logo} alt='' loading='lazy' />
        </div>
    )
}

export default Spinner