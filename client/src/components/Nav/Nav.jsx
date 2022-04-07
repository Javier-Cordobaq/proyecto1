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

  /* const cantidad = productosCar.length */
  let bandera = 0
  let cantidad = 0
  const subtotal = productosCar.map(c => bandera += c.price * c.cantidad)
  const cantidadprueba = productosCar.map(c => cantidad += c.cantidad)

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
                               <div className={Style.carrito}>
                               <span class="material-icons">
                               shopping_cart
                               </span>
                               {cantidad !== 0 ? <p>{cantidad}</p> : null}
                             </div>
                            :
                            <div className={Style.carrito}>
                            <span class="material-icons-outlined">
                            shopping_cart
                            </span>
                            {cantidad !== 0 ? <p>{cantidad}</p> : null}
                          </div>
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
                            _id={c._id}
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
                              <p>{`Subtotal: ${bandera.toFixed(2)}`}</p>
                              <button>Comprar</button>
                            </div>
                        </div> 
                        }
                    </div>  

                  </ul>
                 :
                   <ul className={Style.rutas}>
                    <li><a href='#acerca'>{idioma === "español" ? "Acerca de" : "About"}</a></li>
                    <li><a href='#Bruss'>Bruss</a></li>
                    <li><a href='#productos'>{idioma === "español" ? "Productos" : "Products"}</a></li>
                    <li>{idioma === "español" ? "Puntos de venta" : "Points of sale"}</li>
                    <li><Link to='/tienda'>{idioma === "español" ? "Tienda" : "Shop"}</Link></li>
                  </ul>

                  }
                
                    <div className={Style.botones}>
                      
                        <a href='https://www.instagram.com/rangersnacks/?hl=es-la'><img src={face} height={20} alt='Not Found'/></a>
                      
                     
                        <a href='https://www.instagram.com/rangersnacks/?hl=es-la'><img src={insta} height={20} alt='Not Found'/></a>

                        {idioma === 'español' ?
                        <button onClick={()=>{dispatch(cambiarIngles())}}>EN</button>
                        :
                        <button onClick={()=>{dispatch(cambiarIngles())}}>ES</button>
                        }
                      
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
                    {ruta !== home ?
                     <ul className={Style.rutasResponsive}>
                      <Link to='/'><li>Home</li></Link>
                      <Link to='/tienda'><li>Tienda</li></Link>  
                      <div className={Style.filtros_cont}>        
                        <label>
                            <input 
                            className={Style.input_filtros}
                            type='checkbox'
                            onChange={(c) => {setCarrito(c.target.checked)}}
                            />
                            {carrito === false ? 
                               <div className={Style.carrito}>
                               <span class="material-icons">
                               shopping_cart
                               </span>
                               {cantidad !== 0 ? <p>{cantidad}</p> : null}
                             </div>
                            :
                            <div className={Style.carrito}>
                            <span class="material-icons-outlined">
                            shopping_cart
                            </span>
                            {cantidad !== 0 ? <p>{cantidad}</p> : null}
                          </div>
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
                            _id={c._id}
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
                              <p>{`Subtotal: ${bandera.toFixed(2)}`}</p>
                              <button>Comprar</button>
                            </div>
                        </div> 
                        }
                    </div>  
                    </ul>
                    :
                    <ul className={Style.rutasResponsive}>
                              <Link to='/'><li>{idioma === "español" ? "Acerca de" : "About"}</li></Link>
                              <a href='#Bruss'><li>Bruss</li></a>
                              <a href='#productos'><li>{idioma === "español" ? "Productos" : "Products"}</li></a>
                              <li>{idioma === "español" ? "Puntos de venta" : "Points of sale"}</li>
                              <Link to='/tienda'><li>{idioma === "español" ? "Tienda" : "Shop"}</li></Link>
                    </ul>
                    }
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