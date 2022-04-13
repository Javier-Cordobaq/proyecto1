import React, { useState } from 'react'
import Style from '../Nav/Nav.module.css'
import Logo from '../../Imagenes/LogoRangers.png'
import LogoCelular from '../../Imagenes/Rangers.png'
import { Link } from 'react-router-dom'
import { cambiarIngles,pagado } from '../../redux/actions'
import face from '../../Imagenes/facebook.svg'
import insta from '../../Imagenes/instagram.svg'
import { useSelector, useDispatch } from 'react-redux'
import CardCarrito from '../CardCarrito/CardCarrito'
import Swal from 'sweetalert2'

const Nav = () => {

  const home = '/'
  const ruta = window.location.pathname
  const dispatch = useDispatch()

  const productosCar = useSelector(state => state.carrito)
  const infocompra = useSelector(state => state.infocompra)
  const idioma = useSelector(state => state.idioma)

  /* const cantidad = productosCar.length */

  let bandera = 0
  let cantidad = 0
  const subtotal = productosCar.map(c => bandera += c.price * c.cantidad)
  const cantidadprueba = productosCar.map(c => cantidad += c.cantidad)

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
                   <li><Link to='/tienda'>{idioma === "español" ? "Tienda" : "Shop"}</Link></li>  

                    <div className={Style.contenedorModalCarrito}>        
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
                              <Link to='/formulariopedido'>
                              <button onClick={() => dispatch(pagado(productosCar))}>Comprar</button>
                              </Link>
                            </div>
                            {infocompra !== '' ?
                              Swal.fire({
                              position: 'center',
                              icon: 'success',
                              title:'Cargando',
                              confirmButtonText: `<a href=${infocompra}>Ir a paypal</a>`
                              })
                              :
                              null
                            }
                        </div> 
                        }
                    </div>  

                  </ul>
                 :
                   <ul className={Style.rutas}>
                    <li><a href='#acerca'>{idioma === "español" ? "Acerca de" : "About"}</a></li>
                    <li><a href='#Bruss'>Bruss</a></li>
                    <li><a href='#productos'>{idioma === "español" ? "Productos" : "Products"}</a></li>
                    <li><a href='#puntos'>{idioma === "español" ? "Puntos de venta" : "Points of sale"}</a></li>
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
                        <img src={LogoCelular} alt='Logo not Found'/>
                </div>

                {/* Este es un dic que envuelve las dos modales para celular */}

                <div className={Style.contenedroLogosModal}>

                {/* Aquí va la modal y logica del carrito del navBar cuando esta en modo celular */}

                {ruta === home ? null : 
                <div className={Style.contenedirCheckBox}>        
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
                      </div>}

                {/* Aquí va el logito (checkbox) */}

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
                            </span>}                   
                        </label>
                </div>  

                {/* ------------------------------ */}

              </div>

              {/* Modal menu hamburguesa */}

              {/*<div>*/}
                  {menu === false ? null : 
                    ruta !== home ?
                     <ul className={Style.rutasResponsive}>
                      <Link to='/'><li>Home</li></Link>
                      <Link to='/tienda'><li>{idioma === "español" ? "Tienda" : "Shop"}</li></Link>  
                    </ul> 
                     
                    :
                    <ul className={Style.rutasResponsive}>
                              <Link to='/'><li>{idioma === "español" ? "Acerca de" : "About"}</li></Link>
                              <a href='#Bruss'><li>Bruss</li></a>
                              <a href='#productos'><li>{idioma === "español" ? "Productos" : "Products"}</li></a>
                              <a href='#puntos'><li>{idioma === "español" ? "Puntos de venta" : "Points of sale"}</li></a>
                              <Link to='/tienda'><li>{idioma === "español" ? "Tienda" : "Shop"}</li></Link>
                    </ul>}
              {/*</div>*/}

                {/* ----------------------- */}

                {/* Modal carrito vista movil */}

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
                                <button onClick={() => dispatch(pagado())}>Comprar</button>
                              </div>
                          </div> 
                          }

                  {/* ----------------------- */}

              </div>

              </div>
           
        </div>

    </div>
  )
}

export default Nav