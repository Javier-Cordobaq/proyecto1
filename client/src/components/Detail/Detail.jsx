import React, {useState, useEffect} from 'react'
import Nav from '../Nav/Nav'
import style from '../Detail/Detail.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { getById, addToCar, pagado, reset } from '../../redux/actions'
import CardCarrito from '../CardCarrito/CardCarrito'
import Swal from 'sweetalert2'

const Detail = () => {

  const [unidad, setUnidad] = useState(1)

  /* Variables carrito */
  const productosCar = useSelector(state => state.carrito)
  const infocompra = useSelector(state => state.infocompra)

  let bandera = 0
  let cantidad = 0
  const subtotal = productosCar.map(c => bandera += c.price * c.cantidad)
  const cantidadprueba = productosCar.map(c => cantidad += c.cantidad)

  const [carrito, setCarrito] = useState(false)

    useEffect(() => {
        dispatch(getById(_id))
        return () => {dispatch(reset())}
    }, [])

    const {_id} = useParams();

    const detail = useSelector(c => c.detail)

    const dispatch = useDispatch();

    const agregarCarrito = (producto) => {
        const pro = {
            image: producto.image, 
            price: producto.price, 
            name: producto.name, 
            _id: producto._id,
            cantidad: 1
        }
        dispatch(addToCar(pro))
    }   

  return (
    <div className={style.centrar}>
          
        <div className={style.globalCont}> {/* Estilos contenido general */} 

            <div className={style.imagen}>
                <img src={detail.image} alt='' />
            </div> 

            <div className={style.texto}>

            <div className={style.contNav}>

            <Link to='/tienda'>
              <div>
                <span class="material-icons">
                arrow_back_ios_new
                </span>
              </div>
            </Link>

              <div className={style.contenedorModalCarrito}> {/* Codigo carrito */}    
                          <label>
                              <input 
                              className={style.input_filtros}
                              type='checkbox'
                              onChange={(c) => {setCarrito(c.target.checked)}}
                              />
                              {carrito === false ? 
                                <div className={style.carrito}>
                                <span class="material-icons">
                                shopping_cart
                                </span>
                                {cantidad !== 0 ? <p>{cantidad}</p> : null}
                              </div>
                              :
                              <div className={style.carrito}>
                              <span class="material-icons-outlined">
                              shopping_cart
                              </span>
                              {cantidad !== 0 ? <p>{cantidad}</p> : null}
                            </div>
                              }
                          </label>
                          {carrito === false ? null
                          :
                          <div className={style.modalCar}>
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
                              <div className={style.carritovacio}>
                              <h1>Aun no tienes productos!</h1>
                              </div>
                              :
                              null
                            }
                              <div className={style.comprar}>
                                <p>{`Subtotal: ${bandera.toFixed(2)}`}</p>
                                <button onClick={() => dispatch(pagado(productosCar))}>Comprar</button>
                              </div>
                              {infocompra !== '' ?
                                 Swal.fire({
                                  position: 'center',
                                  icon: 'success',
                                  title:'Genial, empezemos con tu proceso de compra',
                                  footer: `<a href=${infocompra}>Ir a paypal</a>`,
                                  showConfirmButton: false,
                                  })
                                :
                                null
                              }
                          </div> 
                          }
                      </div>  {/* ------------------------------ */}

                    </div>

                <h1>{detail.name}</h1>
                <p className={style.descripcion}>{detail.detalle}</p>
                <div className={style.contAñadir}>
                  <input 
                  type='number'
                  onChange={(e) => {setUnidad(e.target.value)}}
                  />
                  <button onClick={() => {agregarCarrito(detail)}}>Añadir al carrito</button>
                  <p className={style.price}>$ {detail.price}</p>
                </div>
               {/*  <p className={style.categoria}>{detail.type.name}</p> */}
            </div>
        </div> {/* ------------------------------ */}

    </div>
  )
}

export default Detail