import LogoCelular from '../../Imagenes/Rangers.png'
import Style from '../Nav/Nav.module.css'
import React, { useState } from 'react'
import Logo from '../../Imagenes/LogoRangers.png'
import { Link } from 'react-router-dom'
import { cambiarIngles, pagado } from '../../redux/actions'
import face from '../../Imagenes/facebook.svg'
import insta from '../../Imagenes/instagram.svg'
import { useSelector, useDispatch } from 'react-redux'
import CardCarrito from '../CardCarrito/CardCarrito'
import Swal from 'sweetalert2'

const NavMobile = () => {

    const tienda = '/tienda'
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

        <div className={Style.menuGlobal}>

            <Link to='/'>
                <div className={Style.LogoResponsive}>
                    <img src={LogoCelular} alt='Logo not Found' />
                </div>
            </Link>

            {/* Este es un div que envuelve las dos modales para celular */}

            <div className={Style.contenedroLogosModal}>

                {/* Aquí va la modal y logica del carrito del navBar cuando esta en modo celular */}

                {ruta !== tienda ? null :
                    <div className={Style.contenedirCheckBox}>
                        <label>
                            <input
                                className={Style.input_filtros}
                                type='checkbox'
                                onChange={(c) => { setCarrito(c.target.checked) }}
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
                            onChange={(c) => { setMenu(c.target.checked) }}
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
                ruta === tienda ?
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
                        productosCar.length === 0 ?
                            <div className={Style.carritovacio}>
                                <h1>Aun no tienes productos!</h1>
                            </div>
                            :
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
                    <div className={Style.comprar}>
                        <p>{`Subtotal: ${bandera.toFixed(2)}`}</p>
                        <button onClick={() => dispatch(pagado(productosCar))}>Comprar</button>
                    </div>
                </div>
            }

            {/* ----------------------- */}

        </div>

    )
}

export default NavMobile