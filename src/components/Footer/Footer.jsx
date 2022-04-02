import React from 'react'
import Logo from '../../Imagenes/LogoRangers.png'
import style from './Footer.module.css'


export default function Footer(){
    return(
        <div className={style.container}>
            <img src={Logo} alt="" />
        </div>
    )
}