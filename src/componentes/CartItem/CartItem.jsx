import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import './CartItem.css'

export const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div className="row d-flex align-items-center justify-content-center">
      <div className="col-2 d-flex align-items-center justify-content-center p-2">
        <img src={item.img} className="img-carrito"></img>
      </div>
      <div className="col-5">
        <h4 className="text-center"> {item.nombre}</h4>
      </div>
      <div className="col-2">
        <p className="text-center m-0">${item.precio}</p>
      </div>
      <div className="col-2">
        <p className="text-center m-0">{cantidad}</p>
      </div>
      <div className="col-1 d-flex align-items-center justify-content-center">
        <button onClick={() => eliminarProducto(item.id)} className="btn btn-outline-light"> Eliminar </button>
      </div>

    </div>
  )
}