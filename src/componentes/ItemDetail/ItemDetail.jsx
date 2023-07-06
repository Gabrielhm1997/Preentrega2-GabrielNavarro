import './ItemDetails.css'
import { ItemCount } from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'


const ItemDetail = ({id, nombre, precio, img, stock}) => {

  const [cantidadAgregada, setcantidadAgregada] = useState(0);

  const {agregarProducto} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setcantidadAgregada(cantidad);
    //console.log("Productos agregados:" + cantidad);
    const item = {id, nombre, precio};
    agregarProducto(item, cantidad);
  }

  return (
    <div className='itemDetail col-6 container-fluid row d-flex justify-content-center align-items-center'>
      <img src={img} alt={nombre} className='col-6'/>
      <h2 className='text-center'>{nombre}</h2>
      <h3 className='text-center'>${precio}</h3>
      <h3 className='text-center'>ID: {id}</h3>
      <h3 className='text-center'>Unidades Disponibles: {stock}</h3>
      
      { cantidadAgregada > 0 ?  <Link to="/cart"> Terminar Compra </Link> : <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>}
      
    </div>
  )
}

export default ItemDetail