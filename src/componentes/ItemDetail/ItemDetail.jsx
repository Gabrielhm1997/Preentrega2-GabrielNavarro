import './ItemDetails.css'
import { ItemCount } from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'


const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {

  const [cantidadAgregada, setcantidadAgregada] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setcantidadAgregada(cantidad);
    const item = { id, nombre, precio, img };
    agregarProducto(item, cantidad);
  }

  return (
    <div className='itemDetail p-5 col-10 container-fluid row d-flex justify-content-center align-items-center'>

      <div className='contenedor-imagen col-6 d-flex justify-content-center align-items-center'>
        <img src={img} alt={nombre} className="img-detalles" />
        <img className={stock === 0 ? "agotado-detalles" : "no-agotado"} src="/img/agotado.png"></img>
      </div>

      {/* <div className='col-6 d-flex justify-content-center align-items-center'>
        <img src={img} alt={nombre} className='img-detalles' />
      </div> */}

      <div className='col-6'>
        <h2 className='text-center'>{nombre}</h2>
        <h3 className='text-center'>{descripcion}</h3>
        <h3 className='text-center'>${precio}</h3>
        <h3 className='text-center'>ID: {id}</h3>
        <h3 className='text-center'>Unidades Disponibles: {stock}</h3>
        <div className="container-fluid ms-0 mt-2 row d-flex justify-content-center align-items-center">

          {stock <= 0 ?
            <strong className='text-center m-0' style={{ color: "red" }}>Agotado</strong>
            :
            cantidadAgregada > 0 ? <Link to="/cart" className="btn btn-outline-light col-6"> Ir al Carrito </Link> : <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
          }

        </div>
      </div>
    </div>
  )
}

export default ItemDetail