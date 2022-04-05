import React, { useState } from 'react'
import Style from '../Nav/Nav.module.css'
import Logo from '../../Imagenes/LogoRangers.png'
import { Link } from 'react-router-dom'
import { cambiarIngles } from '../../redux/actions'
import face from '../../Imagenes/facebook.svg'
import insta from '../../Imagenes/instagram.svg'

const Nav = () => {

  const tienda = '/tienda'
  const ruta = window.location.pathname

  const [menu, setMenu] = useState(false)

  return (
    <div className={Style.contenedorSticky}>
        <div className={Style.contenedorGlobal}>
                <div className={Style.contenedorLogo}>
                    <img src={Logo} alt='Logo not Found'/>
                </div>
                <div className={Style.contenedorDerecha}>
                  { ruta === tienda ? 

                   <ul className={Style.rutas}>
                   <li><Link to='/'>Home</Link></li>
                   <li><Link to='/tienda'>Tienda</Link></li>
                  </ul>
                 :
                   <ul className={Style.rutas}>
                    <li><a href='#acerca'>Acerca de</a></li>
                    <li><a href='#Bruss'>Bruss</a></li>
                    <li><a href='#productos'>Productos</a></li>
                    <li>Puntos de venta</li>
                    <li><Link to='/tienda'>Tienda</Link></li>
                  </ul>

                  }
                
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
                            <Link to='/'><li>Acerca de</li></Link>
                            <li>Productos</li>
                            <Link to='/#Bruss' ><li>Bruss</li></Link>
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