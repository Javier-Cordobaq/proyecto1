import React from 'react'
import { useSelector } from 'react-redux'
import Logo from '../../Imagenes/LogoRangers.png'
import style from './Footer.module.css'
import face from '../../Imagenes/facebook.svg'
import insta from '../../Imagenes/instagram.svg'
import { Link } from 'react-router-dom'
import Logo2 from '../../Imagenes/logo2.png'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export default function Footer() {

    const idioma = useSelector(state => state.idioma)

    return (
        <div className={style.global_container}>
            <div className={style.container}>
                <div className={style.logo}>
                    <img src={Logo} alt="" />
                </div>

                <div className={style.navigation}>
                    <p className={style.title}>Navigation</p>
                    <ul className={style.rutas}>
                        <li><a href='#acerca'>{idioma === "español" ? "Acerca de" : "About"}</a></li>
                        <li><a href='#Bruss'>Bruss</a></li>
                        <li><a href='#productos'>{idioma === "español" ? "Productos" : "Products"}</a></li>
                        <li><a href='#puntos'>{idioma === "español" ? "Puntos de venta" : "Points of sale"}</a></li>
                        <li><Link to='/tienda'>{idioma === "español" ? "Tienda" : "Shop"}</Link></li>
                    </ul>
                </div>
                <div className={style.socialMedia}>
                    <p className={style.title}>Social Media</p>
                    <div className={style.redes}>
                        <a href='https://www.instagram.com/rangersnacks/?hl=es-la'><img src={face} height={20} alt='Not Found' /></a>
                        <a href='https://www.instagram.com/rangersnacks/?hl=es-la'><img src={insta} height={20} alt='Not Found' /></a>
                    </div>
                </div>
                <div className={style.contact}>
                    <p className={style.title}>Contact Us</p>
                    <div className={style.contacto}>
                        <div className={style.cont}>
                            <WhatsAppIcon style={{color: 'white'}}/>
                            <p>+593 991 334 998</p>
                        </div>
                        <div className={style.cont}>
                            <span class="material-icons">email</span>
                            <p>info@rangersnacks.com</p>
                        </div>
                    </div>
                </div>
                <div className={style.logo2}>
                    <img src={Logo2} alt="" />
                </div>
            </div>
        </div>
    )
}