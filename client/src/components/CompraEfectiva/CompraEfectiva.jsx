import React from 'react'
import Swal from 'sweetalert2'

const CompraEfectiva = () => {
  return (
    <div>
          {
            Swal.fire({
            position: 'center',
            icon: 'success',
            title:'Cargando',
            footer: `<a href='/'>Ir a paypal</a>`
            })
            }
    </div>
  )
}

export default CompraEfectiva