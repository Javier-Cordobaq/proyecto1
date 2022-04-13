import React, {useEffect} from 'react'
import Nav from '../Nav/Nav'
import style from '../Detail/Detail.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCar } from '../../redux/actions'
import { getById } from '../../redux/actions'

const Detail = () => {

    useEffect(() => {
        dispatch(getById(_id))
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
        <Nav/>
        <div className={style.globalCont}>
            <div className={style.imagen}>
                <img src={detail.image} alt='Not Found' />
            </div>
            <div className={style.texto}>
                <h1>{detail.name}</h1>
                <p className={style.price}>$ {detail.price}</p>
                <p className={style.descripcion}>{detail.detalle}</p>
                <button onClick={() => {agregarCarrito(detail)}}>Añadir al carrito</button>
               {/*  <p className={style.categoria}>{detail.type.name}</p> */}
            </div>
        </div>
    </div>
  )
}

export default Detail