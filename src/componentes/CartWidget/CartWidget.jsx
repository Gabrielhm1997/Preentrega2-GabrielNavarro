import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import './CartWidget.css'

const CartWidget = () => {

  const { cantidadProductos } = useContext(CarritoContext);

  return (
    <div className="cartWidget d-flex justify-content-center align-items-center">
      <Link to="/cart">
        <i className="bi bi-cart3 m-0 p-0 d-flex justify-content-center align-items-center"></i>
        {
          cantidadProductos > 0 && <strong> {cantidadProductos} </strong>
        }
      </Link>
    </div>
  )
}

export default CartWidget