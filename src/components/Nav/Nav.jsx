import React, { useState } from 'react'
import Style from '../Nav/Nav.module.css'
import Logo from '../../Imagenes/LogoRangers.png'
import { Link } from 'react-router-dom'
import { cambiarIngles } from '../../redux/actions'
import face from '../../Imagenes/facebook.svg'
import insta from '../../Imagenes/instagram.svg'

const Nav = () => {

  const [menu, setMenu] = useState(false)

  return (
    <div className={Style.contenedorSticky}>
        <div className={Style.contenedorGlobal}>
                <div className={Style.contenedorLogo}>
                    <img src={Logo} alt='Logo not Found'/>
                </div>
                <div className={Style.contenedorDerecha}>
                        <ul className={Style.rutas}>
                            <li>Acerca de</li>
                            <li>Productos</li>
                            <li><a href='#Bruss'>Bruss</a></li>
                            <li>Puntos de venta</li>
                            <li><Link to='/tienda'>Tienda</Link></li>
                        </ul>
                
                    <div className={Style.botones}>
                      
                        <a href='https://www.instagram.com/rangersnacks/?hl=es-la'><img src={face} height={20} alt='Not Found'/></a>
                      
                     
                        <a href='https://www.instagram.com/rangersnacks/?hl=es-la'><img src={insta} height={20} alt='Not Found'/></a>
                      
                    </div>

                </div>  


            
             {/* -------------------------------------- */}

            <div className={Style.modal}>

              <div className={Style.menuGlobal}>

                <div className={Style.LogoResponsive}>
                        <img src={Logo} alt='Logo not Found'/>
                </div>

                <div className={Style.filtros_cont}>        
                        <label>
                            <input 
                            className={Style.input_filtros}
                            type='checkbox'
                            onChange={(c) => {setMenu(c.target.checked)}}
                            />
                            {menu === false ? 
                            <span className={`material-icons-outlined ${Style.slider}`}>
                            menu
                          </span>
                          :
                          <span class="material-icons-outlined">
                          clear_all
                          </span>
                            }
                        
                        </label>

                </div>  


              </div>

                <div>
                {menu === false ? null : 
                <div className={Style.prueba}>
                   <ul className={Style.rutasResponsive}>
                            <li>Acerca de</li>
                            <li>Productos</li>
                            <a href='#Bruss'><li>Bruss</li></a>
                            <li>Puntos de venta</li>
                            <Link to='/tienda'><li>Tienda</li></Link>
                        </ul>
                </div>
                }
                </div>

              </div>
           
        </div>



    </div>
  )
}

export default Nav