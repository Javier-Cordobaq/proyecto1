import React, { useState } from 'react'
import Style from '../Nav/Nav.module.css'
import Logo from '../../Imagenes/LogoRangers.png'
import { Link } from 'react-router-dom'
import { cambiarIngles } from '../../redux/actions'
import face from '../../Imagenes/facebook.svg'
import insta from '../../Imagenes/instagram.svg'
import { useSelector, useDispatch } from 'react-redux'
import CardCarrito from '../CardCarrito/CardCarrito'
import { style } from '@mui/material/node_modules/@mui/system'

const Nav = () => {

  const home = '/'
  const ruta = window.location.pathname
  const dispatch = useDispatch()
  const productosCar = useSelector(state => state.carrito)
  console.log(productosCar, 'Carrito en el componente nav')
  const idioma = useSelector(state => state.idioma)
  const [menu, setMenu] = useState(false)
  const [carrito, setCarrito] = useState(false)

  return (
    <div className={Style.contenedorSticky}>
        <div className={Style.contenedorGlobal}>
                <div className={Style.contenedorLogo}>
                    <img src={Logo} alt='Logo not Found'/>
                </div>
                <div className={Style.contenedorDerecha}>
                  { ruta !== home ? 

                   <ul className={Style.rutas}>
                   <li><Link to='/'>Home</Link></li>
                   <li><Link to='/tienda'>Tienda</Link></li> 

                    <div className={Style.filtros_cont}>        
                        <label>
                            <input 
                            className={Style.input_filtros}
                            type='checkbox'
                            onChange={(c) => {setCarrito(c.target.checked)}}
                            />
                            {carrito === false ? 
                            <span class="material-icons">
                            shopping_cart
                            </span>
                            :
                            <span class="material-icons-outlined">
                            shopping_cart
                            </span>
                            }
                        </label>
                        {carrito === false ? null
                        :
                        <div className={Style.modalCar}>
                          {
                            productosCar.map((c, index) => 
                            <CardCarrito
                            key={index}
                            name={c.name}
                            image={c.image}
                            price={c.price}
                            id={c._id}
                            cantidad={c.cantidad}
                            />)
                          }
                          {
                            productosCar.length === 0 ?
                            <div className={Style.carritovacio}>
                            <h1>Aun no tienes productos!</h1>
                            </div>
                            :
                            null
                          }
                            <div className={Style.comprar}>
                              <p>Subtotal: </p>
                              <button>Comprar</button>
                            </div>
                        </div> 
                        }
                    </div>  

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

                        <a onClick={()=>{dispatch(cambiarIngles())}}><img src={insta} height={20} alt='Not Found'/></a>
                      
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
                          <span className="material-icons-outlined">
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

        {/* Modal productos carrito */}

    </div>
  )
}

export default Nav